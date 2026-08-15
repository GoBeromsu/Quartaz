#!/usr/bin/env node
/**
 * Syncs Ataraxia Digital Garden staging folder to content/
 * NOTE: Syncs from .deploy-staging (prepared by /deploy skill)
 * Usage:
 *   node scripts/watch-content.mjs         # Watch mode
 *   node scripts/watch-content.mjs --once  # Sync once and exit
 */

import { execSync } from "child_process"
import { existsSync } from "fs"
import { basename, resolve } from "path"

import { watch } from "chokidar"

const SOURCE_DIR = resolve(
  process.env.BLOG_SYNC_SOURCE_DIR ?? "../Ataraxia/40. Digital Garden/.deploy-staging",
)
const DEST_DIR = resolve(process.env.BLOG_SYNC_DEST_DIR ?? "./content")

const once = process.argv.includes("--once")
const printTranslationOutputDir = process.argv.includes("--print-translation-output-dir")

if (printTranslationOutputDir) {
  console.log(SOURCE_DIR)
  process.exit(0)
}

function checkContentPolicy(path, attachmentRoot = null) {
  if (!existsSync(path)) {
    return
  }

  const attachmentFlag = attachmentRoot ? ` --attachment-root "${attachmentRoot}"` : ""
  execSync(`node scripts/check-content-policy.mjs "${path}"${attachmentFlag}`, { stdio: "inherit" })
}

function sync() {
  console.log("\n[sync] Syncing content...")
  try {
    checkContentPolicy(SOURCE_DIR, DEST_DIR)
    // Writing index pages live in this repo; do not let --delete remove them.
    execSync(
      `rsync -av --delete --exclude='.obsidian' --exclude='.DS_Store' --exclude='_attachments' --exclude='/writing.md' --exclude='/en/writing.md' "${SOURCE_DIR}/" "${DEST_DIR}"`,
      { stdio: "inherit" },
    )
    checkContentPolicy(DEST_DIR)
    console.log("[sync] Complete\n")
    return true
  } catch (error) {
    console.error("[sync] Failed:", error.message)
    return false
  }
}

// Initial sync
const initialSyncSucceeded = sync()

// Exit if --once flag is provided
if (once) {
  process.exit(initialSyncSucceeded ? 0 : 1)
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
