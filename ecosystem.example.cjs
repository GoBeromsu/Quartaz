// ecosystem.example.cjs — EXAMPLE pm2 config, NOT applied automatically.
// Review before use, then: pm2 start ecosystem.example.cjs
//
// Launchd alternative (one line): create a LaunchAgent plist per app that
// sets PATH to include /opt/homebrew/opt/node@24/bin, runs scripts/serve.sh
// with KeepAlive=true, and runs scripts/rebuild.sh with StartCalendarInterval
// set to every 6 hours (RunAtLoad optional) instead of pm2's cron_restart.

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
      },
    },
    {
      name: "ataraxia-rebuild",
      script: "scripts/rebuild.sh",
      cwd: __dirname,
      interpreter: "none",
      autorestart: false,
      cron_restart: "0 */6 * * *",
      env: {
        VAULT_DIR: "/Users/beomsu/Obsidian/Ataraxia",
        OUT_DIR: "public",
        NODE_HEAP_MB: "8192",
      },
    },
  ],
};
