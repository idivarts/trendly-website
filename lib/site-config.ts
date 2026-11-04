/**
 * Site-wide configuration: links, navigation IA, and approved proof claims.
 * Change any value here and it updates everywhere it's used.
 */
export const LINKS = {
  /** Brand onboarding / registration */
  BRAND_SIGNUP: 'https://brands.trendly.now',

  /** Influencer / creator onboarding */
  CREATOR_SIGNUP: 'https://creators.trendly.now',

  /**
   * Brand app, for someone who has explicitly chosen the web over the apps.
   *
   * On a phone the brand app shows an app-download interstitial, so sending a
   * "prefer a bigger screen?" link to BRAND_SIGNUP lands them on exactly the
   * thing they just declined. `?web=1` skips it and remembers the choice for
   * 30 days (trendly-brands#527).
   *
   * It has to be the literal /lets-start path: the bare origin redirects with
   * resetAndNavigate("/lets-start") and drops the query string, so appending
   * the param to BRAND_SIGNUP does nothing. Only `1` and `true` count.
   *
   * Use this ONLY where the user has asked for the web. Every other CTA should
   * keep pointing at BRAND_SIGNUP and get the interstitial.
   */
  BRAND_WEB_APP: 'https://brands.trendly.now/lets-start?web=1',

  /** Founder booking page */
  BOOK_DEMO: 'https://cal.com/rahul-idiv/30min',
} as const;

/**
 * Store listings for the Trendly brand app ("Trendly - AI Social Planner").
 * Mirrors BRANDS_APPSTORE_URL / BRANDS_PLAYSTORE_URL in the app repo's
 * `shared-constants/app.ts` — the App Store link uses the id-only form because
 * the slug on that constant still carries the old "find influencers" name.
 * These are NOT gated by DISABLE_LOGIN_SIGNUP: the apps are live on both
 * stores, so downloading is always a valid action.
 */
export const APP_DOWNLOAD = {
  APP_STORE: 'https://apps.apple.com/app/id6736949941',
  PLAY_STORE: 'https://play.google.com/store/apps/details?id=pro.trendly.brands',
} as const;

/**
 * KILL-SWITCH while the product is dev-only (features WIP, app lives only on the
 * dev site). When `true`, every Log in / Sign up / Start free / Get started CTA
 * that points to brands.trendly.now is hidden — and, where no "Book a demo"
 * button already sits beside it, replaced with a "Book a demo" CTA (→ BOOK_DEMO).
 * Flip to `false` to re-enable all signup/login CTAs site-wide.
 */
export const DISABLE_LOGIN_SIGNUP = false;

/**
 * Endpoint the /contact form POSTs to (JSON).
 * TODO: replace with real Formspree/Loops form ID before launch.
 * While this is the placeholder, the form still shows the success UX but logs
 * a console.warn instead of actually delivering the message.
 */
export const CONTACT_ENDPOINT = 'https://formspree.io/f/xaqzwzla';

/**
 * Endpoint the in-page "Get an agency quote" form POSTs to (JSON).
 * TODO: replace with the real Formspree/Loops/CRM intake form ID before launch.
 * While this is the placeholder, the form shows success UX but logs a warn.
 */
export const QUOTE_ENDPOINT = 'https://formspree.io/f/mykagaba';

/** Canonical site origin — used for sitemap, robots, and JSON-LD. */
export const SITE = {
  name: 'Trendly',
  origin: 'https://www.trendly.now',
  legalName: 'IDIVARTS Solutions Pvt Ltd',
  tagline: 'The AI social media tool for founders & teams worldwide',
  email: 'support@idiv.in',
  twitter: '@trendly_collab',
} as const;

/**
 * Approved, verified proof claims (see ticket "Critique the trendly-website").
 * RULE: these come from the company's creator-marketplace track record — use
 * them for the creator module + "from the team behind…" credibility. Do NOT
 * imply the 10,000+ creators use the new AI workspace. No fabricated proof.
 */
export const PROOF = {
  creators: '10,000+',
  creatorsLabel: '10,000+ creators have joined Trendly',
  brands: '100s',
  brandsLabel: 'From the team behind 100s of brand campaigns',
  earlyAccessCount: '100',
  earlyAccessLabel: 'Join the first 100 founders shaping Trendly',
  riskReversal: 'Free forever · no credit card · cancel anytime',
} as const;

