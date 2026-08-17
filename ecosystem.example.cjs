// ecosystem.example.cjs — EXAMPLE pm2 config, NOT applied automatically.
// Review before use, then: pm2 start ecosystem.example.cjs
//
// Only serves the site; periodic rebuilds are scheduled by the Hermes cron
// job "ataraxia-rebuild" (see scripts/README.md), not by pm2/launchd.
//
// Launchd alternative (one line): create a LaunchAgent plist that sets PATH
// to include /opt/homebrew/opt/node@24/bin and runs scripts/serve.sh with
// KeepAlive=true.

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
  ],
};
