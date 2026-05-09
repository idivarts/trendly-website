# CLAUDE.md — Trendly Website

Context file for Claude. Read this first before making changes.

## What this project is

A fresh, modern marketing site for **Trendly** (https://www.trendly.now), an
influencer-marketing platform built for Indian startups and SMBs. Trendly's
core differentiator is **micro-creators (under 100k followers) on Instagram**,
priced for early-stage companies (from ₹750/month vs. ₹30,000+ at competitors).
Trendly is operated by **IDIVARTS Solutions Pvt Ltd**.

This repo is a from-scratch redesign — it does **not** replace the live
WordPress site at trendly.now. It's a Next.js front-end that mirrors the
existing site's information architecture with a more modern, bold visual
treatment.

## Tech stack

- **Next.js 14** (App Router) with TypeScript
- **Tailwind CSS 3** with a custom theme extension
- **React 18** (client components used only where state is needed:
  `Navbar`, `InteractiveDemo`, `Pricing`, `Testimonials`, `FAQ`)
- No external UI library, no animation library — all visuals are hand-rolled
  SVG + Tailwind keyframes for portability
- Fonts loaded from Google Fonts via `@import` in `app/globals.css`:
  - Display: **Plus Jakarta Sans** (700/800)
  - Body: **Inter** (400–900)

## How to run

The user runs the dev server locally on macOS — Claude's sandbox cannot reach
the npm registry. Two options:

```bash
# One-shot script (installs on first run, then runs dev)
cd ~/iDiv/TrendlyWebsite && bash start.sh

# Or manually
npm install
npm run dev   # http://localhost:3000
npm run build # production build
npm run start # production server
```

## File structure

```
TrendlyWebsite/
├── app/
│   ├── layout.tsx              # Root layout, metadata, Inter/Jakarta fonts
│   ├── page.tsx                # Homepage — composes all sections in order
│   ├── globals.css             # Tailwind directives + component classes
│   ├── about/page.tsx          # /about — story, values, milestones
│   ├── contact/page.tsx        # /contact — 'use client' contact form + options
│   ├── pricing/page.tsx        # /pricing — Pricing component + comparison table + FAQ
│   ├── terms/page.tsx          # /terms — Terms & Conditions
│   ├── privacy/page.tsx        # /privacy — Privacy Policy
│   ├── data-deletion/page.tsx  # /data-deletion — account deletion instructions
│   ├── blog/page.tsx           # /blog — index of all posts
│   └── blog/[slug]/page.tsx    # /blog/:slug — individual post (uses generateStaticParams)
├── components/
│   ├── Logo.tsx            # SVG logo + wordmark (supports `dark` prop)
│   ├── Navbar.tsx          # 'use client' — sticky, scroll-aware, mobile menu
│   ├── Hero.tsx            # Gradient hero + faux app preview + floating cards
│   ├── LogosMarquee.tsx    # "Trusted by" infinite marquee (CSS animation)
│   ├── HowItWorks.tsx      # 4-step process with arrow connectors
│   ├── Features.tsx        # 3 alternating feature blocks with mock UI visuals
│   ├── InteractiveDemo.tsx # 'use client' — live filterable creator search
│   ├── WhyTrendly.tsx      # Value-prop card grid (4 reasons)
│   ├── WhyMicro.tsx        # Dark stats section (Why micro creators)
│   ├── Pricing.tsx         # 'use client' — 4 plans + monthly/annual toggle
│   ├── PilotProgramme.tsx  # The Trendly Pilot — Set up / Run together / Hand off
│   ├── AntiAgency.tsx      # legacy stub re-exporting PilotProgramme — safe to delete
│   ├── Testimonials.tsx    # 'use client' — auto-rotating featured carousel
│   ├── FAQ.tsx             # 'use client' — accordion (9 questions)
│   ├── Blog.tsx            # Homepage 3-card teaser, links to /blog/:slug
│   ├── CTA.tsx             # Final gradient CTA with stat tiles
│   ├── Footer.tsx          # 'use client' — Dark footer w/ newsletter + socials + columns
│   ├── PageShell.tsx       # Wrapper: Navbar + content (pt-24) + Footer; exports PageHero
│   └── LegalDoc.tsx        # Numbered-section layout used by /terms, /privacy, /data-deletion
├── lib/
│   └── posts.ts            # Blog post data (slug, body, gradient) + getPost(slug) helper
├── tailwind.config.ts      # Custom theme — see "Design system" below
├── next.config.js          # Image remote patterns
├── tsconfig.json           # Strict TS, "@/*" path alias
├── postcss.config.js
├── package.json
├── start.sh                # `bash start.sh` to install + run
└── CLAUDE.md               # this file
```

The `@/` import alias resolves to the project root, so e.g.
`import Hero from '@/components/Hero'` or `import { posts } from '@/lib/posts'`.

## Routes

- `/` — Homepage
- `/about` — Company story
- `/contact` — Contact form + email/cal/WhatsApp options
- `/pricing` — Detailed pricing + comparison table + FAQ
- `/blog` — Blog index (featured + grid)
- `/blog/[slug]` — Individual post (3 posts in `lib/posts.ts`)
- `/terms`, `/privacy`, `/data-deletion` — Legal pages via `LegalDoc`

All inner pages use `<PageShell>` from `components/PageShell.tsx` to keep
Navbar + Footer consistent. Use the `<PageHero>` helper inside `PageShell`
for the standard top-of-page eyebrow + gradient headline pattern.

The Navbar's anchor links are written as `/#features`, `/#how`, `/#faq` so
they work from any subroute (browser navigates to `/` then scrolls to the
anchor). Don't change them to bare `#features` or they'll break on inner pages.

## Design system

### Colors (defined in `tailwind.config.ts`)

| Token        | Value     | Usage                                         |
|--------------|-----------|-----------------------------------------------|
| `brand-50`   | `#eff6ff` | Pill bg, soft section backgrounds             |
| `brand-100`  | `#dbeafe` | Pill border, soft accent surfaces             |
| `brand-500`  | `#3b82f6` | Default brand blue                            |
| `brand-600`  | `#2563eb` | Primary CTA fill, gradient start              |
| `brand-700`  | `#1d4ed8` | Hover/active, brand text                      |
| `brand-900`  | `#1e3a8a` | Dark hero background                          |
| `accent-400` | `#22d3ee` | Cyan accent, gradient end                     |
| `accent-500` | `#06b6d4` | Cyan accent, gradient end (deeper)            |
| `ink-900`    | `#0b1020` | Footer / dark section bg                      |

### Custom Tailwind utilities

- `bg-gradient-brand` → `linear-gradient(135deg, #2563eb → #06b6d4)`
- `bg-gradient-mesh` → 3-radial soft mesh used in hero
- `grid-bg` → 56px grid lines (subtle, in CSS)
- `shadow-glow` → branded blue elevation
- `shadow-soft` → neutral soft elevation
- `animate-float` (6s ease) — floating cards
- `animate-marquee` (30s linear) — logo strip
- `animate-fade-up` (0.8s) — hero / testimonial fade-in
- `animate-shimmer` (3s linear) — reserved for future use

### Reusable component classes (in `app/globals.css`)

- `.btn-primary` — gradient pill CTA with glow + lift on hover
- `.btn-ghost` — outlined pill CTA
- `.pill` — small uppercase tag with brand-blue tint
- `.section-eyebrow` — uppercase 12px brand-tinted label above section H2s
- `.h-display` — Plus Jakarta Sans, extrabold, tight tracking
- `.glass-card` — translucent white backdrop-blur card
- `.container-px` — site container (`max-w-7xl px-5 sm:px-8`)
- `.fade-mask` — left/right fade gradient masks (used by marquee)

### Typography rhythm

- H1 (hero): `text-5xl sm:text-6xl lg:text-7xl`, leading 1.05, `h-display`
- H2 (section): `text-4xl sm:text-5xl`, `h-display`
- H3 (cards): `text-lg font-bold` for cards, `text-3xl sm:text-4xl` for feature blocks
- Body: default `text-slate-600` for prose, `text-slate-700` for ui labels

### Section pattern

Almost every section follows:

```tsx
<section className="py-24">
  <div className="container-px">
    <div className="mx-auto max-w-2xl text-center">
      <span className="section-eyebrow">EYEBROW</span>
      <h2 className="h-display mt-3 text-4xl sm:text-5xl">
        Headline with <span className="bg-gradient-brand bg-clip-text text-transparent">accent</span>
      </h2>
      <p className="mt-4 text-slate-600">Subheadline.</p>
    </div>
    {/* content */}
  </div>
</section>
```

Reuse this scaffold when adding new sections.

## Page composition (`app/page.tsx`)

Order matters — each section was placed for a specific narrative arc:

1. **Navbar** — sticky, glass on scroll
2. **Hero** — promise + dual CTA + product glimpse
3. **LogosMarquee** — social proof (brands)
4. **HowItWorks** — 4-step explainer (lowers friction)
5. **Features** — Discovery → Campaign Mgmt → Content Delivery
6. **InteractiveDemo** — show, don't tell ("try it live")
7. **WhyTrendly** — 4 differentiator cards (₹30k vs ₹750)
8. **WhyMicro** — dark section, stats-heavy ("micro creators win")
9. **Pricing** — 4 plans, annual highlighted, Growth marked Popular
10. **PilotProgramme** — The Trendly Pilot — positions Trendly as SaaS-first,
    then introduces a higher-touch monthly subscription where Trendly sets up
    the entire influencer-marketing process, runs it for 6–8 months alongside
    a team member, and hands it over. Phases are **Set up → Run together →
    Hand off**. The narrative acknowledges that the industry default is
    long-term retainers and frames Trendly as "built to graduate you." Linked
    from the navbar as "Pilot Programme" → `/#pilot`. CTAs go to
    `cal.com/rahul-idiv/30min` (Talk to founder) and `/contact`.
    NOTE: do not reintroduce the terms "Anti-Agency", "BOT", or
    "Build–Operate–Transfer" anywhere in the UI copy — they were intentionally
    dropped to keep the messaging original.
11. **Testimonials** — auto-rotating carousel + stats strip
12. **FAQ** — accordion of objections
13. **Blog** — 3 most recent posts (linked to live site)
14. **CTA** — final conversion push
15. **Footer** — newsletter + socials + columns

To add a section, create the component in `components/`, import it in
`app/page.tsx`, and slot it in the appropriate position.

## Brand voice / content notes

- **Audience**: Founders, growth marketers, brand managers at Indian D2C
  startups and SMBs. Budget-conscious. Skeptical of agencies.
- **Tone**: Confident, direct, no-fluff. Light hype words ("powerful",
  "mind-blowing") used sparingly because the original site uses them.
- **Currency**: ₹ (INR) everywhere. Never USD.
- **Pricing reference**: Starter Free · Growth ₹750/mo (₹625 annually) ·
  Pro ₹1500/mo (₹1250 annually) · Enterprise Custom.
- **Key claims to preserve when editing**: 10,000+ verified creators · 500+
  campaigns · sub-100k follower focus · pay-on-delivery · India-first ·
  partnerships with Modash and Phyllo for enterprise.
- **External CTAs (do not change without asking)**:
  - Try free → `https://openinapp.link/b5aqc`
  - Book demo → `https://cal.com/rahul-idiv/30min`
  - Influencer signup → `https://openinapp.link/1lbgf`
  - Brands login → `https://brands.trendly.now/`
  - Support email → `support@idiv.in`

## Mock data

- **`Hero`** displays 3 sample creators (Aanya, Rohan, Priya) — purely visual.
- **`InteractiveDemo`** has 10 hardcoded creators in `all` array. Filters
  (niche, city, max followers, verified-only) actually work on this dataset.
  This is **mock data**, not connected to the real Trendly API.
- **`Testimonials`** has 6 fictional but plausible founder quotes mapped to
  real-sounding D2C brand names (BoldCare, Quench, Earth Rhythm, Sleepyhead,
  Plum, Mamaearth). Replace with real quotes once available.
- **`LogosMarquee`** lists brand names as text — when real logo SVGs are
  available, swap the `<span>` for `<img>` tags.

## Common tasks

### Change the primary brand color
Edit `tailwind.config.ts` → `theme.extend.colors.brand`. Also update the
`bg-gradient-brand` definition in the same file. The site will pick up
everywhere because all components reference `brand-*` tokens.

### Add a new pricing plan
Append a `Plan` object to the `plans` array in `components/Pricing.tsx`.
The grid auto-flows; if going beyond 4 columns, change `lg:grid-cols-4` on
the plan list and on the heading container.

### Add an FAQ item
Append `{ q, a }` to the `faqs` array in `components/FAQ.tsx`.

### Wire up real influencer data in InteractiveDemo
Replace the static `all` array with a fetch from the Trendly API. Move the
component to a route handler or a server component with `use server` for
better SEO; keep the filter UI as a client component.

### Make a section dark
Pattern: `<section className="bg-ink-900 text-slate-300">` and use
`text-white` for headings, `text-slate-300` for body. See `WhyMicro.tsx`
and `Footer.tsx` for examples.

## External links policy

Most former `www.trendly.now/*` links have been migrated to local routes.
The only links that intentionally still point off-site are:

- `brands.trendly.now` — separate brands login app
- `creators.trendly.now` — separate creators portal app
- `openinapp.link/*` — deep-link CTAs into the Trendly mobile/web apps
- `cal.com/rahul-idiv/30min` — booking page
- `wa.me/917604007156` — WhatsApp
- `apps.apple.com/...`, `amzn.openinapp.link/brands-app` — app store links
- `fallacious-dragon-7a2.notion.site/...` — Roadmap (Notion)
- Social profiles (instagram, facebook, linkedin, medium)
- `app/layout.tsx` — `metadataBase` is `https://www.trendly.now` (canonical
  for SEO/OG tags); leave as-is.
- `Hero.tsx` — the text "trendly.now/discover" inside the mock browser bar
  is decoration, not a link.

If you add a new link to a `www.trendly.now/...` page, prefer creating a
local route instead.

## Known gaps / nice-to-haves

- Legal page bodies (`/terms`, `/privacy`, `/data-deletion`) are good-faith
  starter copy — have a lawyer review before launch.
- About page milestones are illustrative; replace with real ones.
- Contact form `onSubmit` only flips a local "submitted" state — wire to
  Resend / Loops / Formspree before launch.
- No image optimization beyond Next defaults — brand logos and creator
  avatars are CSS gradients, not real assets.
- `Testimonials` quotes are placeholders.
- Newsletter form in Footer & blog is non-functional (`e.preventDefault()`).
- No analytics, no GTM. Add a `<Script>` tag in `app/layout.tsx` if needed.
- No dark mode. Site is light-only; only the `WhyMicro` and `Footer`
  sections are intentionally dark.
- Accessibility pass not done — sweep ARIA labels, keyboard focus rings,
  and color contrast before launch.

## Source-of-truth references

- Live site (mirror its claims/copy): https://www.trendly.now
- Pricing page: https://www.trendly.now/pricing/
- Roadmap: https://fallacious-dragon-7a2.notion.site/Trendly-Roadmap-24642d5f1701808db85ed6a8d8995ea3
- Brands app: https://brands.trendly.now/
- Creators portal: https://creators.trendly.now/
