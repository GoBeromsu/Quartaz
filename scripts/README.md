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

## Register with pm2 (serve only)

```sh
pm2 start ecosystem.example.cjs
pm2 save
```

This starts `ataraxia-serve` (always-on). Periodic rebuilds are scheduled
separately by a Hermes cron job, not by pm2.

## Rebuild scheduling (Hermes cron)

The periodic rebuild is run by the Hermes cron job `ataraxia-rebuild`
(wrapper: `~/.hermes/scripts/ataraxia_rebuild.sh`, workdir this repo),
delivering a one-line result to Discord. It runs `scripts/rebuild.sh`
synchronously — the ~9 min build is well under Hermes's default
`script_timeout_seconds` (3600s) for no-agent cron scripts.

```sh
hermes cron list                                          # show job + next run
hermes cron status                                         # confirm scheduler is running
hermes cron edit ataraxia-rebuild --schedule "0 */3 * * *" # change interval (e.g. every 3h)
hermes cron pause ataraxia-rebuild                          # pause
hermes cron resume ataraxia-rebuild                         # resume
hermes cron remove ataraxia-rebuild                         # remove
```

## Change port / bind address

- Port or bind host: edit `env.PORT` / `env.BIND_HOST` in
  `ecosystem.example.cjs`, or export `PORT=` / `BIND_HOST=` before running
  `scripts/serve.sh` directly.
- Rebuild env overrides (`VAULT_DIR`, `OUT_DIR`, `NODE_HEAP_MB`): set them in
  the Hermes cron job's environment or edit `scripts/rebuild.sh`'s defaults
  directly (see comments in that file).

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
