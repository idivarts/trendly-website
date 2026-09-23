# Blog Audit — Trendly Website Pivot

**Context:** Trendly pivoted from an *India influencer marketplace* (INR pricing,
"Pilot Programme", micro-creator-marketplace focus) to an **AI marketing
workspace for US solo founders & small in-house teams**. The 13 existing posts
in `blog-posts/` were written for the OLD positioning. This doc audits each one
and proposes a remap. **No `.md` files are modified or deleted here — this is a
plan for approval.**

## Verdict legend

- **KEEP** — evergreen, on-strategy; minor copy touch-ups only (drop INR / India-only framing where trivial).
- **REWRITE** — strong topic, wrong framing; keep the slug/SEO equity but rewrite body to the new US / founder / AI-workspace positioning.
- **RETIRE** — built entirely on retired concepts (Pilot Programme, India marketplace mechanics, Trendly-creator-profile onboarding) with little salvageable SEO value for the new audience. Do not delete the file; redirect the slug (see Redirect plan).

## New content clusters

- **Social media strategy** — strategy, what-to-post, planning frameworks.
- **Content planning** — calendars, cadence, team approvals, workflow.
- **Creator marketing** — micro-creator activation, outreach, campaigns.
- **AI marketing** — AI-assisted strategy/content, automation, tool consolidation.

---

## Audit table

| # | Filename | Current topic | Verdict | Reason | New cluster |
|---|----------|---------------|---------|--------|-------------|
| 01 | `01-why-indian-d2c-brands-are-switching-to-influencer-marketing-saas.md` | India D2C brands leaving agencies for influencer SaaS | **REWRITE** | Strong "agency → software" SEO angle, but India/D2C-specific. Reframe to US founders/small teams replacing tool-sprawl + agencies with an AI workspace. | AI marketing |
| 02 | `02-micro-creator-playbook-india.md` | Why sub-₹1cr ARR brands should use micro-creators | **REWRITE** | Micro-creator thesis is evergreen and maps to our Creator Campaigns module; drop INR/ARR India framing, retarget US small brands. | Creator marketing |
| 03 | `03-what-500-campaigns-taught-us-influencer-marketing-india.md` | Learnings from 500+ India campaigns | **REWRITE** | Real track-record proof (approved PROOF: "100s of brand campaigns"). Reframe as credibility-building creator-marketing lessons, de-India-ify; align number to approved "100s". | Creator marketing |
| 04 | `04-pay-on-delivery-influencer-marketing-india.md` | Pay-on-delivery / performance influencer model | **RETIRE** | Built on a marketplace escrow/pay-on-delivery mechanic that isn't the new product. Low salvage for founder/AI-workspace audience. | → Creator marketing landing (redirect) |
| 05 | `05-hidden-cost-diy-influencer-outreach-india.md` | True cost of manual creator DM outreach | **REWRITE** | "Manual work is expensive, automate it" is core to our AI-workspace pitch; retarget to US founders, tie to in-app creator activation. | Creator marketing |
| 06 | `06-pilot-programme-philosophy-trendly.md` | Philosophy behind the Pilot Programme | **RETIRE** | Entirely about the retired Pilot Programme. No equivalent in new positioning. | → /about (redirect) |
| 07 | `07-6-months-influencer-marketing-independence-trendly-pilot.md` | Month-by-month Pilot Programme timeline | **RETIRE** | Entirely Pilot-Programme mechanics; retired concept. | → /about (redirect) |
| 08 | `08-first-10-influencer-collaborations-startup-india.md` | Founder's account of first 10 creator collabs | **REWRITE** | "Getting started with creators" is evergreen and founder-voiced (on-brand). De-India-ify, tie to Trendly creator campaigns. | Creator marketing |
| 09 | `09-why-brands-fail-influencer-marketing-first-3-months.md` | Why brands quit influencer marketing early | **REWRITE** | Evergreen "common mistakes" SEO; broaden from influencer-only to social/content + creators, retarget small teams. | Social media strategy |
| 10 | `10-influencer-marketing-agency-vs-inhouse-india.md` | When to move influencer marketing in-house | **REWRITE** | "Agency vs in-house" is a strong, evergreen comparison query; but the post leans on the Pilot Programme as the answer — rewrite the CTA/solution to the Trendly workspace (for small in-house teams). | Social media strategy |
| 11 | `11-why-people-dont-care-about-your-brand.md` | Brand messaging / why audiences ignore brands | **KEEP** | Genuinely evergreen messaging piece, minimal product/India dependency. Light touch-up: swap any INR/D2C-India references for neutral framing. | Social media strategy |
| 12 | `12-influencer-marketing-doesnt-generate-leads-or-sales-myth.md` | Myth-busting: influencer ROI | **REWRITE** | Good "does X work / ROI" SEO; uses India Trendly data + INR. Reframe with neutral/US framing and approved proof only (no fabricated ROI multiples). | Creator marketing |
| 13 | `13-how-to-build-a-winning-influencer-profile-on-trendly.md` | How creators build a Trendly profile | **RETIRE** | Targets *creators* setting up marketplace profiles — wrong audience (we now sell to founders/brands) and tied to retired marketplace onboarding. Also note: frontmatter key is malformed (`drtitle` should be `title`) — fix only if kept; otherwise retire. | → /product/creators (redirect) |

