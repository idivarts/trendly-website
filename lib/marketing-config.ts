/**
 * Marketing pixel IDs for retargeting and analytics.
 *
 * Values come from NEXT_PUBLIC_* so CI owns them (see .github/workflows/deploy.yml).
 * The literals are fallbacks that preserve today's behaviour for local builds
 * and until the matching GitHub variables are created; an unset ID is simply
 * skipped at render time rather than emitting a broken tag.
 *
 * See MARKETING_SETUP.md for where to obtain each one.
 */
export const MARKETING = {
  // Meta (Facebook / Instagram) Pixel — 15-16 digit number
  META_PIXEL_ID: process.env.NEXT_PUBLIC_META_PIXEL_ID || '1131893411605705',

  // Google Analytics 4 — format: G-XXXXXXXXXX
  GA4_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-7HR6HKN407',

  // Google Ads remarketing tag — format: AW-XXXXXXXXXX
  GOOGLE_ADS_ID: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '',

  // LinkedIn Insight Tag — 7-8 digit number
  LINKEDIN_PARTNER_ID: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || '9466476',

  // Twitter / X pixel — short alphanumeric string e.g. o7abc
  TWITTER_PIXEL_ID: process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID || '',

  // Microsoft Clarity project ID — 10-char lowercase string
  CLARITY_PROJECT_ID: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'wr2q3skiu7',
} as const;

/** Returns true if the ID was actually supplied (env or fallback). */
export function isConfigured(id: string): boolean {
  return id.trim().length > 0 && !id.startsWith('REPLACE_WITH_');
}

/**
 * PostHog — product analytics for the marketing site.
 *
 * Unlike the pixel IDs above it is NOT hardcoded: it comes from the build env
 * so the key can differ per deploy without a code change. The website only has
 * a production deploy (CI builds from `main`), so there is a single key here —
 * no dev/prod branch to make.
 *
 * ⚠️ Point this at the SAME PostHog project as the brand app's production key.
 * Both sites live on *.trendly.now, so posthog-js shares one distinct_id across
 * them, and a single project is what makes "visitor read the blog → signed up →
 * subscribed" one continuous funnel instead of two disconnected ones.
 */
export const POSTHOG = {
  KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
  HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
} as const;
