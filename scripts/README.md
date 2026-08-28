# Operator scripts

Local-only build + serve for the Ataraxia Quartz site. Serves over Tailscale
only (never 0.0.0.0/localhost).

## Primary build mode: resident watch build

`scripts/watch.sh` runs a long-lived `quartz build --watch` process that
rebuilds `public-watch/` incrementally whenever the vault changes (each
change typically emits in ~4 min, due to `emitAll`). This is now the
operational build for the site — `scripts/rebuild.sh` (full periodic
rebuild into `public`) is kept only as a manual fallback.

```sh
scripts/watch.sh   # foreground; run under nohup/pm2/launchd to keep it resident
```

Start it resident, with its log and pid living in the repo (not /tmp):

```sh
mkdir -p logs
nohup scripts/watch.sh >> logs/watch-build.log 2>&1 &
```

Caveats (see comments at the top of `scripts/watch.sh`):

- `--watch` **cleans `OUT_DIR` on startup**, then does a full initial build
  before the site is servable again — on this vault that takes ~9-10 min.
  Its dedicated `public-watch/` output keeps the previous `public-live/`
  fallback intact during bootstrap and recovery.
- It refuses to start a second instance for this repo (checks
  `pgrep -f "bin/quartz build --watch"` first).
- It never passes `--serve` to quartz — that would open quartz's own HTTP
  server on all interfaces (0.0.0.0), violating the single-port/Tailscale
  policy below. Serving is handled exclusively by `scripts/serve.sh`.

## Serving

```sh
scripts/serve.sh   # serves ./${SITE_DIR:-public-watch} on tcp://100.122.16.120:8090
```

`SITE_DIR` (env override, default `public-watch`) selects which built
directory to serve. `serve.sh` can be started once and left running while
`watch.sh` updates its output in place.

## Register with pm2 (example only)

```sh
pm2 start ecosystem.example.cjs
pm2 save
```

This example starts both `ataraxia-serve` (serving `public-live`) and
`ataraxia-watch` (the resident watch build, autorestart on crash, no
`cron_restart` — it's a long-running process, not a periodic job). Review
before use; not applied automatically. A Hermes cron watchdog (below)
already covers restart-on-death without pm2.

## Hermes cron jobs

**`ataraxia-watchdog`** (active, `*/10 * * * *`) — the operational
watchdog. Wrapper: `~/.hermes/scripts/ataraxia_watch.sh`, workdir this
repo, `--no-agent`, delivers to Discord. Each run:

- If a `quartz build --watch` process for this repo is alive: logs a
  `✅ watch alive pid=... rss=...MB last="..."` line to `logs/watchdog.log`
  only — **nothing is printed to stdout**, so no Discord message is sent
  (confirmed: `hermes cron create --no-agent` treats empty stdout as
  silent/no-delivery, which is what keeps a 10-minute healthy check from
  spamming Discord).
- If the watch process is dead: restarts it via
  `nohup scripts/watch.sh >> logs/watch-build.log 2>&1 &` and prints a
  `♻️ watch was down — restarted pid=... (site rebuilding ~9 min)` line to
  stdout (delivered to Discord) as well as the log.
- If `http://100.122.16.120:8090/ko/` doesn't respond, additionally prints
  `⚠️ serve 8090 down` to stdout (delivered).

```sh
hermes cron list --all                       # show all jobs incl. paused
hermes cron status                           # confirm scheduler is running
hermes cron pause ataraxia-watchdog          # pause
hermes cron resume ataraxia-watchdog         # resume
hermes cron remove ataraxia-watchdog         # remove
```

**`ataraxia-rebuild`** (**paused**, `0 */6 * * *`, id `26a1796bdcf8`) — the
old periodic full-rebuild job (wrapper `~/.hermes/scripts/ataraxia_rebuild.sh`,
runs `scripts/rebuild.sh`). Kept paused as a manual fallback; resume it if
the watch build needs to be abandoned for some reason:

```sh
hermes cron resume ataraxia-rebuild
```

## Change port / bind address / served directory

- Port, bind host, or served directory: edit `env.PORT` / `env.BIND_HOST` /
  `env.SITE_DIR` in `ecosystem.example.cjs`, or export `PORT=` /
  `BIND_HOST=` / `SITE_DIR=` before running `scripts/serve.sh` directly.
- Watch/rebuild env overrides (`VAULT_DIR`, `OUT_DIR`, `NODE_HEAP_MB`): set
  them in the environment before running `scripts/watch.sh` /
  `scripts/rebuild.sh` directly, or edit their defaults in the script
  (see comments in each file).

## Rollback (manual full rebuild path only)

`rebuild.sh`'s atomic rotation (`public` -> `public-prev` -> `public`) only
applies when using the paused `ataraxia-rebuild` fallback with `OUT_DIR=public`.
The resident watch build has no rotation/rollback — it rebuilds `public-watch`
in place. To recover from a bad state there, stop the watch process and
either wait out a fresh `--watch` startup rebuild or fall back to
`scripts/rebuild.sh` and repoint `serve.sh`'s `SITE_DIR` at `public`.

## Logs

- `logs/watch-build.log` — resident watch build output (stdout/stderr).
- `logs/watchdog.log` — Hermes watchdog's per-run health lines (including
  the silent ✅ lines that aren't delivered to Discord).
- `logs/serve.log` — serve process output.
- `logs/rebuild-YYYYmmdd-HHMMSS.log` — one per `rebuild.sh` run (fallback
  path only); the last 10 are kept automatically.
