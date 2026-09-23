# Marketing Pixels — Setup Guide

All pixel IDs live in one place: `lib/marketing-config.ts`.  
Replace each `REPLACE_WITH_...` string with the real ID, then run `bash export.sh` + `bash deploy-s3.sh`.

---

## 1. Meta Pixel (Facebook / Instagram)

**Why:** Retarget website visitors on Instagram and Facebook. Build lookalike audiences from brand managers who visited the pricing page.

**How to get your Pixel ID:**
1. Go to [business.facebook.com](https://business.facebook.com/)
2. Left nav → **Events Manager**
3. Click **"Connect Data Sources"** → **"Web"** → **"Facebook Pixel"**
4. Name it "Trendly Website" → click **Create**
5. Copy the **Pixel ID** — a 15–16 digit number (e.g. `1234567890123456`)

**Config key:** `META_PIXEL_ID`

---

## 2. Google Analytics 4 (GA4)

**Why:** Core analytics — traffic sources, page views, user journeys. Also feeds Google Ads remarketing audiences.

**How to get your Measurement ID:**
1. Go to [analytics.google.com](https://analytics.google.com/)
2. **Admin** (bottom-left gear) → **Create** → **Property**
3. Enter property name "Trendly Website", timezone India, currency INR
4. Choose **Web** → enter `trendly.now` as the URL
5. Copy the **Measurement ID** — format `G-XXXXXXXXXX`

**Config key:** `GA4_MEASUREMENT_ID`

---

## 3. Google Ads Remarketing Tag

**Why:** Retarget visitors on Google Search, Display Network, and YouTube. Essential if you run any Google Ads.

**How to get your Tag ID:**
1. Go to [ads.google.com](https://ads.google.com/)
2. Top nav → **Tools & Settings** → **Measurement** → **Conversion tracking**
3. If you already have conversion actions, click on one → **Tag setup** → see the `AW-XXXXXXXXXX` ID
4. Alternatively: **Audiences** → **Your data sources** → **Google Ads tag** → **Details**
5. Copy the **Tag ID** — format `AW-XXXXXXXXXX`

> Note: If both GA4 and Google Ads IDs are set, a single `gtag.js` load handles both — no performance penalty.

**Config key:** `GOOGLE_ADS_ID`

---

## 4. LinkedIn Insight Tag

**Why:** Your buyers (brand managers, founders) are on LinkedIn. LinkedIn retargeting lets you serve ads to people who visited specific pages (e.g. pricing, pilot programme).

**How to get your Partner ID:**
1. Go to [linkedin.com/campaignmanager](https://www.linkedin.com/campaignmanager/)
2. Select your ad account
3. Top nav → **Analyze** → **Insight Tag**
4. If no tag exists: click **"Install my Insight Tag"** → **"I will install the tag myself"**
5. Copy the **Partner ID** — a 7–8 digit number (e.g. `1234567`)

**Config key:** `LINKEDIN_PARTNER_ID`

---

## 5. Twitter / X Pixel

**Why:** Retarget on X (formerly Twitter). Smaller Indian audience but useful for brand awareness campaigns targeting startup/marketing Twitter.

**How to get your Pixel ID:**
1. Go to [ads.twitter.com](https://ads.twitter.com/)
2. Top nav → **Tools** → **Conversion Tracking**
3. Click **"Generate website tag"** → follow setup
4. Copy the **Pixel ID** — a short alphanumeric string (e.g. `o7abc`)

**Config key:** `TWITTER_PIXEL_ID`

---

## How to apply the IDs

Open `lib/marketing-config.ts` and replace the placeholder strings:

```typescript
export const MARKETING = {
  META_PIXEL_ID:         '1234567890123456',   // your Meta Pixel ID
  GA4_MEASUREMENT_ID:    'G-ABCDEF1234',       // your GA4 ID
  GOOGLE_ADS_ID:         'AW-1234567890',      // your Google Ads ID
  LINKEDIN_PARTNER_ID:   '1234567',            // your LinkedIn Partner ID
  TWITTER_PIXEL_ID:      'o7abc',              // your Twitter Pixel ID
} as const;
```

Any ID left as `REPLACE_WITH_...` is automatically skipped — safe to deploy partially.

---

## Verifying pixels work

| Platform | Tool |
|---|---|
| Meta | [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) Chrome extension |
| Google | [Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk) Chrome extension |
| LinkedIn | [LinkedIn Insight Tag Helper](https://chrome.google.com/webstore/detail/linkedin-insight-tag-help/igljindbbfamekgfbfbmciclpbkaaggj) Chrome extension |
| All | Browser DevTools → Network tab → filter by `fbevents`, `gtag`, `insight`, `uwt` |
