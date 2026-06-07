import { readdirSync, readFileSync } from "node:fs"
import { basename } from "node:path"

import { parse } from "yaml"

export const SUPPORTED_MULTILINGUAL_LOCALES = [
  "ko",
  "en",
  "zh-Hans",
  "hi",
  "es",
  "fr",
  "ar",
  "bn",
  "pt-BR",
] as const

export type MultilingualLocale = (typeof SUPPORTED_MULTILINGUAL_LOCALES)[number]

export type TranslationStatus = "source" | "translated" | "stale" | "blocked" | "external-only"

export type MultilingualFixtureEntry = {
  readonly fileName: string
  readonly title: string
  readonly translationKey: string
  readonly locale: string
  readonly sourceLocale: string
  readonly sourcePath: string
  readonly sourceHash: string
  readonly translationStatus: TranslationStatus
  readonly permalink: string
}

export class MultilingualContractError extends Error {
  constructor(
    readonly code: string,
    message: string,
  ) {
    super(message)
    this.name = "MultilingualContractError"
  }
}

const supportedLocaleSet = new Set<string>(SUPPORTED_MULTILINGUAL_LOCALES)
const translationStatuses = new Set<string>([
  "source",
  "translated",
  "stale",
  "blocked",
  "external-only",
])

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function requiredString(data: Record<string, unknown>, key: string, fileName: string): string {
  const value = data[key]
  if (typeof value !== "string" || value.trim() === "") {
    throw new MultilingualContractError("missing-field", `missing ${key}: ${fileName}`)
  }

  return value
}

function requiredTranslationStatus(
  data: Record<string, unknown>,
  fileName: string,
): TranslationStatus {
  const value = requiredString(data, "translationStatus", fileName)
  if (isTranslationStatus(value)) {
    return value
  }

  throw new MultilingualContractError("unsupported-status", `unsupported status: ${value}`)
}

function isTranslationStatus(value: string): value is TranslationStatus {
  if (!translationStatuses.has(value)) {
    throw new MultilingualContractError("unsupported-status", `unsupported status: ${value}`)
  }

  return true
}

function frontmatterSource(source: string, fileName: string): string {
  if (!source.startsWith("---\n")) {
    throw new MultilingualContractError("missing-frontmatter", `missing frontmatter: ${fileName}`)
  }

  const closingIndex = source.indexOf("\n---", 4)
  if (closingIndex === -1) {
    throw new MultilingualContractError("missing-frontmatter", `missing frontmatter: ${fileName}`)
  }

  return source.slice(4, closingIndex)
}

function parseFrontmatter(source: string, fileName: string): MultilingualFixtureEntry {
  const parsed: unknown = parse(frontmatterSource(source, fileName))
  if (!isRecord(parsed)) {
    throw new MultilingualContractError("invalid-frontmatter", `invalid frontmatter: ${fileName}`)
  }

  const translationStatus = requiredTranslationStatus(parsed, fileName)

  return {
    fileName,
    title: requiredString(parsed, "title", fileName),
    translationKey: requiredString(parsed, "translationKey", fileName),
    locale: requiredString(parsed, "locale", fileName),
    sourceLocale: requiredString(parsed, "sourceLocale", fileName),
    sourcePath: requiredString(parsed, "sourcePath", fileName),
    sourceHash: requiredString(parsed, "sourceHash", fileName),
    translationStatus,
    permalink: requiredString(parsed, "permalink", fileName),
  }
}

function readFixtureFile(fixturePath: URL): MultilingualFixtureEntry {
  return parseFrontmatter(readFileSync(fixturePath, "utf8"), basename(fixturePath.pathname))
}

function assertSupportedLocale(locale: string): void {
  if (!supportedLocaleSet.has(locale)) {
    throw new MultilingualContractError("unsupported-locale", `unsupported locale: ${locale}`)
  }
}

function assertFixtureEntry(entry: unknown): MultilingualFixtureEntry {
  if (!isRecord(entry)) {
    throw new MultilingualContractError("invalid-entry", "invalid translation entry")
  }

  return parseFrontmatter(
    [
      "---",
      `title: ${requiredString(entry, "title", "entry")}`,
      `translationKey: ${requiredString(entry, "translationKey", "entry")}`,
      `locale: ${requiredString(entry, "locale", "entry")}`,
      `sourceLocale: ${requiredString(entry, "sourceLocale", "entry")}`,
      `sourcePath: ${requiredString(entry, "sourcePath", "entry")}`,
      `sourceHash: ${requiredString(entry, "sourceHash", "entry")}`,
      `translationStatus: ${requiredString(entry, "translationStatus", "entry")}`,
      `permalink: ${requiredString(entry, "permalink", "entry")}`,
      "---",
    ].join("\n"),
    requiredString(entry, "fileName", "entry"),
  )
}

export function readMultilingualFixtureGroup(
  fixturePath: URL,
): readonly MultilingualFixtureEntry[] {
  return readdirSync(fixturePath)
    .filter((fileName) => fileName.endsWith(".md"))
    .sort()
    .map((fileName) => readFixtureFile(new URL(fileName, fixturePath)))
}

export function assertUnsupportedLocaleFixture(fixturePath: URL): void {
  const entry = readFixtureFile(fixturePath)
  assertSupportedLocale(entry.locale)
}

export function assertValidMultilingualFixtureGroup(entries: readonly unknown[]): void {
  const typedEntries = entries.map((entry) => assertFixtureEntry(entry))
  const locales = new Set<string>()
  const sourceEntries = typedEntries.filter((entry) => entry.translationStatus === "source")
  const translationKeys = new Set<string>()
  const permalinks = new Set<string>()

  for (const entry of typedEntries) {
    assertSupportedLocale(entry.locale)
    translationKeys.add(entry.translationKey)
    permalinks.add(entry.permalink)

    if (locales.has(entry.locale)) {
      throw new MultilingualContractError("duplicate-locale", `duplicate locale: ${entry.locale}`)
    }
    locales.add(entry.locale)
  }

  if (sourceEntries.length !== 1 || sourceEntries[0]?.locale !== "ko") {
    throw new MultilingualContractError(
      "missing-source",
      "translation group must contain one ko source",
    )
  }

  if (translationKeys.size !== 1) {
    throw new MultilingualContractError("mismatched-key", "mismatched translationKey")
  }

  if (permalinks.size !== 1) {
    throw new MultilingualContractError("mismatched-permalink", "mismatched permalink")
  }
}