/**
 * Primary navigation IA. Items with `children` render as dropdowns.
 * Anchor links use `/#id` so they resolve from any subroute.
 */
export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href?: string; children?: NavChild[]; icon?: 'download' };

// IA consolidated to 6 core marketing pages (co-founder feedback): Home,
// Product, Solutions, Services, Pricing, About. Product/Solutions/Services are
// now single pages (their old sub-pages are orphaned — not in nav/sitemap).
//
// 2026-11-04: Product / Solutions / Services merged into one "Platform"
// dropdown so the bar reads as intent, not as three sibling hubs, and
// Download added next to Pricing. Order = descending intent:
// Platform (what it is) → Pricing → Download (the two act-now items, nearest
// the primary CTA) → Tools → Resources (top-of-funnel / SEO).
export const NAV: NavItem[] = [
  {
    label: 'Platform',
    children: [
      { label: 'Product', href: '/product', desc: 'Every AI model in one workspace' },
      { label: 'Solutions', href: '/solutions', desc: 'For solo founders & small teams' },
      { label: 'Services', href: '/services', desc: 'Done-for-you growth, run by our team' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Download', href: '/download', icon: 'download' },
  {
    label: 'Tools',
    children: [
      { label: 'All free tools', href: '/tools', desc: 'Free AI generators, no signup' },
      { label: 'Instagram Caption Generator', href: '/tools/instagram-caption-generator' },
      { label: 'Content Idea Generator', href: '/tools/content-idea-generator' },
      { label: 'Hook Generator', href: '/tools/hook-generator' },
      { label: 'Social Media Calendar Template', href: '/tools/social-media-calendar-template' },
      { label: 'Best Time to Post', href: '/tools/best-time-to-post' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Blog', href: '/blog', desc: 'Strategy, content & creator playbooks' },
      { label: 'About', href: '/about', desc: 'Why we built Trendly' },
      { label: 'Compare', href: '/compare/trendly-vs-buffer', desc: 'Trendly vs Buffer, Later, Hootsuite…' },
    ],
  },
];

/**
 * AI models Trendly brings together in one workspace. Used on the homepage to
 * tell the "every model in one place" story. NOTE (verify before launch):
 * confirm which integrations are actually live vs planned before publishing.
 */
export const AI_MODELS = [
  { name: 'GPT', maker: 'OpenAI', best: 'Captions & general copy' },
  { name: 'Claude', maker: 'Anthropic', best: 'Strategy & deep research' },
  { name: 'Gemini', maker: 'Google', best: 'Images & visuals' },
  { name: 'ElevenLabs', maker: 'ElevenLabs', best: 'Voiceovers & video' },
  { name: 'Flux', maker: 'Black Forest Labs', best: 'Image generation' },
  { name: 'Perplexity', maker: 'Perplexity', best: 'Research & trends' },
] as const;

/** Comparison pages — single source of truth for the /compare/* routes. */
export const COMPARISONS = [
  { slug: 'trendly-vs-buffer', competitor: 'Buffer' },
  { slug: 'trendly-vs-later', competitor: 'Later' },
  { slug: 'trendly-vs-hootsuite', competitor: 'Hootsuite' },
  { slug: 'trendly-vs-socialpilot', competitor: 'SocialPilot' },
] as const;

/**
 * Done-for-you / agency services — single source of truth for the /services/*
 * routes, the homepage teaser, and the /services hub. For founders & teams who
 * want end-to-end marketing run for them, not just self-serve software.
 */
export const SERVICES = [
  {
    slug: 'influencer-led-growth',
    title: 'Influencer-led growth',
    tagline: 'We source, vet, brief and run creator campaigns end-to-end — using our 10,000+ creator network.',
  },
  {
    slug: 'paid-ads',
    title: 'Paid ads management',
    tagline: 'We plan, launch and optimize ads across Meta, Google, TikTok and more — so spend turns into customers.',
  },
  {
    slug: 'performance-marketing',
    title: 'Performance marketing',
    tagline: 'Full-funnel, ROI-obsessed growth: ads, creators, landing pages and conversion — measured to revenue.',
  },
] as const;
