#!/usr/bin/env bash
#
# rebuild.sh — atomic periodic rebuild of the Ataraxia Quartz site.
#
# Builds into "${OUT_DIR}-next" (fresh each run), then on success rotates
# directories: ${OUT_DIR} -> ${OUT_DIR}-prev (dropping the older prev),
# ${OUT_DIR}-next -> ${OUT_DIR}. serve.sh / `serve` reads files from disk
# per request using the "public" path string, not a cached directory
# handle/inode, so swapping the directory on disk while `serve` keeps
# running is safe — no restart of the serve process is required or
# performed by this script.
#
# On build failure: exits non-zero, leaves the existing ${OUT_DIR} (live
# site) untouched, and leaves the failed ${OUT_DIR}-next around for
# inspection (it is wiped at the start of the next run).
#
# Env overrides:
#   VAULT_DIR     - Obsidian vault to build from (default: /Users/beomsu/Obsidian/Ataraxia)
#   OUT_DIR        - final served directory name, relative to repo root (default: public)
#   NODE_HEAP_MB   - Node --max-old-space-size in MB (default: 8192)
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

# Node 24 must come first on PATH (quartz build requires it).
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"

VAULT_DIR="${VAULT_DIR:-/Users/beomsu/Obsidian/Ataraxia}"
OUT_DIR="${OUT_DIR:-public}"
NODE_HEAP_MB="${NODE_HEAP_MB:-8192}"

FINAL_DIR="$REPO_DIR/$OUT_DIR"
NEXT_DIR="$REPO_DIR/${OUT_DIR}-next"
PREV_DIR="$REPO_DIR/${OUT_DIR}-prev"

LOCK_DIR="$REPO_DIR/.rebuild.lock"
LOG_DIR="$REPO_DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/rebuild-$(date +%Y%m%d-%H%M%S).log"

# --- log rotation: keep the last 10 log files, run on every exit path ---
rotate_logs() {
  ls -1t "$LOG_DIR"/rebuild-*.log 2>/dev/null | tail -n +11 | while IFS= read -r f; do
    rm -f -- "$f"
  done
}

# --- single-instance lock (mkdir is atomic; flock is not shipped on macOS) ---
# Store the owner PID so an interrupted build cannot block every future run.
acquire_lock() {
  if mkdir "$LOCK_DIR" 2>/dev/null; then
    printf '%s\n' "$$" >"$LOCK_DIR/pid"
    return 0
  fi

  local owner_pid=""
  if [ -f "$LOCK_DIR/pid" ]; then
    owner_pid="$(tr -dc '0-9' <"$LOCK_DIR/pid")"
  fi
  if [ -n "$owner_pid" ] && kill -0 "$owner_pid" 2>/dev/null; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Another rebuild is already running (pid: $owner_pid, lock: $LOCK_DIR). Exiting." >&2
    return 1
  fi

  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Recovering stale rebuild lock (owner pid: ${owner_pid:-unknown})." >&2
  rm -f "$LOCK_DIR/pid" 2>/dev/null || true
  if ! rmdir "$LOCK_DIR" 2>/dev/null || ! mkdir "$LOCK_DIR" 2>/dev/null; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Could not recover rebuild lock: $LOCK_DIR" >&2
    return 1
  fi
  printf '%s\n' "$$" >"$LOCK_DIR/pid"
}

if ! acquire_lock; then
  exit 1
fi
cleanup() {
  rm -f "$LOCK_DIR/pid" 2>/dev/null || true
  rmdir "$LOCK_DIR" 2>/dev/null || true
  rotate_logs
}
trap cleanup EXIT

# Mirror everything to the log file as well as stdout/stderr.
exec > >(tee -a "$LOG_FILE") 2>&1

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Starting rebuild"
echo "  REPO_DIR=$REPO_DIR"
echo "  VAULT_DIR=$VAULT_DIR"
echo "  OUT_DIR=$OUT_DIR (final=$FINAL_DIR next=$NEXT_DIR prev=$PREV_DIR)"
echo "  NODE_HEAP_MB=$NODE_HEAP_MB"
echo "  node=$(command -v node) ($(node --version 2>/dev/null || echo unknown))"

if [ ! -d "$VAULT_DIR" ]; then
  echo "ERROR: VAULT_DIR '$VAULT_DIR' does not exist." >&2
  exit 1
fi

cd "$REPO_DIR"

rm -rf "$NEXT_DIR"

set +e
NODE_OPTIONS="--max-old-space-size=${NODE_HEAP_MB}" \
  npx quartz build --directory "$VAULT_DIR" --output "$(basename "$NEXT_DIR")"
BUILD_STATUS=$?
set -e

if [ "$BUILD_STATUS" -ne 0 ]; then
  echo "ERROR: quartz build failed (exit $BUILD_STATUS). Leaving '$OUT_DIR' untouched; '$NEXT_DIR' left in place for inspection." >&2
  exit "$BUILD_STATUS"
fi

if [ ! -d "$NEXT_DIR" ] || [ -z "$(ls -A "$NEXT_DIR" 2>/dev/null)" ]; then
  echo "ERROR: build reported success but '$NEXT_DIR' is missing or empty. Leaving '$OUT_DIR' untouched." >&2
  exit 1
fi

echo "Build succeeded. Rotating directories."

rm -rf "$PREV_DIR"
if [ -d "$FINAL_DIR" ]; then
  mv "$FINAL_DIR" "$PREV_DIR"
fi
mv "$NEXT_DIR" "$FINAL_DIR"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Rebuild complete. '$OUT_DIR' now serves the new build; previous build kept at '$(basename "$PREV_DIR")' for rollback."
