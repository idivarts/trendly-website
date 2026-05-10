#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# setup-cloudfront.sh — One-time CloudFront Function setup
#
# Run this ONCE after your first deploy to fix the /pricing → Access Denied
# problem.  It:
#   1. Creates (or updates) a CloudFront Function called trendly-url-rewriter
#   2. Publishes the LIVE stage of that function
#   3. Associates it with your distribution's DefaultCacheBehavior
#      at the viewer-request event
#
# After this runs, re-running deploy-s3.sh will continue to work normally —
# it already issues a CloudFront invalidation so visitors get the new HTML.
#
# Prerequisites:
#   - AWS CLI installed and configured (same creds as deploy-s3.sh)
#   - jq installed (brew install jq)
#   - cloudfront-url-rewriter.js present in the same folder as this script
#
# Usage:
#   bash setup-cloudfront.sh
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

# ── Config (must match deploy-s3.sh) ──────────────────────────────────────────
CLOUDFRONT_DISTRIBUTION_ID="E3FKHIB53YPX3Q"
AWS_REGION="us-east-1"           # CloudFront is global but CLI calls need a region
FUNCTION_NAME="trendly-url-rewriter"
# ─────────────────────────────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FUNCTION_FILE="$SCRIPT_DIR/cloudfront-url-rewriter.js"

echo ""
echo "╔══════════════════════════════════════════════════════╗"
echo "║    Trendly — CloudFront URL Rewriter Setup           ║"
echo "╚══════════════════════════════════════════════════════╝"
echo ""

# ── Guards ────────────────────────────────────────────────────────────────────
if ! command -v aws &>/dev/null; then
  echo "❌  AWS CLI not found. Install: brew install awscli"
  exit 1
fi
if ! command -v jq &>/dev/null; then
  echo "❌  jq not found. Install: brew install jq"
  exit 1
fi
if [ ! -f "$FUNCTION_FILE" ]; then
  echo "❌  cloudfront-url-rewriter.js not found at: $FUNCTION_FILE"
  exit 1
fi

REGION_FLAG="--region $AWS_REGION"

# ══════════════════════════════════════════════════════════════════════════════
#  STEP 1 — Create or update the CloudFront Function
# ══════════════════════════════════════════════════════════════════════════════
echo "🔍  Checking if function '$FUNCTION_NAME' already exists..."

EXISTING_ETAG=$(aws cloudfront describe-function \
  --name "$FUNCTION_NAME" \
  $REGION_FLAG \
  --query 'ETag' --output text 2>/dev/null || echo "")

if [ -z "$EXISTING_ETAG" ]; then
  echo "📝  Creating new CloudFront Function..."
  CREATE_OUTPUT=$(aws cloudfront create-function \
    --name "$FUNCTION_NAME" \
    --function-config "Comment=Rewrite directory paths to index.html for Next.js static export,Runtime=cloudfront-js-2.0" \
    --function-code "fileb://$FUNCTION_FILE" \
    $REGION_FLAG)

  PUBLISH_ETAG=$(echo "$CREATE_OUTPUT" | jq -r '.ETag')
  FUNCTION_ARN=$(echo "$CREATE_OUTPUT" | jq -r '.FunctionSummary.FunctionMetadata.FunctionARN')
  echo "  ✅  Function created"
else
  echo "🔄  Updating existing CloudFront Function..."
  UPDATE_OUTPUT=$(aws cloudfront update-function \
    --name "$FUNCTION_NAME" \
    --function-config "Comment=Rewrite directory paths to index.html for Next.js static export,Runtime=cloudfront-js-2.0" \
    --function-code "fileb://$FUNCTION_FILE" \
    --if-match "$EXISTING_ETAG" \
    $REGION_FLAG)

  PUBLISH_ETAG=$(echo "$UPDATE_OUTPUT" | jq -r '.ETag')
  FUNCTION_ARN=$(echo "$UPDATE_OUTPUT" | jq -r '.FunctionSummary.FunctionMetadata.FunctionARN')
  echo "  ✅  Function updated"
