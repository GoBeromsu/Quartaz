#!/usr/bin/env node
/**
 * Syncs Ataraxia Digital Garden staging folder to content/
 * NOTE: Syncs from .deploy-staging (prepared by /deploy skill)
 * Usage:
 *   node scripts/watch-content.mjs         # Watch mode
 *   node scripts/watch-content.mjs --once  # Sync once and exit
 */

import { execSync } from "child_process"
import { basename, resolve } from "path"

import { watch } from "chokidar"

const SOURCE_DIR = resolve("../Ataraxia/40. Digital Garden/.deploy-staging")
const DEST_DIR = resolve("./content")

const once = process.argv.includes("--once")

function sync() {
  console.log("\n[sync] Syncing content...")
  try {
    execSync(
      `rsync -av --delete --exclude='.obsidian' --exclude='.DS_Store' --exclude='_attachments' "${SOURCE_DIR}/" "${DEST_DIR}"`,
      { stdio: "inherit" },
    )
    console.log("[sync] Complete\n")
  } catch (error) {
    console.error("[sync] Failed:", error.message)
  }
}

// Initial sync
sync()

// Exit if --once flag is provided
if (once) {
  process.exit(0)
}

// Watch for changes
console.log(`[watch] Watching ${SOURCE_DIR} for changes...`)

const watcher = watch(SOURCE_DIR, {
  ignored: /(^|[/\\])\../, // dotfiles (includes .DS_Store, .obsidian)
  persistent: true,
  ignoreInitial: true,
  usePolling: true,
  interval: 500,
  awaitWriteFinish: {
    stabilityThreshold: 300,
    pollInterval: 100,
  },
})

let syncTimeout = null

watcher
  .on("ready", () => {
    console.log("[watch] Ready and watching for changes")
  })
  .on("all", (event, filePath) => {
    console.log(`[watch] ${event}: ${basename(filePath)}`)
    // Debounce: wait 500ms after last change before syncing
    if (syncTimeout) clearTimeout(syncTimeout)
    syncTimeout = setTimeout(sync, 500)
  })
  .on("error", (error) => {
    console.error("[watch] Error:", error)
  })

process.on("SIGINT", () => {
  console.log("\n[watch] Stopping...")
  watcher.close()
  process.exit(0)
})
