#!/usr/bin/env node
import { runBackfill } from "./lib/backfill.mjs"
import {
  parseLocaleList,
  resolveOutDir,
  translateSource,
  WorkflowError,
} from "./lib/translation-core.mjs"

function parseSingleArgs(argv) {
  const args = {
    dryRun: false,
    provider: "mock",
  }

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === "--dry-run") {
      args.dryRun = true
      continue
    }

    if (!arg.startsWith("--")) {
      throw new WorkflowError(`unexpected argument: ${arg}`)
    }

    const value = argv[index + 1]
    if (!value || value.startsWith("--")) {
      throw new WorkflowError(`missing value for ${arg}`)
    }
    index += 1

    if (arg === "--source") args.source = value
    else if (arg === "--locales") args.locales = value
    else if (arg === "--out-dir") args.outDir = value
    else if (arg === "--provider") args.provider = value
    else throw new WorkflowError(`unknown option: ${arg}`)
  }

  if (!args.source) throw new WorkflowError("missing --source")
  if (!args.locales) throw new WorkflowError("missing --locales")
  if (!args.outDir) throw new WorkflowError("missing --out-dir")
  if (args.provider !== "mock" && args.provider !== "solar") {
    throw new WorkflowError("--provider must be mock or solar")
  }

  return {
    ...args,
    outDir: resolveOutDir(args.outDir),
    locales: parseLocaleList(args.locales),
  }
}

async function runSingle(argv) {
  const args = parseSingleArgs(argv)
  const result = await translateSource({
    sourcePath: args.source,
    locales: args.locales,
    outDir: args.outDir,
    provider: args.provider,
    dryRun: args.dryRun,
  })

  return {
    dryRun: args.dryRun,
    provider: args.provider,
    outputRoot: args.outDir,
    source: {
      path: args.source,
      sourceHash: result.sourceHash,
    },
    translations: result.translations,
  }
}

async function run(argv) {
  if (argv[0] === "backfill") {
    return runBackfill(argv.slice(1))
  }

  return runSingle(argv)
}

try {
  const manifest = await run(process.argv.slice(2))
  process.stdout.write(`${JSON.stringify(manifest, null, 2)}\n`)
} catch (error) {
  if (error instanceof WorkflowError) {
    process.stderr.write(`${error.message}\n`)
    process.exit(error.exitCode)
  }
  throw error
}