fi

echo ""

# ══════════════════════════════════════════════════════════════════════════════
#  STEP 2 — Publish the function (move from DEVELOPMENT to LIVE stage)
# ══════════════════════════════════════════════════════════════════════════════
echo "🚀  Publishing function to LIVE stage..."
PUBLISH_OUTPUT=$(aws cloudfront publish-function \
  --name "$FUNCTION_NAME" \
  --if-match "$PUBLISH_ETAG" \
  $REGION_FLAG)

FUNCTION_ARN=$(echo "$PUBLISH_OUTPUT" | jq -r '.FunctionSummary.FunctionMetadata.FunctionARN')
echo "  ✅  Published"
echo "  ARN: $FUNCTION_ARN"
echo ""

# ══════════════════════════════════════════════════════════════════════════════
#  STEP 3 — Associate function with the CloudFront distribution
# ══════════════════════════════════════════════════════════════════════════════
echo "🔗  Fetching current distribution config..."
DIST_RESPONSE=$(aws cloudfront get-distribution-config \
  --id "$CLOUDFRONT_DISTRIBUTION_ID" \
  $REGION_FLAG)

DIST_ETAG=$(echo "$DIST_RESPONSE" | jq -r '.ETag')
DIST_CONFIG=$(echo "$DIST_RESPONSE" | jq '.DistributionConfig')

echo "  Distribution ETag: $DIST_ETAG"
echo ""

# Check if this function is already associated to avoid a no-op update
ALREADY_ASSOCIATED=$(echo "$DIST_CONFIG" | \
  jq --arg fn "$FUNCTION_ARN" \
  '[.DefaultCacheBehavior.FunctionAssociations.Items[]? | select(.FunctionARN == $fn)] | length')

if [ "$ALREADY_ASSOCIATED" -gt 0 ]; then
  echo "  ✅  Function already associated with this distribution — nothing to do."
else
  echo "🔧  Adding viewer-request function association..."

  # Inject (or replace) the FunctionAssociations block in DefaultCacheBehavior
  # We preserve any existing associations for OTHER event types and just
  # upsert our viewer-request entry.
  UPDATED_CONFIG=$(echo "$DIST_CONFIG" | jq \
    --arg arn "$FUNCTION_ARN" '
    # Build the new association entry
    ( { "FunctionARN": $arn, "EventType": "viewer-request" } ) as $entry |

    # Get existing associations, removing any existing viewer-request entry
    ( .DefaultCacheBehavior.FunctionAssociations.Items // [] |
      map(select(.EventType != "viewer-request")) ) as $others |

    # Merge and write back
    .DefaultCacheBehavior.FunctionAssociations = {
      "Quantity": ($others | length) + 1,
      "Items": ($others + [$entry])
    }
  ')

  aws cloudfront update-distribution \
    --id "$CLOUDFRONT_DISTRIBUTION_ID" \
    --distribution-config "$UPDATED_CONFIG" \
    --if-match "$DIST_ETAG" \
    $REGION_FLAG \
    --query 'Distribution.Status' --output text

  echo "  ✅  Function associated with distribution"
fi

echo ""

# ══════════════════════════════════════════════════════════════════════════════
#  STEP 4 — Wait hint
# ══════════════════════════════════════════════════════════════════════════════
echo "══════════════════════════════════════════════════════"
echo "✅  Setup complete!"
echo ""
echo "  CloudFront is now deploying the change (~1–3 minutes)."
echo "  You can check status with:"
echo ""
echo "    aws cloudfront get-distribution \\"
echo "      --id $CLOUDFRONT_DISTRIBUTION_ID \\"
echo "      --query 'Distribution.Status' --output text"
echo ""
echo "  Once it shows 'Deployed', /pricing, /about, /blog/* etc."
echo "  will all load correctly."
echo "══════════════════════════════════════════════════════"
echo ""
