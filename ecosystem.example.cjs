// ecosystem.example.cjs — EXAMPLE pm2 config, NOT applied automatically.
// Review before use, then: pm2 start ecosystem.example.cjs
//
// The resident `quartz build --watch` process (scripts/watch.sh) is the
// primary build mode: it rebuilds public-live/ incrementally as the vault
// changes. scripts/serve.sh serves that directory. A Hermes cron watchdog
// job ("ataraxia-watch", see scripts/README.md) restarts the watch build
// if it dies, so pm2 is not required — this file is an alternative example
// for whoever prefers pm2/launchd process supervision instead of Hermes.
// The old periodic full-rebuild job ("ataraxia-rebuild") is paused and
// kept only as a manual fallback (scripts/rebuild.sh).
//
// Launchd alternative (one line each): create LaunchAgent plists that set
// PATH to include /opt/homebrew/opt/node@24/bin and run scripts/serve.sh
// and scripts/watch.sh respectively, both with KeepAlive=true.

module.exports = {
  apps: [
    {
      name: "ataraxia-serve",
      script: "scripts/serve.sh",
      cwd: __dirname,
      interpreter: "none",
      autorestart: true,
      env: {
        BIND_HOST: "100.122.16.120",
        PORT: "8090",
        SITE_DIR: "public-live",
      },
    },
    {
      name: "ataraxia-watch",
      script: "scripts/watch.sh",
      cwd: __dirname,
      interpreter: "none",
      autorestart: true,
      // No cron_restart: this is a long-running resident process, not a
      // periodic job. Restarting it clears public-live/ and takes ~9 min
      // to rebuild, so pm2 should only restart it on crash, not on a timer.
      env: {
        VAULT_DIR: "/Users/beomsu/Obsidian/Ataraxia",
        OUT_DIR: "public-live",
      },
    },
  ],
};
