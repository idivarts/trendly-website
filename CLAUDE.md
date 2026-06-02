# CLAUDE.md — Trendly Website

> **⚠️ Read the monorepo root before going further.**
> This file covers only `trendly-website`-specific detail. For the complete picture
> of the entire Trendly platform — every micro-repo, shared architecture,
> domain model, auth flow, Notion preferences, and more — read the parent first:
>
> - **Full monorepo context**: `../CLAUDE.md`
> - **Knowledge graph** (keyword → exact file path): `../.claude/knowledge-graph.json`

Context file for Claude. Read this first before making changes.

---

## What this project is

A modern marketing site for **Trendly** (https://www.trendly.now). As of the
2026 repositioning, Trendly is positioned as:

> **The AI social media tool for founders & small teams** — every AI model in
> one workspace. (SEO target cluster: "AI social media tool / AI social media
> management", not the lower-volume "marketing workspace".)

- **ICP / audience**: US-based — (1) **solo founders**, (2) **small in-house
  marketing teams (2–3)**, and (3) **agencies**. Agencies use Trendly two ways:
  run client social at scale on the SaaS subscription (multi-workspace,
  white-label **Agency** tier), **and** in **coalition/partnership** — an ads
  agency plugs in Trendly for content & strategy; a content/strategy shop
  partners with Trendly for ads & performance marketing. The SaaS subscription
  is always available regardless.
- **Market**: US-first. **USD pricing.** (See the legacy exception under
  *Deprecated / legacy surfaces* below.)
- **The wedge — TWO pillars the homepage leads with (emphasize these everywhere):**
  1. **Every AI model in one place.** GPT, Claude, Gemini, ElevenLabs, Flux,
     Perplexity in one workspace; Trendly routes each task to the best model.
     Chat to build strategy + ideas → calendar in **one click**; generate
     captions, images, and scripts from a **single prompt**. (Stop tab-switching
     between AI tools.)
  2. **Team collaboration on AI content.** Collaborating on AI output is broken
     today (copy into a doc, ping Slack). Trendly is built for exactly this:
     generate → **review together** → edit (manually or with AI) → approve/deny →
     full workflow.
  - Supporting features: replace your whole stack (Docs/Notion/calendar/scheduler/
    AI subs) · schedule to every platform from one place with AI assist
    (time/caption/hashtags) · unified **inbox** for all comments & DMs ·
    **Impulse** (comment-to-cart automation) · creators on tap · done-for-you
    services.
- **Positioning is "more than a scheduler"** — Buffer / Later / Hootsuite /
  SocialPilot help you *publish*; Trendly is the AI social media tool that helps
  you *create, collaborate, schedule, and engage* — every model in one place.

Operated by **IDIVARTS Solutions Pvt Ltd** (`@idiv.in`).

> **What this is NOT anymore** (do not reintroduce these — they are the OLD
> India-marketplace positioning that was deliberately dropped on the main site):
> ₹ / INR pricing, the "Pilot Programme" as the homepage narrative, "Anti-Agency",
> "BOT / Build–Operate–Transfer", sub-100k-only micro-creator-marketplace framing,
> "audience = Indian D2C startups".

---

## 🛑 Honesty / proof rule (READ BEFORE WRITING ANY COPY)

**Trendly the product is new. Never fabricate social proof.** No invented
testimonials, customer logos, ratings, user counts, ROI multiples, or "trusted
by X brands" claims. This is a hard rule across all pages, blog posts, and tool
pages.

The **only** approved proof claims live in `PROOF` in `lib/site-config.ts` and
come from the company's *creator-marketplace track record* (not the new AI
workspace's usage):

| Claim | Source `PROOF` key | Allowed framing |
|---|---|---|
| **10,000+ creators** | `creators` / `creatorsLabel` | Creators who have joined the platform / network. Do NOT imply they use the new AI workspace. |
| **100s of brand campaigns** | `brands` / `brandsLabel` | "From the team behind 100s of brand campaigns" — team credibility only. |
| **First 100 founders** | `earlyAccessCount` / `earlyAccessLabel` | Founding-member / early-access offer. |
| **Free forever · no credit card · cancel anytime** | `riskReversal` | Risk reversal on CTAs. |

When you need trust on a page, use the team's track record + a founding-member
offer (see `components/Testimonials.tsx` and `components/LogosMarquee.tsx` for
the honest pattern — channels Trendly supports + verified track record, never
fake logos).

---

## Tech stack

- **Next.js 14** (App Router) + TypeScript, **static HTML export**
  (`output: 'export'` in `next.config.js` → builds to `out/`, **no Node server
  at runtime**). `trailingSlash: true` for S3 hosting.
  - Consequence: **no API routes, no server actions, no `redirects()`**. Anything
    dynamic must call an external backend (see *Free tools* below) or run
    client-side. Redirects must be done at the CloudFront/S3 edge.
- **Tailwind CSS 3** with a custom theme (`tailwind.config.ts`).
- **React 18** — `'use client'` only where state is needed (`Navbar`, `Pricing`,
  `InteractiveDemo`, `FAQ`, `ManagedServices`, `QuoteForm`, `ScrollReveal`,
  `ParallaxOrb`, `MarketingPixels`, `Footer`, `ToolRunner`, contact form).
- No external UI/animation library — hand-rolled SVG + Tailwind keyframes.
- Fonts via Google Fonts `@import` in `app/globals.css`: **Plus Jakarta Sans**
  (display) + **Inter** (body).
- Blog markdown pipeline: `gray-matter` + `marked` (server-side in `lib/posts.ts`).
- Analytics/retargeting pixels via `next/script` (see *Marketing pixels*).

## How to run

```bash
npm install
npm run dev      # next dev on http://localhost:8084   (note: port 8084, not 3000)
npm run lint
# build = static export + S3 deploy (see scripts below). NOT a plain `next build`.
npm run build    # runs ./export.sh && ./deploy-s3.sh
npm run start    # runs ./start.sh
```

> ⚠️ **Dev/build gotcha:** Do **not** run a production build (`next build` /
> `npm run build` / `./export.sh`) while the user's `next dev` (port 8084) is
> live — they share the `.next/` dir and it can corrupt the dev server,
> requiring a dev restart. The user runs the dev server locally; Claude's
> sandbox usually cannot reach the npm registry.

Deploy is **S3 + CloudFront**: `export.sh` produces `out/`, `deploy-s3.sh`
syncs it. `cloudfront-url-rewriter.js` is the edge function for clean URLs (and
is where retired-blog-slug 301s would live — see `BLOG-AUDIT.md`).

---

## File structure

```
trendly-website/
├── app/
│   ├── layout.tsx                     # Root layout: metadata (US/USD positioning), <MarketingPixels/>, fonts
│   ├── page.tsx                       # Homepage — composes all sections (see "Homepage composition")
│   ├── globals.css                    # Tailwind directives + component classes + .prose-content (blog)
│   ├── about/page.tsx                 # /about
│   ├── contact/page.tsx               # /contact — 'use client' form → CONTACT_ENDPOINT (Formspree placeholder)
│   ├── pricing/page.tsx               # /pricing — USD plans + comparison + FAQ
│   ├── terms-and-condition/page.tsx           # /terms-and-condition
│   ├── privacy-policy/page.tsx                # /privacy-policy
│   ├── data-deletion-instruction-page/page.tsx# /data-deletion-instruction-page
│   ├── blog/page.tsx                  # /blog — index
│   ├── blog/[slug]/page.tsx           # /blog/:slug — generateStaticParams over blog-posts/*.md
│   ├── product/
│   │   ├── ai-strategy/page.tsx       # /product/ai-strategy      — AI Strategy Engine
│   │   ├── content-calendar/page.tsx  # /product/content-calendar — calendar + team approvals
│   │   ├── creators/page.tsx          # /product/creators         — creator campaigns
│   │   └── impulse/page.tsx           # /product/impulse          — comment-to-cart / comment-to-DM
│   ├── solutions/
│   │   ├── founders/page.tsx          # /solutions/founders
│   │   └── small-teams/page.tsx       # /solutions/small-teams
│   ├── compare/
│   │   ├── trendly-vs-buffer/page.tsx
│   │   ├── trendly-vs-later/page.tsx
│   │   ├── trendly-vs-hootsuite/page.tsx
│   │   └── trendly-vs-socialpilot/page.tsx   # all render <ComparePage/>
│   ├── tools/
│   │   ├── page.tsx                            # /tools — hub
│   │   ├── instagram-caption-generator/page.tsx  # AI (ToolRunner)
│   │   ├── content-idea-generator/page.tsx       # AI (ToolRunner)
│   │   ├── hook-generator/page.tsx               # AI (ToolRunner)
│   │   ├── social-media-calendar-template/page.tsx  # static template (no ToolRunner)
│   │   └── best-time-to-post/page.tsx            # static guide (no ToolRunner)
│   ├── services/
│   │   ├── page.tsx                   # /services — done-for-you hub (ManagedServices + QuoteForm)
│   │   ├── influencer-led-growth/page.tsx
│   │   ├── paid-ads/page.tsx
│   │   └── performance-marketing/page.tsx
│   ├── pilot/page.tsx                 # /pilot — legacy Pilot Programme narrative (not in homepage/nav)
│   └── lp/                            # ⚠️ legacy ad landing pages, noindex, still INR — see "Deprecated"
│       ├── saas/page.tsx
│       ├── pilot/page.tsx
│       └── agency/page.tsx
├── components/
│   ├── Navbar.tsx          # 'use client' — sticky; renders dropdown IA from NAV (site-config)
│   ├── PageShell.tsx       # Navbar + content(pt-24) + Footer; exports PageHero (eyebrow/title/highlight/subtitle)
│   ├── Footer.tsx          # 'use client' — dark footer, columns sourced inline (Product/Services/For you/Company)
│   ├── Logo.tsx            # SVG logo + wordmark (`dark` prop)
│   ├── Hero.tsx            # Homepage hero — calendar/post preview + ParallaxOrbs + PROOF
│   ├── LogosMarquee.tsx    # Honest trust bar: supported CHANNELS + team track record (no fake logos)
│   ├── HowItWorks.tsx      # Strategy → Calendar → Publish → Creators
│   ├── Features.tsx        # Alternating feature blocks (AI strategy / calendar+workflow / creators)
│   ├── Impulse.tsx         # Homepage teaser for the Impulse (comment-to-cart) product
│   ├── InteractiveDemo.tsx # 'use client' — mock content-calendar/post-brief demo (mock data)
│   ├── WhyTrendly.tsx      # Differentiator cards (one workspace, strategic AI, …)
│   ├── CreatorsAndGrowth.tsx # Self-serve creator campaigns + done-for-you growth, side by side
│   ├── WhySwitch.tsx       # "More than a scheduler" comparison table → links to /compare/*
│   ├── DoneForYou.tsx      # Services teaser (sourced from SERVICES) → /services
│   ├── ManagedServices.tsx # 'use client' — services detail used on /services
│   ├── Pricing.tsx         # 'use client' — USD plans (Free/Starter/Team/Agency) + Enterprise row + monthly/annual
│   ├── Testimonials.tsx    # HONEST: team track record + founding-member offer (NO fabricated quotes)
│   ├── FAQ.tsx             # 'use client' — accordion + emits faqSchema JSON-LD
│   ├── Blog.tsx            # Homepage recent-posts teaser (from lib/posts)
│   ├── CTA.tsx             # Final gradient CTA with stat tiles (uses approved proof only)
│   ├── ComparePage.tsx     # Shared template for all /compare/* pages (props: rows, faqs, where-each-wins…)
│   ├── JsonLd.tsx          # JSON-LD helpers: organizationSchema / softwareApplicationSchema / breadcrumbSchema / faqSchema
│   ├── ScrollReveal.tsx    # 'use client' — IntersectionObserver reveal wrapper (direction/delay/distance)
│   ├── ParallaxOrb.tsx     # 'use client' — scroll-parallax decorative blob
│   ├── MarketingPixels.tsx # 'use client' — renders configured analytics/retargeting pixels (in layout)
│   ├── NewsletterForm.tsx  # 'use client' — non-functional newsletter stub
│   ├── QuoteForm.tsx        # 'use client' — services "get a quote" form → QUOTE_ENDPOINT (placeholder)
│   ├── LegalDoc.tsx        # Numbered-section layout for legal pages
│   ├── PilotProgramme.tsx  # Legacy Pilot Programme section (used by /pilot; not on homepage)
│   ├── AntiAgency.tsx      # ⛔ thin re-export of PilotProgramme — safe to delete
│   ├── WhyMicro.tsx        # Dark micro-creator stats section (legacy; not on current homepage)
│   └── tools/
│       ├── ToolRunner.tsx  # 'use client' — reusable AI-tool form → lib/tools-api generate(); copy/loading/error/unreachable states
│       ├── ToolFAQ.tsx     # Tool-page FAQ section (pass same array as faqSchema)
│       └── ToolCrossSell.tsx # "Do this on autopilot in Trendly" band
├── blog-posts/             # ⚠️ ALL blog posts live here as .md — never hand-edit lib/posts.ts
│   └── 01-…  …  13-… .md   # 13 posts (see "Blog" section + BLOG-AUDIT.md)
├── lib/
│   ├── site-config.ts      # LINKS, CONTACT_ENDPOINT, QUOTE_ENDPOINT, SITE, PROOF, NAV, COMPARISONS, SERVICES
│   ├── tools-api.ts        # generate() client → POST be.trendly.now/tools/generate; ToolError
│   ├── marketing-config.ts # MARKETING pixel IDs + isConfigured()
│   └── posts.ts            # Auto-loads blog-posts/*.md (gray-matter + marked) — do NOT hand-edit post data
├── BLOG-AUDIT.md           # keep/rewrite/retire verdicts for the 13 posts + redirect plan
├── MARKETING_SETUP.md      # where to get each pixel/analytics ID
├── tailwind.config.ts      # custom theme (colors, gradients, animations)
├── next.config.js          # output:'export', trailingSlash, images.unoptimized
├── export.sh / deploy-s3.sh / start.sh
├── cloudfront-url-rewriter.js  # CloudFront edge function (clean URLs / redirects)
└── CLAUDE.md               # this file
```

The `@/` alias resolves to the project root (e.g. `@/components/Hero`,
`@/lib/site-config`).

---

## Shared config — `lib/site-config.ts` (single source of truth)

Change these once and they update everywhere:

- **`LINKS`** — `BRAND_SIGNUP` (`https://brands.trendly.now`),
  `CREATOR_SIGNUP` (`https://creators.trendly.now`),
  `BOOK_DEMO` (`https://cal.com/rahul-idiv/30min`).
- **`CONTACT_ENDPOINT`** / **`QUOTE_ENDPOINT`** — Formspree placeholders
  (`REPLACE_ME…`); forms show success UX but `console.warn` until real IDs land.
- **`SITE`** — `name`, `origin` (`https://www.trendly.now`), `legalName`,
  `tagline` ("The AI marketing workspace for founders and small teams"),
  `email` (`support@idiv.in`), `twitter` (`@trendlynow`).
- **`PROOF`** — the only approved proof claims (see honesty rule above).
- **`NAV`** — dropdown IA the Navbar renders (Product / Solutions / Services /
  Pricing / Tools / Resources). Anchor links use `/#id` so they resolve from any
  subroute.
- **`COMPARISONS`** — drives the `/compare/*` routes + cross-links (Buffer,
  Later, Hootsuite, SocialPilot).
- **`SERVICES`** — drives the `/services/*` routes + homepage `DoneForYou`
  teaser (influencer-led growth, paid ads, performance marketing).
- **`AI_MODELS`** — the models shown in the "every model in one place" story
  (GPT, Claude, Gemini, ElevenLabs, Flux, Perplexity + what each is best for).
  ⚠️ Verify which integrations are live vs planned before publishing.

Other shared modules:
- **`components/SocialIcons.tsx`** — brand-color platform app-icons (`SocialIcon`,
  `SocialRow`, `SOCIALS`) for Instagram/TikTok/LinkedIn/X/YouTube/Facebook. Use
  these (not 2-letter chips) wherever multi-platform support is shown.
- **`components/QuoteForm.tsx`** — the services "get a quote" form (→ `QUOTE_ENDPOINT`).
- **Homepage section components** (current narrative): `AIModels`, `CreateWithAI`,
  `CollaborateOnAI`, `OneWorkspace`, `ScheduleEverywhere`, `UnifiedInbox`,
  `Impulse`, `WhySwitch`, `DoneForYou`.
- **`components/JsonLd.tsx`** — `<JsonLd data={…}/>` emits `application/ld+json`
  at build time. Helpers: `organizationSchema()`, `softwareApplicationSchema()`
  (USD, free offer), `breadcrumbSchema([{name,path}])`, `faqSchema([{q,a}])`.
  Pass the **same** FAQ array to both the visible FAQ and `faqSchema` so content
  and structured data stay in sync.
- **`lib/tools-api.ts`** — see *Free tools* below.
- **`lib/marketing-config.ts`** — see *Marketing pixels* below.

---

## Routes

| Route | Notes |
|---|---|
| `/` | Homepage |
| `/about` | Company story |
| `/contact` | `'use client'` form → `CONTACT_ENDPOINT` |
| `/pricing` | USD plans + comparison + FAQ |
| `/product/ai-strategy` | AI Strategy Engine |
| `/product/content-calendar` | Calendar + team approvals |
| `/product/creators` | Creator campaigns |
| `/product/impulse` | Impulse — comment-to-cart / comment-to-DM automation |
| `/solutions/founders` | Solo-founder ICP page |
| `/solutions/small-teams` | 2–3 person team ICP page |
| `/compare/trendly-vs-{buffer,later,hootsuite,socialpilot}` | Render `<ComparePage/>` |
| `/tools` | Free-tools hub |
| `/tools/instagram-caption-generator` · `/tools/content-idea-generator` · `/tools/hook-generator` | AI tools (`ToolRunner`) |
| `/tools/social-media-calendar-template` · `/tools/best-time-to-post` | Static (no backend call) |
| `/services` + `/services/{influencer-led-growth,paid-ads,performance-marketing}` | Done-for-you / agency offering |
| `/blog`, `/blog/[slug]` | 13 posts from `blog-posts/*.md` |
| `/terms-and-condition`, `/privacy-policy`, `/data-deletion-instruction-page` | Legal (`LegalDoc`). **Note the long slugs** — footer links to these exact paths. |
| `/pilot` | Legacy Pilot Programme page (not in nav/homepage) |
| `/lp/{saas,pilot,agency}` | ⚠️ Legacy ad landing pages, `noindex`, still INR — see *Deprecated* |

Inner pages use `<PageShell>` (Navbar + `pt-24` content + Footer) and
`<PageHero eyebrow title highlight subtitle/>` for the standard top-of-page
gradient headline (`highlight` is the substring of `title` that gets the
gradient).

---

## Homepage composition (`app/page.tsx`)

Order (rebuilt 2026 around the AI + collaboration narrative — create →
collaborate → consolidate → schedule → engage → convert → services):

1. **Navbar** → 2. **Hero** (chat w/ model-switcher → 1-click calendar) →
3. **AIModels** (dark — every model in one place, the differentiator) →
4. **CreateWithAI** (one prompt → caption/image/script) → 5. **CollaborateOnAI**
(generate → review → edit → approve workflow) → 6. **OneWorkspace** (replace
your stack) → 7. **ScheduleEverywhere** (multi-publish + AI assist, brand icons)
→ 8. **UnifiedInbox** (all comments/DMs, brand icons) → 9. **Impulse**
(comment-to-cart) → 10. **WhySwitch** (more-than-a-scheduler → /compare/*) →
11. **DoneForYou** (dark — services) → 12. **Pricing** → 13. **Testimonials**
(honest founding-member proof) → 14. **FAQ** → 15. **CTA** → 16. **Footer**.

> **Dropped from the homepage** (components still on disk, used elsewhere or
> retired): `LogosMarquee`, `HowItWorks`, `Features`, `InteractiveDemo`,
> `WhyTrendly`, `CreatorsAndGrowth`. Don't re-add without reason — the homepage
> is intentionally focused on the two pillars.

`page.tsx` also emits `organizationSchema()` + `softwareApplicationSchema()`
JSON-LD. To add a section: build it in `components/`, import it, slot it in, and
follow the heading/eyebrow/gradient + mock-visual pattern above.

---

## Pricing (USD)

In `components/Pricing.tsx` (the `plans` array; `/pricing` has the full table):

| Plan | Monthly | Annual (save 20%) | Notes |
|---|---|---|---|
| **Free** | $0 | $0 | Free forever, no credit card |
| **Starter** | $29 | $23 | Individuals / freelancers |
| **Team** | $79 | $63 | **Most popular** |
| **Agency** | $199 | $159 | White-label, client portal, API |
| **Enterprise** | Custom | — | Separate row → `mailto:support@idiv.in` |

All CTAs go to `LINKS.BRAND_SIGNUP`. **USD only** on the main site — never ₹/INR.

---

## Brand Voice, Tone & Content System (SOURCE OF TRUTH — keep consistent site-wide)

**The homepage defines the tone. Every other page must match it.** The two
things we emphasize above all: **AI (every model in one place)** and **team
collaboration on AI content**.

### Tone of voice
- **Confident, punchy, no-fluff.** Short sentences. **Name the pain, then the
  relief.** ("Stop switching between ten AI tools," not "boost productivity.")
- **Conversational but credible** — second person ("you"), active voice,
  founder-to-founder. Honest about where competitors are genuinely strong
  (`ComparePage` "where they win").
- Specific over generic; light emoji only **inside product mocks**, never in
  headings. **USD ($) everywhere; never INR** on the main site.

### Heading & section pattern (match exactly)
- **Eyebrow** (`.section-eyebrow`, uppercase) above every H2.
- **H2 = one short punchy line with ONE gradient-highlighted phrase**
  (`.text-gradient-animated` or `bg-gradient-brand bg-clip-text text-transparent`).
  Real examples to mirror: "Stop switching between **ten AI tools**" · "One
  prompt. **A finished post.**" · "The first AI workspace built for **teams**" ·
  "Replace your whole **marketing stack**" · "Post to every platform, **from one
  place**" · "Every comment, DM & message — **one inbox**" · "Turn comments into
  **customers** — automatically".
- **Subhead** (`text-slate-600`) names the pain, then Trendly's answer.
- Most feature sections are **two-column (copy + a realistic mock-UI visual)**,
  alternating left/right, wrapped in `<ScrollReveal>`. Visuals are product mocks
  (chat with a GPT/Claude/Gemini switcher, calendar, approval bar with
  Approve/Request changes/✨AI edit, inbox using **brand platform icons** from
  `components/SocialIcons.tsx`) — **never stock photos**.
- **Section rhythm:** alternate light and dark (`bg-ink-900`) sections; `~py-24`.

### CTAs (always)
- Primary **"Start for free"** → `LINKS.BRAND_SIGNUP`; secondary **"Book a Demo"**
  → `LINKS.BOOK_DEMO`. **Services** pages lead with **"Get a quote"** (`#quote`,
  the `QuoteForm`) + "Book a call".
- **Always pair the primary CTA with `PROOF.riskReversal`** ("Free forever · no
  credit card · cancel anytime").

### Proof / channels / SEO
- **Proof:** only the `PROOF` constants (see honesty rule). No fabricated
  testimonials/logos/counts. Treat AI features (multi-model, Impulse, inbox) as
  **product claims** — confirm built/roadmapped before publishing.
- **Channels:** Instagram, TikTok, LinkedIn, X, YouTube, Facebook (brand icons
  in `SocialIcons`).
- **SEO content:** target the "AI social media tool / management" cluster; one
  H1 per page (keyword where natural), keyword in `<title>` + meta + ≥1 H2/body,
  `faqSchema`, breadcrumb + SoftwareApplication JSON-LD, 2+ internal links.

### External CTAs (do not change without asking) — all via `lib/site-config`
- Start free / Log in → `LINKS.BRAND_SIGNUP` (`brands.trendly.now`)
- Book a demo → `LINKS.BOOK_DEMO` (`cal.com/rahul-idiv/30min`)
- Creator signup → `LINKS.CREATOR_SIGNUP` (`creators.trendly.now`)
- Support → `support@idiv.in`

---

## Free tools (AI generators)

The AI tool pages (`instagram-caption-generator`, `content-idea-generator`,
`hook-generator`) use **`components/tools/ToolRunner.tsx`**, which calls
**`generate(tool, inputs)`** in **`lib/tools-api.ts`**.

Because the site is a **static export (no API routes)**, generation hits an
**external backend**:

```
POST https://be.trendly.now/tools/generate     (TOOLS_ENDPOINT)
body  { tool: "<toolId>", inputs: { ...stringFields } }
ok    { results: ["…", "…"] }
err   { error: "message" }
```

The API key lives **server-side on that backend — never embed any key in this
repo.** `ToolError.unreachable` is true on network failure / not-yet-deployed,
so `ToolRunner` shows a friendly "warming up" fallback that funnels to signup.
`social-media-calendar-template` and `best-time-to-post` are **static** (no
backend call). Every tool page pairs `ToolRunner`/static content with
`ToolCrossSell` ("do this on autopilot in Trendly") + `ToolFAQ` + `faqSchema`.

---

## Compare pages

All `/compare/*` routes render the shared **`components/ComparePage.tsx`** with
per-competitor props: `competitor`, `slug`, `tagline`, `rows` (capability ·
Trendly · them), `whereTrendlyWins`, `whereTheyWin`, `faqs`. The list of
competitors is `COMPARISONS` in `lib/site-config.ts`; `components/WhySwitch.tsx`
(homepage) is the "vs schedulers" summary that links down into these pages.
Keep comparisons **honest** — the template has a "where {competitor} is strong"
column on purpose.

---

## Services (done-for-you / agency offering)

Beyond the self-serve product, Trendly offers **done-for-you marketing** for
founders/teams who want it run *with* them (transparent, line-by-line pricing,
no retainers). Driven by `SERVICES` in `lib/site-config.ts`:
`/services` (hub, uses `ManagedServices` + `QuoteForm`) plus
`influencer-led-growth`, `paid-ads`, `performance-marketing`. The homepage
`DoneForYou` teaser links here. The quote form posts to `QUOTE_ENDPOINT`
(placeholder for now).

---

## Blog

- **All posts are markdown in `blog-posts/`.** `lib/posts.ts` auto-loads them at
  build time (`gray-matter` + `marked`). **Do NOT add post data to
  `lib/posts.ts`.**
- **There are currently 13 posts** (`01-…` through `13-…`). They were written
  for the OLD India/influencer-marketplace positioning.
- **`BLOG-AUDIT.md`** is the source of truth for what to do with each post:
  per-post **KEEP / REWRITE / RETIRE** verdicts (1 keep, 8 rewrite, 4 retire),
  new content clusters, and a redirect plan for retired slugs (CloudFront
  function preferred — static export can't use `next.config.js` redirects).
  Read it before editing, rewriting, or retiring any post.

### Adding / authoring a post

1. New `.md` in `blog-posts/` with a numeric prefix for sort order
   (`01` newest; higher = older); sort key is `dateISO`.
2. Required frontmatter: `title`, `slug` (unique), `date`, `dateISO`, `author`,
   `cat`, `readTime`, `excerpt`, `metaDescription`, `targetKeyword`, `gradient`.
   (One legacy post uses a malformed `drtitle:` key — fix to `title:` only if
   un-retiring it; see `BLOG-AUDIT.md`.)
3. Body: H1 is optional (auto-stripped; page renders `post.title`). `##`/`###`
   for headings, relative internal links, full external URLs (renderer adds
   `target=_blank rel=noopener`). Prose styled by `.prose-content` in
   `app/globals.css` — never inline styles in `.md`.
- New post copy must follow the **honesty rule** and the **US/founder/USD**
  positioning.

---

## Design system

### Colors (`tailwind.config.ts`)
`brand-50…950` (blue, primary `brand-600`/`700`), `accent-400/500/600` (cyan),
`ink-900`/`ink-800` (dark sections). Gradients: `bg-gradient-brand`
(blue→cyan 135°), `bg-gradient-mesh` (hero radial mesh).

### Animations (`tailwind.config.ts`)
`float`, `marquee`, `fade-up`, `shimmer`, plus newer ones: `gradient-x`
(animated gradient position, pair with `bg-[length:300%_300%]`), `glow-pulse`,
`draw-line` (SVG stroke draw), `slide-up`, `scale-in`, `ticker`.

### Component classes (`app/globals.css`, `@layer components`)
`.container-px`, `.btn-primary`, `.btn-ghost`, `.pill`, `.section-eyebrow`,
`.h-display`, `.glass-card`, `.grid-bg`, plus `.text-gradient-animated`
(animated brand-gradient text) and `.prose-content` (blog markdown styles).

### Section scaffold
```tsx
<section className="py-24">
  <div className="container-px">
    <div className="mx-auto max-w-2xl text-center">
      <span className="section-eyebrow">EYEBROW</span>
      <h2 className="h-display mt-3 text-4xl sm:text-5xl">
        Headline <span className="bg-gradient-brand bg-clip-text text-transparent">accent</span>
      </h2>
      <p className="mt-4 text-slate-600">Subheadline.</p>
    </div>
    {/* content — wrap in <ScrollReveal> for entrance animation */}
  </div>
</section>
```

Site is light-only; intentionally dark sections use `bg-ink-900 text-slate-300`
(see `Footer`, `WhyMicro`).

---

## Marketing pixels / analytics

`lib/marketing-config.ts` holds the `MARKETING` IDs (Meta Pixel, GA4, Google
Ads, LinkedIn Insight, Twitter/X, Microsoft Clarity). `components/MarketingPixels.tsx`
(mounted once in `app/layout.tsx`) renders each pixel **only if its ID is
configured** — `isConfigured()` skips any value still set to `REPLACE_WITH_…`.
See `MARKETING_SETUP.md` for where to obtain each ID.

---

## Deprecated / legacy surfaces (handle with care)

These predate the repositioning and still carry old India/INR/Pilot copy. **Do
not use them as a style/voice reference, and do not link to them from the new
IA.**

- **`app/lp/{saas,pilot,agency}/page.tsx`** — standalone **ad landing pages**,
  marked `robots: noindex,nofollow`. They still contain **₹ / INR** copy
  ("₹30,000+/month"), pay-on-delivery, and Pilot-Programme messaging. Kept for
  paid campaigns; candidates for rewrite/removal — confirm with the user before
  touching.
- **`app/pilot/page.tsx` + `components/PilotProgramme.tsx`** — the Pilot
  Programme narrative (set up → run together → hand off). **Not** on the
  homepage or in `NAV`. Effectively the predecessor of the `/services` offering.
- **`components/AntiAgency.tsx`** — a one-line re-export of `PilotProgramme`;
  safe to delete.
- **`components/WhyMicro.tsx`** — dark micro-creator stats section; present but
  not in the current homepage composition.

---

## Known gaps / nice-to-haves

- `CONTACT_ENDPOINT` and `QUOTE_ENDPOINT` are Formspree placeholders — forms
  show success UX but only `console.warn` until real IDs are set.
- `lib/tools-api.ts` depends on `be.trendly.now/tools/generate` being deployed;
  until then tools show the "warming up" fallback.
- Newsletter forms (`NewsletterForm`, footer) are non-functional stubs.
- Legal page bodies are good-faith starter copy — lawyer review before launch.
- `InteractiveDemo` and `Hero`/`CreatorsAndGrowth` previews use **mock data**.
- Retired-blog-slug 301s still need wiring at the CloudFront edge (see
  `BLOG-AUDIT.md` + `cloudfront-url-rewriter.js`).
- No sitemap/robots route generators yet.
- Some `Google Ads` / `Twitter pixel` IDs in `marketing-config.ts` are still
  placeholders.

---

## Source-of-truth references

- Live site: https://www.trendly.now · Pricing: https://www.trendly.now/pricing/
- Brands app: https://brands.trendly.now/ · Creators portal: https://creators.trendly.now/
- Positioning/proof rules: `lib/site-config.ts` (`PROOF`, `SITE`, `NAV`)
- Blog strategy: `BLOG-AUDIT.md` · Pixel setup: `MARKETING_SETUP.md`
