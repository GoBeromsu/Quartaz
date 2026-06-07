import { createHash } from "node:crypto"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { basename, join, resolve } from "node:path"
import { parse, stringify } from "yaml"

export const SUPPORTED_TARGET_LOCALES = new Set([
  "en",
  "zh-Hans",
  "hi",
  "es",
  "fr",
  "ar",
  "bn",
  "pt-BR",
])
export const STAGING_OUTPUT_DIR = resolve("../Ataraxia/40. Digital Garden/.deploy-staging")

export class WorkflowError extends Error {
  constructor(message, exitCode = 1) {
    super(message)
    this.name = "WorkflowError"
    this.exitCode = exitCode
  }
}

export function resolveOutDir(outDir) {
  return outDir === "@staging" ? STAGING_OUTPUT_DIR : outDir
}

export function validateLocales(locales) {
  if (locales.length === 0) {
    throw new WorkflowError("at least one target locale is required")
  }

  for (const locale of locales) {
    if (!SUPPORTED_TARGET_LOCALES.has(locale)) {
      throw new WorkflowError(`unsupported target locale: ${locale}`)
    }
  }
}

export function parseLocaleList(value) {
  return value
    .split(",")
    .map((locale) => locale.trim())
    .filter(Boolean)
}

export function splitFrontmatter(markdown, sourcePath) {
  if (!markdown.startsWith("---\n")) {
    throw new WorkflowError(`missing frontmatter: ${sourcePath}`)
  }

  const end = markdown.indexOf("\n---", 4)
  if (end === -1) {
    throw new WorkflowError(`unterminated frontmatter: ${sourcePath}`)
  }

  const frontmatter = parse(markdown.slice(4, end))
  if (!frontmatter || typeof frontmatter !== "object" || Array.isArray(frontmatter)) {
    throw new WorkflowError(`invalid frontmatter: ${sourcePath}`)
  }

  return {
    frontmatter,
    body: markdown.slice(end + 5).replace(/^\n/, ""),
  }
}

export function sourceHash(markdown) {
  return `sha256:${createHash("sha256").update(markdown).digest("hex")}`
}

function existingSourceHash(markdown) {
  try {
    const parsed = splitFrontmatter(markdown, "existing translation")
    const value = parsed.frontmatter.sourceHash
    return typeof value === "string" ? value : undefined
  } catch (error) {
    if (error instanceof WorkflowError) {
      return undefined
    }
    throw error
  }
}

function translateLineMock(line, locale, state) {
  if (line.startsWith("```")) {
    state.inFence = !state.inFence
    return line
  }
  if (state.inFence || line.trim() === "") return line
  if (/^!\[[^\]]*\]\([^)]+\)$/.test(line.trim())) return line
  if (/^\[\[[^\]]+\]\]$/.test(line.trim())) return line
  if (/^>\s*\[![^\]]+\]/.test(line)) return line
  if (line.startsWith("> ")) return `> [${locale}] ${line.slice(2)}`

  return `[${locale}] ${line}`
}

function translateMock(body, locale) {
  const state = { inFence: false }
  return body
    .split("\n")
    .map((line) => translateLineMock(line, locale, state))
    .join("\n")
}

async function translateSolar(body, locale) {
  const apiKey = process.env.UPSTAGE_API_KEY
  if (!apiKey) {
    throw new WorkflowError("UPSTAGE_API_KEY is required for --provider solar")
  }

  const response = await fetch("https://api.upstage.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.UPSTAGE_SOLAR_MODEL || "solar-pro3",
      messages: [
        {
          role: "system",
          content:
            "Translate Korean markdown into the requested locale. Preserve fenced code blocks, markdown links, wikilinks, image paths, URLs, callout markers, and frontmatter-like tokens exactly.",
        },
        {
          role: "user",
          content: `Locale: ${locale}\n\n${body}`,
        },
      ],
      temperature: 0.2,
    }),
  })

  if (!response.ok) {
    throw new WorkflowError(`Solar API failed: HTTP ${response.status}`)
  }

  const payload = await response.json()
  const content = payload?.choices?.[0]?.message?.content
  if (typeof content !== "string" || content.trim() === "") {
    throw new WorkflowError("Solar API returned an empty translation")
  }

  return content
}

async function translateBody(body, locale, provider) {
  if (provider === "mock") {
    return translateMock(body, locale)
  }

  return translateSolar(body, locale)
}

function buildFrontmatter(sourceFrontmatter, locale, hash, sourcePath) {
  const title =
    typeof sourceFrontmatter.title === "string" ? `[${locale}] ${sourceFrontmatter.title}` : locale
  const permalink =
    typeof sourceFrontmatter.permalink === "string"
      ? sourceFrontmatter.permalink
      : basename(sourcePath, ".md")
  const translationKey =
    typeof sourceFrontmatter.translationKey === "string"
      ? sourceFrontmatter.translationKey
      : permalink

  return {
    ...sourceFrontmatter,
    title,
    translationKey,
    locale,
    sourceLocale: "ko",
    sourcePath,
    sourceHash: hash,
    translationStatus: "translated",
    permalink,
  }
}

export function renderMarkdown(frontmatter, body) {
  return `---\n${stringify(frontmatter).trimEnd()}\n---\n\n${body.replace(/\s*$/, "\n")}`
}

export async function translateSource({ sourcePath, locales, outDir, provider, dryRun }) {
  validateLocales(locales)

  if (provider === "solar" && !process.env.UPSTAGE_API_KEY) {
    throw new WorkflowError("UPSTAGE_API_KEY is required for --provider solar")
  }

  const source = readFileSync(sourcePath, "utf8")
  const parsed = splitFrontmatter(source, sourcePath)
  const hash = sourceHash(source)
  const translations = []

  for (const locale of locales) {
    const targetPath = join(outDir, locale, basename(sourcePath))
    if (existsSync(targetPath)) {
      const existing = readFileSync(targetPath, "utf8")
      if (existingSourceHash(existing) !== hash) {
        translations.push({ locale, status: "stale", targetPath, sourceHash: hash })
        continue
      }
      translations.push({ locale, status: "unchanged", targetPath, sourceHash: hash })
      continue
    }

    if (dryRun) {
      translations.push({ locale, status: "would-write", targetPath, sourceHash: hash })
      continue
    }

    const translatedBody = await translateBody(parsed.body, locale, provider)
    const targetFrontmatter = buildFrontmatter(parsed.frontmatter, locale, hash, sourcePath)
    mkdirSync(join(outDir, locale), { recursive: true })
    writeFileSync(targetPath, renderMarkdown(targetFrontmatter, translatedBody))
    translations.push({ locale, status: "written", targetPath, sourceHash: hash })
  }

  return {
    sourceHash: hash,
    translations,
  }
}
