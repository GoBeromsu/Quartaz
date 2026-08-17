# Operator scripts

Local-only rebuild + serve for the Ataraxia Quartz site. Serves over Tailscale
only (never 0.0.0.0/localhost).

## Run once

```sh
scripts/rebuild.sh   # builds into public-next, rotates public -> public-prev -> public
scripts/serve.sh      # serves ./public on tcp://100.122.16.120:8090
```

`serve.sh` can be started once and left running; `rebuild.sh` swaps the
`public` directory on disk underneath it, so the server does not need to be
restarted after each rebuild.

## Register with pm2

```sh
pm2 start ecosystem.example.cjs
pm2 save
```

This starts `ataraxia-serve` (always-on) and `ataraxia-rebuild` (runs once,
then re-runs every 6 hours via `cron_restart`).

## Change port / bind address / interval

- Port or bind host: edit `env.PORT` / `env.BIND_HOST` in
  `ecosystem.example.cjs`, or export `PORT=` / `BIND_HOST=` before running
  `scripts/serve.sh` directly.
- Rebuild interval: edit the `cron_restart` cron string for
  `ataraxia-rebuild` in `ecosystem.example.cjs` (e.g. `0 */3 * * *` for every
  3 hours).
- Other overrides: `VAULT_DIR`, `OUT_DIR`, `NODE_HEAP_MB` (see comments in
  `scripts/rebuild.sh`).

## Rollback

If a bad build gets promoted to `public`:

```sh
mv public public-broken
mv public-prev public
```

`serve` picks up the swapped directory on the next request with no restart
needed.

## Logs

Rebuild logs go to `logs/rebuild-YYYYmmdd-HHMMSS.log`; the last 10 are kept
automatically.
