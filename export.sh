#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# export.sh — Build Trendly website as a static HTML export
#
# Usage:
#   bash export.sh
#
# Output:
#   out/   ← self-contained static site, ready to upload to S3 or any CDN
#
# After verifying the build, run deploy-s3.sh to push to AWS S3.
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="$SCRIPT_DIR/out"

echo ""
echo "╔══════════════════════════════════════════════════╗"
echo "║         Trendly — Static Export Builder          ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""

# ── 1. Move to project root ────────────────────────────────────────────────
cd "$SCRIPT_DIR"

# ── 2. Install dependencies (skip if node_modules already exists) ──────────
if [ ! -d "node_modules" ]; then
  echo "📦  Installing dependencies..."
  npm install
  echo ""
fi

# ── 3. Clean previous build ────────────────────────────────────────────────
if [ -d "$OUT_DIR" ]; then
  echo "🧹  Removing previous out/ directory..."
  rm -rf "$OUT_DIR"
fi

# ── 4. Run Next.js static build ───────────────────────────────────────────
echo "🏗️   Running next build (output: export)..."
echo ""
next build
echo ""

# ── 5. Post-build checks ───────────────────────────────────────────────────
echo "🔍  Post-build verification..."
echo ""

# Check index.html exists
if [ ! -f "$OUT_DIR/index.html" ]; then
  echo "❌  ERROR: out/index.html not found. Build may have failed."
  exit 1
fi
echo "  ✅  index.html present"

# Check sitemap.xml
if [ ! -f "$OUT_DIR/sitemap.xml" ]; then
  echo "  ⚠️   sitemap.xml not found in out/ — check app/sitemap.ts"
else
  echo "  ✅  sitemap.xml present"
fi

# Check robots.txt
if [ ! -f "$OUT_DIR/robots.txt" ]; then
  echo "  ⚠️   robots.txt not found in out/ — check app/robots.ts"
else
  echo "  ✅  robots.txt present"
fi

# Count HTML pages
HTML_COUNT=$(find "$OUT_DIR" -name "*.html" | wc -l | tr -d ' ')
echo "  ✅  HTML pages generated: $HTML_COUNT"

# Show out/ directory size
OUT_SIZE=$(du -sh "$OUT_DIR" | cut -f1)
echo "  ✅  Total export size: $OUT_SIZE"

echo ""
echo "══════════════════════════════════════════════════"
echo "✅  Export complete!  →  out/"
echo ""
echo "  Preview locally:"
echo "    npx serve out"
echo ""
echo "  Deploy to S3:"
echo "    bash deploy-s3.sh"
echo "══════════════════════════════════════════════════"
echo ""
