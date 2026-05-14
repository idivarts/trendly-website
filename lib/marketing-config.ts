/**
 * Marketing pixel IDs for retargeting and analytics.
 * Replace each REPLACE_WITH_... value with the real ID.
 * See MARKETING_SETUP.md for step-by-step instructions on where to get each key.
 * Any ID left as a placeholder is automatically skipped at render time.
 */
export const MARKETING = {
  // Meta (Facebook / Instagram) Pixel — 15-16 digit number
  META_PIXEL_ID: 'REPLACE_WITH_META_PIXEL_ID',

  // Google Analytics 4 — format: G-XXXXXXXXXX
  GA4_MEASUREMENT_ID: 'REPLACE_WITH_GA4_MEASUREMENT_ID',

  // Google Ads remarketing tag — format: AW-XXXXXXXXXX
  GOOGLE_ADS_ID: 'REPLACE_WITH_GOOGLE_ADS_ID',

  // LinkedIn Insight Tag — 7-8 digit number
  LINKEDIN_PARTNER_ID: 'REPLACE_WITH_LINKEDIN_PARTNER_ID',

  // Twitter / X pixel — short alphanumeric string e.g. o7abc
  TWITTER_PIXEL_ID: 'REPLACE_WITH_TWITTER_PIXEL_ID',

  // Microsoft Clarity project ID — 10-char lowercase string e.g. abc123xyz0
  // Get it at: clarity.microsoft.com → New Project → copy the ID
  CLARITY_PROJECT_ID: 'REPLACE_WITH_CLARITY_PROJECT_ID',
} as const;

/** Returns true if the ID has been replaced with a real value. */
export function isConfigured(id: string): boolean {
  return !id.startsWith('REPLACE_WITH_');
}
