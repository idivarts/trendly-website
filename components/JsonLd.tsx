import { SITE } from '@/lib/site-config';

/**
 * Renders a JSON-LD <script> for SEO structured data.
 * Usage: <JsonLd data={softwareApplicationSchema()} />
 * Safe in a static export — emitted at build time into the page <head>/<body>.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is trusted (built from our own data, no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization schema — include once (homepage). */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.origin,
    logo: `${SITE.origin}/logo.png`,
    sameAs: [
      'https://www.instagram.com/trendly_collab',
      'https://www.linkedin.com/showcase/105144641',
      'https://www.facebook.com/trendly.pro/',
    ],
  };
}

/** SoftwareApplication schema — homepage + product pages. */
export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Trendly is an AI social media tool for founders and marketing teams worldwide — every AI model in one workspace to generate posts, plan a calendar in one click, schedule to every platform, and manage all comments and DMs in one inbox.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free forever plan — no credit card required.',
    },
    url: SITE.origin,
  };
}

/** Breadcrumb schema. Pass [{ name, path }] in order (path relative to origin). */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE.origin}${it.path}`,
    })),
  };
}

/** FAQ schema — pass the same Q&A array a page renders. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
