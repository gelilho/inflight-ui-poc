#!/usr/bin/env bash
set -euo pipefail

# ─── Inflight UI — Dev Server ──────────────────────────────
#
# Reads demo-config.json (same folder) and starts Vite.
#
# Usage:
#   ./scripts/run-server.sh            # normal start
#   ./scripts/run-server.sh --install  # force npm install first
# ────────────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
CONFIG_FILE="$SCRIPT_DIR/demo-config.json"

cd "$PROJECT_DIR"

# ─── 1. Load demo config ───────────────────────────────────

if [[ -f "$CONFIG_FILE" ]]; then
  echo "📋 Loading demo config from scripts/demo-config.json"

  # Parse JSON values (works without jq — pure bash + python fallback)
  if command -v python3 &>/dev/null; then
    export VITE_FLIGHT_NUMBER=$(python3 -c "import json; print(json.load(open('$CONFIG_FILE'))['flight_number'])")
    export VITE_FLIGHT_DATE=$(python3 -c "import json; print(json.load(open('$CONFIG_FILE'))['flight_date'])")
    export VITE_AIRPORT_CODE=$(python3 -c "import json; print(json.load(open('$CONFIG_FILE'))['airport_code'])")
    export VITE_DESTINATION_CITY=$(python3 -c "import json; print(json.load(open('$CONFIG_FILE'))['destination_city'])")
    export VITE_ORIGIN_CODE=$(python3 -c "import json; print(json.load(open('$CONFIG_FILE'))['origin_code'])")
    export VITE_LANGUAGE=$(python3 -c "import json; print(json.load(open('$CONFIG_FILE'))['language'])")
  else
    echo "⚠️  python3 not found — using .env defaults"
  fi

  echo "   Flight : $VITE_FLIGHT_NUMBER / $VITE_FLIGHT_DATE"
  echo "   Route  : $VITE_ORIGIN_CODE → $VITE_DESTINATION_CITY ($VITE_AIRPORT_CODE)"
  echo "   Lang   : $VITE_LANGUAGE"
  echo ""
else
  echo "⚠️  No demo-config.json found — using .env defaults"
  echo ""
fi

# ─── 2. Install dependencies if needed ─────────────────────

if [[ "${1:-}" == "--install" ]] || [[ ! -d node_modules ]]; then
  echo "📦 Installing dependencies..."
  if [[ -f package-lock.json ]]; then
    npm ci
  else
    npm install
  fi
  echo ""
fi

# ─── 3. Start Vite dev server ──────────────────────────────

echo "🚀 Starting UI on http://localhost:3000"
echo "   (API expected at ${VITE_API_URL:-http://localhost:8000})"
echo ""

npx vite --port 3000 --host
