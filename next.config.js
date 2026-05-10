/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Static HTML export ────────────────────────────────────────────────────
  // Produces a self-contained `out/` directory — no Node server required.
  output: 'export',

  // trailingSlash: true → /about becomes /about/index.html
  // Required for S3 static website hosting without a custom redirect rule.
  trailingSlash: true,

  // Image optimisation requires a running server; disable for static export.
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.trendly.now' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  // ── Misc ──────────────────────────────────────────────────────────────────
  reactStrictMode: true,

  // Compress HTML output for smaller file sizes
  compress: true,
};

module.exports = nextConfig;
