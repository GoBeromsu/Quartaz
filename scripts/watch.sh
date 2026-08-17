#!/usr/bin/env bash
#
# watch.sh — resident Quartz build in --watch mode (foreground, primary
# build mode for the local Ataraxia site). Rebuilds incrementally on vault
# changes into OUT_DIR (default: public-live) and stays running.
#
# IMPORTANT CAVEATS:
#  - `quartz build --watch` CLEANS OUT_DIR on startup, then does a full
#    initial build (~9 min) before the site is servable again. Restarting
#    this script means the site directory is briefly empty/incomplete for
#    ~9 min. Prefer letting it run continuously; don't restart casually.
#  - NEVER pass `--serve` to this invocation — that flag makes quartz open
#    its own HTTP server bound to all interfaces (0.0.0.0), which would
#    violate the single-port/Tailscale-only serving policy for this repo.
#    Serving is handled exclusively by scripts/serve.sh on 100.122.16.120.
#
# Env overrides:
#   VAULT_DIR     - Obsidian vault to build from (default: /Users/beomsu/Obsidian/Ataraxia)
#   OUT_DIR        - directory watch-builds into, relative to repo root (default: public-live)
#   NODE_HEAP_MB   - Node --max-old-space-size in MB (default: 8192)
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

# Node 24 must come first on PATH (quartz build requires it).
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"

VAULT_DIR="${VAULT_DIR:-/Users/beomsu/Obsidian/Ataraxia}"
OUT_DIR="${OUT_DIR:-public-live}"
NODE_HEAP_MB="${NODE_HEAP_MB:-8192}"

# Refuse to start a second resident watch build for this repo.
if pgrep -f "bin/quartz build --watch" >/dev/null 2>&1; then
  echo "ERROR: a 'quartz build --watch' process is already running. Not starting a second one." >&2
  echo "  See: pgrep -fl 'bin/quartz build --watch'" >&2
  exit 1
fi

if [ ! -d "$VAULT_DIR" ]; then
  echo "ERROR: VAULT_DIR '$VAULT_DIR' does not exist." >&2
  exit 1
fi

cd "$REPO_DIR"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Starting resident watch build"
echo "  REPO_DIR=$REPO_DIR"
echo "  VAULT_DIR=$VAULT_DIR"
echo "  OUT_DIR=$OUT_DIR"
echo "  NODE_HEAP_MB=$NODE_HEAP_MB"
echo "  node=$(command -v node) ($(node --version 2>/dev/null || echo unknown))"

exec env NODE_OPTIONS="--max-old-space-size=${NODE_HEAP_MB}" \
  npx quartz build --watch --directory "$VAULT_DIR" --output "$OUT_DIR"
