/**
 * CloudFront Function — URL Rewriter (viewer-request)
 * Runtime: cloudfront-js-2.0
 *
 * Problem this solves:
 *   Next.js static export with trailingSlash:true writes:
 *     /pricing  → out/pricing/index.html
 *     /about    → out/about/index.html
 *     /blog/slug → out/blog/slug/index.html
 *
 *   CloudFront's "default root object" only rewrites the bare root (/).
 *   Every other path — /pricing, /about, etc. — hits S3 as-is, finds no
 *   matching key, and returns 403 Access Denied.
 *
 * Fix:
 *   Intercept every viewer request and rewrite directory-style URIs to
 *   their index.html equivalent before S3 ever sees the request.
 *
 * Rules:
 *   /            → /index.html       (safety net; CF default root handles this too)
 *   /pricing     → /pricing/index.html
 *   /pricing/    → /pricing/index.html
 *   /blog/my-post → /blog/my-post/index.html
 *   /og-default.png   → unchanged   (has an extension → it's a real file)
 *   /_next/static/… → unchanged     (Next.js hashed assets)
 */
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Already points at a file (has a dot in the last path segment) → pass through
  var lastSegment = uri.split('/').pop();
  if (lastSegment && lastSegment.indexOf('.') !== -1) {
    return request;
  }

  // Normalise: strip trailing slash (except bare root), then append /index.html
  if (uri === '/') {
    request.uri = '/index.html';
  } else {
    // Remove trailing slash if present, then add /index.html
    var clean = uri.replace(/\/$/, '');
    request.uri = clean + '/index.html';
  }

  return request;
}
