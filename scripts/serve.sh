#!/usr/bin/env bash
#
# serve.sh — serve a built Quartz site directory on a fixed Tailscale-only
# address. Refuses to start on a wildcard/loopback bind address so the site
# is never accidentally exposed beyond Tailscale.
#
# Env overrides:
#   BIND_HOST - address to bind (default: 100.122.16.120). Must not be
#               empty, 0.0.0.0, localhost, or 127.0.0.1.
#   PORT      - port to bind (default: 8090)
#   SITE_DIR  - directory (relative to repo root) to serve (default:
#               public-watch, the resident watch build's output).
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

# Node 24 must come first on PATH.
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"

# Use ${VAR-default} (no colon) so an explicitly empty BIND_HOST is
# preserved instead of silently falling back to the default, and can be
# caught by the guard below.
BIND_HOST="${BIND_HOST-100.122.16.120}"
PORT="${PORT:-8090}"
SITE_DIR="${SITE_DIR:-public-watch}"

case "$BIND_HOST" in
  ""|0.0.0.0|localhost|127.0.0.1)
    echo "Refusing to start: BIND_HOST='$BIND_HOST' is not allowed. Must be a specific non-loopback address (e.g. the Tailscale IP 100.122.16.120), never 0.0.0.0/localhost/127.0.0.1/empty." >&2
    exit 1
    ;;
esac

cd "$REPO_DIR"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Serving '$REPO_DIR/$SITE_DIR' on tcp://${BIND_HOST}:${PORT}"
exec node ./node_modules/.bin/serve -l "tcp://${BIND_HOST}:${PORT}" "$SITE_DIR"
