import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';
import { COMPARISONS, SERVICES } from '@/lib/site-config';

const BASE_URL = 'https://www.trendly.now';

const TOOLS = [
  'instagram-caption-generator',
  'content-idea-generator',
  'hook-generator',
  'social-media-calendar-template',
  'best-time-to-post',
];

// Deeper, keyword-specific sub-pages. Off the main nav, but kept in the sitemap
// for SEO breadth (they target long-tail queries the consolidated pages don't).
const PRODUCT_SUB = ['ai-strategy', 'content-calendar', 'creators', 'impulse'];
const SOLUTION_SUB = ['founders', 'small-teams', 'agencies'];

/**
 * Next.js 14 built-in sitemap generator.
 * Outputs /sitemap.xml at build time (static export).
 * All blog post slugs are pulled dynamically from lib/posts.ts.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'
  ) => ({ url: `${BASE_URL}${path}`, lastModified: now, changeFrequency, priority });

  // Primary 6-page IA (the nav). Deeper sub-pages are added below for SEO.
  const staticRoutes: MetadataRoute.Sitemap = [
    entry('', 1.0, 'weekly'),
    entry('/product', 0.9, 'weekly'),
    entry('/solutions', 0.9, 'weekly'),
    entry('/services', 0.8, 'monthly'),
    entry('/pricing', 0.9, 'monthly'),
    entry('/about', 0.7, 'monthly'),
    entry('/tools', 0.8, 'weekly'),
    entry('/blog', 0.8, 'weekly'),
    entry('/contact', 0.6, 'monthly'),
    // Legal
    entry('/terms-and-condition', 0.3, 'yearly'),
    entry('/privacy-policy', 0.3, 'yearly'),
    entry('/data-deletion-instruction-page', 0.2, 'yearly'),
  ];

  // Sub-pages kept indexed for SEO breadth (lower priority than the nav pages).
  const subRoutes: MetadataRoute.Sitemap = [
    ...PRODUCT_SUB.map((s) => entry(`/product/${s}`, 0.7, 'monthly')),
    ...SOLUTION_SUB.map((s) => entry(`/solutions/${s}`, 0.7, 'monthly')),
    ...SERVICES.map((s) => entry(`/services/${s.slug}`, 0.7, 'monthly')),
  ];

  const compareRoutes: MetadataRoute.Sitemap = COMPARISONS.map((c) =>
    entry(`/compare/${c.slug}`, 0.8, 'monthly')
  );

  const toolRoutes: MetadataRoute.Sitemap = TOOLS.map((t) => entry(`/tools/${t}`, 0.8, 'monthly'));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.dateISO ? new Date(post.dateISO) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...subRoutes, ...compareRoutes, ...toolRoutes, ...blogRoutes];
}
