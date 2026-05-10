#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# deploy-s3.sh — Sync the static export to AWS S3
#
# Prerequisites:
#   1. Run `bash export.sh` first to produce the out/ directory.
#   2. AWS CLI installed  (brew install awscli)
#   3. AWS credentials configured  (aws configure  OR  env vars set)
#
# Usage:
#   bash deploy-s3.sh
#   bash deploy-s3.sh --dry-run      ← preview without uploading
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

# ╔══════════════════════════════════════════════════════════════════════════╗
# ║  ▶  CONFIGURE YOUR S3 BUCKET HERE                                       ║
# ╠══════════════════════════════════════════════════════════════════════════╣
# ║                                                                          ║
S3_BUCKET="trendly-website"          # e.g. "trendly-website-prod"
#                                                                            ║
# ║  Optional: set the AWS region if it's not in ~/.aws/config               ║
AWS_REGION="us-east-1"                              # e.g. "ap-south-1" — leave empty to use default
#                                                                            ║
# ║  Optional: CloudFront distribution ID to invalidate after deploy         ║
CLOUDFRONT_DISTRIBUTION_ID="E3FKHIB53YPX3Q"              # e.g. "E1A2B3C4D5E6F7" — leave empty to skip
#                                                                            ║
# ╚══════════════════════════════════════════════════════════════════════════╝

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="$SCRIPT_DIR/out"
DRY_RUN=false

# ── Parse flags ────────────────────────────────────────────────────────────
for arg in "$@"; do
  case $arg in
    --dry-run) DRY_RUN=true ;;
  esac
done

echo ""
echo "╔══════════════════════════════════════════════════╗"
echo "║         Trendly — S3 Deployment                  ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""

# ── Guards ─────────────────────────────────────────────────────────────────
if [ "$S3_BUCKET" = "YOUR_BUCKET_NAME_HERE" ]; then
  echo "❌  ERROR: Set S3_BUCKET in deploy-s3.sh before running."
  exit 1
fi

if [ ! -d "$OUT_DIR" ]; then
  echo "❌  ERROR: out/ directory not found. Run export.sh first."
  exit 1
fi

if ! command -v aws &>/dev/null; then
  echo "❌  ERROR: AWS CLI not found. Install with:  brew install awscli"
  exit 1
fi

# ── Build base AWS flags ───────────────────────────────────────────────────
REGION_FLAG=""
if [ -n "$AWS_REGION" ]; then
  REGION_FLAG="--region $AWS_REGION"
fi

DRY_FLAG=""
if [ "$DRY_RUN" = true ]; then
  DRY_FLAG="--dryrun"
  echo "🔍  DRY RUN — no files will be uploaded."
  echo ""
fi

S3_URI="s3://$S3_BUCKET"
echo "  Bucket:  $S3_URI"
echo "  Source:  $OUT_DIR"
$DRY_RUN && echo "  Mode:    DRY RUN" || echo "  Mode:    LIVE"
echo ""

# ═══════════════════════════════════════════════════════════════════════════
#  STEP 1 — Upload static assets (JS, CSS, images, fonts)
#  Cache-Control: 1 year (immutable, content-hashed by Next.js)
# ═══════════════════════════════════════════════════════════════════════════
echo "📤  Step 1/3 — Uploading static assets (1-year cache)..."
aws s3 sync "$OUT_DIR/_next/" "$S3_URI/_next/" \
  $REGION_FLAG \
  $DRY_FLAG \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --metadata-directive REPLACE

echo "  ✅  _next/ assets uploaded"
echo ""

# ═══════════════════════════════════════════════════════════════════════════
#  STEP 2 — Upload HTML files
#  Cache-Control: no-cache (always revalidate — content changes on each deploy)
# ═══════════════════════════════════════════════════════════════════════════
echo "📄  Step 2/3 — Uploading HTML pages (no-cache)..."
aws s3 sync "$OUT_DIR/" "$S3_URI/" \
  $REGION_FLAG \
  $DRY_FLAG \
  --delete \
  --exclude "_next/*" \
  --exclude "*.xml" \
  --exclude "*.txt" \
  --include "*.html" \
  --content-type "text/html; charset=utf-8" \
  --cache-control "public, no-cache, must-revalidate" \
  --metadata-directive REPLACE

echo "  ✅  HTML pages uploaded"
echo ""

# ═══════════════════════════════════════════════════════════════════════════
#  STEP 3 — Upload SEO files (sitemap, robots.txt, manifest, etc.)
#  Cache-Control: 1 hour (crawlers re-fetch these periodically)
# ═══════════════════════════════════════════════════════════════════════════
echo "🗺️   Step 3/3 — Uploading SEO & root files (1-hour cache)..."
aws s3 sync "$OUT_DIR/" "$S3_URI/" \
  $REGION_FLAG \
  $DRY_FLAG \
  --exclude "_next/*" \
  --exclude "*.html" \
  --cache-control "public, max-age=3600" \
  --metadata-directive REPLACE

echo "  ✅  SEO files uploaded"
echo ""

# ═══════════════════════════════════════════════════════════════════════════
#  STEP 4 (optional) — CloudFront cache invalidation
# ═══════════════════════════════════════════════════════════════════════════
if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ] && [ "$DRY_RUN" = false ]; then
  echo "☁️   Invalidating CloudFront cache..."
  aws cloudfront create-invalidation \
    --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
    --paths "/*" \
    $REGION_FLAG \
    --query 'Invalidation.Id' \
    --output text
  echo "  ✅  CloudFront invalidation submitted"
  echo ""
fi

# ── Done ───────────────────────────────────────────────────────────────────
if [ "$DRY_RUN" = true ]; then
  echo "══════════════════════════════════════════════════"
  echo "🔍  Dry run complete. No files were changed."
  echo "    Run without --dry-run to deploy for real."
else
  echo "══════════════════════════════════════════════════"
  echo "✅  Deployment complete!"
  echo ""
  echo "  Site URL:  http://$S3_BUCKET.s3-website.${AWS_REGION:-<your-region>}.amazonaws.com"
  echo ""
  echo "  Tip: enable S3 static website hosting in the AWS console,"
  echo "  or point a CloudFront distribution at this bucket for HTTPS."
fi
echo "══════════════════════════════════════════════════"
echo ""