### Verdict tally

- **KEEP:** 1 (post 11)
- **REWRITE:** 8 (posts 01, 02, 03, 05, 08, 09, 10, 12)
- **RETIRE:** 4 (posts 04, 06, 07, 13)

---

## Redirect plan (static export → S3 / CloudFront)

This site is a **Next.js static export** (`output: 'export'`) deployed to
**S3 + CloudFront**. Next.js `redirects()` in `next.config.js` are **not honored
by a static export** (they require the Node/Next server). So 301s for retired
slugs must be implemented at the edge/origin layer instead:

**Option A — CloudFront Function / Lambda@Edge (preferred):** a
`viewer-request` function that maps each retired path to its target and returns a
`301` with a `Location` header. Cleanest for SEO (true 301, no body download).

**Option B — S3 website redirect rules:** use S3 static-website
`RoutingRules` (or per-object `x-amz-website-redirect-location` metadata) to issue
301s for the specific keys. Works only with the S3 *website* endpoint, not the
REST endpoint behind OAC.

**Option C — client-side meta-refresh stub pages (fallback, no infra change):**
keep each retired `.md` slug building, but replace its body with a
`<meta http-equiv="refresh" content="0; url=/target">` + `<link rel="canonical">`
stub (and a one-line "this post has moved" link). This is a soft redirect — worse
for SEO than a 301 but requires no S3/CloudFront access. Only use if A/B aren't
available.

> Recommendation: **Option A** for the four RETIRE slugs. REWRITE posts keep
> their slugs (no redirect — we preserve their URL/SEO equity and just change the
> body). KEEP needs nothing.

### Retired slug → target mapping

| Retired slug (`/blog/<slug>`) | Verdict | Redirect target | Why this target |
|-------------------------------|---------|-----------------|-----------------|
| `pay-on-delivery-influencer-marketing-india` | RETIRE | `/product/creators` | Closest live concept: in-app creator activation/campaigns. |
| `pilot-programme-philosophy-trendly` | RETIRE | `/about` | Pilot Programme is gone; the "why we built this" story now lives on About. |
| `6-months-influencer-marketing-independence-trendly-pilot` | RETIRE | `/about` | Same — retired program; redirect to company story. |
| `how-to-build-a-winning-influencer-profile-on-trendly` | RETIRE | `/product/creators` | Creator-facing content; closest live page is the Creator Campaigns product page. |

(If `/product/creators` is not yet shipped at redirect time, fall back to
`/blog` or the Creator-marketing cluster index, then update once the product page
is live.)

### CloudFront Function reference (Option A sketch)

```js
function handler(event) {
  var req = event.request;
  var map = {
    '/blog/pay-on-delivery-influencer-marketing-india': '/product/creators',
    '/blog/pilot-programme-philosophy-trendly': '/about',
    '/blog/6-months-influencer-marketing-independence-trendly-pilot': '/about',
    '/blog/how-to-build-a-winning-influencer-profile-on-trendly': '/product/creators',
  };
  var to = map[req.uri.replace(/\/$/, '')];
  if (to) {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: { location: { value: to } },
    };
  }
  return req;
}
```

---

## Next steps once approved

1. Apply the 4 RETIRE redirects via the chosen option (A recommended).
2. Rewrite the 8 REWRITE posts to the new positioning (keep slugs + `dateISO`).
3. Light touch-up on the 1 KEEP post.
4. Fix the malformed `drtitle:` → `title:` frontmatter key **only** if post 13
   is ever un-retired (currently it renders with an undefined title).
