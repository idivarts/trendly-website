#!/bin/bash
# One-shot start script: install deps (first run) and launch the dev server.
set -e
cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
  echo "📦 Installing dependencies (first run, ~30s)..."
  npm install --no-audit --no-fund
fi

echo "🚀 Starting Trendly dev server on http://localhost:3000"
npm run dev
