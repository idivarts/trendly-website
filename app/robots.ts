import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.trendly.now';

/**
 * Next.js 14 built-in robots.txt generator.
 * Outputs /robots.txt at build time (static export).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block internal Next.js paths and any future admin routes
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
