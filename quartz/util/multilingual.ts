import { readdirSync, readFileSync } from "node:fs"
import { basename } from "node:path"

import { parse } from "yaml"

import type {
  MultilingualConfiguration,
  MultilingualContentIndexMode,
  MultilingualLocaleConfiguration,
  MultilingualLocaleDirection,
  MultilingualRedirectStatus,
} from "../cfg"
import { TRANSLATIONS, type ValidLocale } from "../i18n"

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

type MultilingualLocaleProfileEntry = {
  readonly id: MultilingualLocale
  readonly locale: ValidLocale
  readonly routePrefix: string
  readonly direction: MultilingualLocaleDirection
}

export const MULTILINGUAL_LOCALE_PROFILE: readonly MultilingualLocaleProfileEntry[] = [
  { id: "ko", locale: "ko-KR", routePrefix: "/ko/", direction: "ltr" },
  { id: "en", locale: "en-US", routePrefix: "/en/", direction: "ltr" },
  { id: "zh-Hans", locale: "zh-CN", routePrefix: "/zh-Hans/", direction: "ltr" },
  { id: "hi", locale: "hi-IN", routePrefix: "/hi/", direction: "ltr" },
  { id: "es", locale: "es-ES", routePrefix: "/es/", direction: "ltr" },
  { id: "fr", locale: "fr-FR", routePrefix: "/fr/", direction: "ltr" },
  { id: "ar", locale: "ar-SA", routePrefix: "/ar/", direction: "rtl" },
  { id: "bn", locale: "bn-BD", routePrefix: "/bn/", direction: "ltr" },
  { id: "pt-BR", locale: "pt-BR", routePrefix: "/pt-BR/", direction: "ltr" },
] as const

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
const localeProfileById = new Map<string, MultilingualLocaleProfileEntry>(
  MULTILINGUAL_LOCALE_PROFILE.map((locale) => [locale.id, locale]),
)
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

function requiredBoolean(data: Record<string, unknown>, key: string, fileName: string): boolean {
  const value = data[key]
  if (typeof value !== "boolean") {
    throw new MultilingualContractError("missing-field", `missing ${key}: ${fileName}`)
  }

  return value
}

function requiredNumber(data: Record<string, unknown>, key: string, fileName: string): number {
  const value = data[key]
  if (typeof value !== "number" || !Number.isInteger(value)) {
    throw new MultilingualContractError("missing-field", `missing ${key}: ${fileName}`)
  }

  return value
}

function requiredArray(
  data: Record<string, unknown>,
  key: string,
  fileName: string,
): readonly unknown[] {
  const value = data[key]
  if (!Array.isArray(value)) {
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

function isValidLocaleTag(value: string): value is ValidLocale {
  return Object.hasOwn(TRANSLATIONS, value)
}

function isLocaleDirection(value: string): value is MultilingualLocaleDirection {
  return value === "ltr" || value === "rtl"
}

function isContentIndexMode(value: string): value is MultilingualContentIndexMode {
  return value === "all" || value === "source"
}

function isMultilingualLocale(value: string): value is MultilingualLocale {
  return supportedLocaleSet.has(value)
}

function isRedirectStatus(value: number): value is MultilingualRedirectStatus {
  return value === 301 || value === 302 || value === 307 || value === 308
}

function isTranslationStatus(value: string): value is TranslationStatus {
  if (!translationStatuses.has(value)) {
    throw new MultilingualContractError("unsupported-status", `unsupported status: ${value}`)
  }

  return true
}

function requiredLocaleId(value: unknown, fileName: string): MultilingualLocale {
  if (typeof value !== "string" || !isMultilingualLocale(value)) {
    throw new MultilingualContractError(
      "unsupported-locale",
      `unsupported locale: ${String(value)} in ${fileName}`,
    )
  }

  return value
}

function requiredValidLocaleTag(
  data: Record<string, unknown>,
  key: string,
  fileName: string,
): ValidLocale {
  const value = requiredString(data, key, fileName)
  if (!isValidLocaleTag(value)) {
    throw new MultilingualContractError(
      "unsupported-locale-tag",
      `unsupported locale tag: ${value}`,
    )
  }

  return value
}

function requiredDirection(
  data: Record<string, unknown>,
  key: string,
  fileName: string,
): MultilingualLocaleDirection {
  const value = requiredString(data, key, fileName)
  if (!isLocaleDirection(value)) {
    throw new MultilingualContractError("unsupported-direction", `unsupported direction: ${value}`)
  }

  return value
}

function requiredContentIndexMode(
  data: Record<string, unknown>,
  key: string,
  fileName: string,
): MultilingualContentIndexMode {
  const value = requiredString(data, key, fileName)
  if (!isContentIndexMode(value)) {
    throw new MultilingualContractError(
      "unsupported-content-index-mode",
      `unsupported ${key}: ${value}`,
    )
  }

  return value
}

function requiredRedirectStatus(
  data: Record<string, unknown>,
  key: string,
  fileName: string,
): MultilingualRedirectStatus {
  const value = requiredNumber(data, key, fileName)
  if (!isRedirectStatus(value)) {
    throw new MultilingualContractError(
      "unsupported-redirect-status",
      `unsupported redirect status: ${value}`,
    )
  }

  return value
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

function validateLocaleConfiguration(entry: unknown): MultilingualLocaleConfiguration {
  if (!isRecord(entry)) {
    throw new MultilingualContractError("invalid-locale-config", "invalid locale config")
  }

  const id = requiredLocaleId(entry.id, "locale config")
  const locale = requiredValidLocaleTag(entry, "locale", id)
  const routePrefix = requiredString(entry, "routePrefix", id)
  const direction = requiredDirection(entry, "direction", id)
  const label = requiredString(entry, "label", id)
  const nativeName = requiredString(entry, "nativeName", id)

  return {
    id,
    locale,
    routePrefix,
    direction,
    label,
    nativeName,
  }
}

function validateLocaleProfile(locales: readonly MultilingualLocaleConfiguration[]): void {
  for (const locale of locales) {
    const expectedProfile = localeProfileById.get(locale.id)

    if (!expectedProfile) {
      throw new MultilingualContractError("unsupported-locale", `unsupported locale: ${locale.id}`)
    }

    if (locale.locale !== expectedProfile.locale) {
      throw new MultilingualContractError(
        "mismatched-locale-tag",
        `mismatched locale tag: ${locale.id}`,
      )
    }

    if (locale.routePrefix !== expectedProfile.routePrefix) {
      throw new MultilingualContractError(
        "mismatched-locale-prefix",
        `mismatched locale prefix: ${locale.id}`,
      )
    }

    if (locale.direction !== expectedProfile.direction) {
      throw new MultilingualContractError(
        "mismatched-locale-direction",
        `mismatched locale direction: ${locale.id}`,
      )
    }
  }
}

function validateLocaleSet(locales: readonly MultilingualLocaleConfiguration[]): void {
  const ids = new Set<string>()
  const routePrefixes = new Set<string>()

  for (const locale of locales) {
    if (ids.has(locale.id)) {
      throw new MultilingualContractError("duplicate-locale", `duplicate locale: ${locale.id}`)
    }
    ids.add(locale.id)

    if (routePrefixes.has(locale.routePrefix)) {
      throw new MultilingualContractError(
        "duplicate-locale-prefix",
        `duplicate locale prefix: ${locale.routePrefix}`,
      )
    }
    routePrefixes.add(locale.routePrefix)
  }

  for (const expectedLocale of SUPPORTED_MULTILINGUAL_LOCALES) {
    if (!ids.has(expectedLocale)) {
      throw new MultilingualContractError("missing-locale", `missing locale: ${expectedLocale}`)
    }
  }
}

function validateTargetLocales(
  sourceLocale: MultilingualLocale,
  targetLocales: readonly unknown[],
): string[] {
  const seen = new Set<string>()
  const typedTargetLocales: string[] = []

  for (const targetLocale of targetLocales) {
    const locale = requiredLocaleId(targetLocale, "targetLocales")
    if (locale === sourceLocale) {
      throw new MultilingualContractError(
        "source-target-locale",
        `source locale in targets: ${locale}`,
      )
    }
    if (seen.has(locale)) {
      throw new MultilingualContractError("duplicate-locale", `duplicate locale: ${locale}`)
    }
    seen.add(locale)
    typedTargetLocales.push(locale)
  }

  return typedTargetLocales
}

export function validateMultilingualConfig(value: unknown): MultilingualConfiguration {
  if (!isRecord(value)) {
    throw new MultilingualContractError("invalid-config", "invalid multilingual config")
  }

  const enabled = requiredBoolean(value, "enabled", "multilingual")
  const sourceLocale = requiredLocaleId(value.sourceLocale, "sourceLocale")
  const targetLocales = validateTargetLocales(
    sourceLocale,
    requiredArray(value, "targetLocales", "multilingual"),
  )
  const locales = requiredArray(value, "locales", "multilingual").map((entry) =>
    validateLocaleConfiguration(entry),
  )
  const legacyRedirects = requiredRedirectsConfig(value.legacyRedirects)
  const contentIndex = requiredContentIndexConfig(value.contentIndex)
  const defaultLocaleRoute = requiredString(value, "defaultLocaleRoute", "multilingual")
  const xDefaultRoute = requiredString(value, "xDefaultRoute", "multilingual")
  const sourceLocaleConfig = locales.find((locale) => locale.id === sourceLocale)

  validateLocaleSet(locales)
  validateLocaleProfile(locales)

  if (!sourceLocaleConfig) {
    throw new MultilingualContractError("missing-source", `missing source locale: ${sourceLocale}`)
  }

  if (defaultLocaleRoute !== sourceLocaleConfig.routePrefix) {
    throw new MultilingualContractError(
      "mismatched-default-route",
      "default route must match source locale",
    )
  }

  if (xDefaultRoute !== "/") {
    throw new MultilingualContractError("mismatched-x-default-route", "x-default route must be /")
  }

  return {
    enabled,
    sourceLocale,
    targetLocales,
    locales,
    defaultLocaleRoute,
    xDefaultRoute,
    legacyRedirects,
    contentIndex,
  }
}

function requiredRedirectsConfig(value: unknown): MultilingualConfiguration["legacyRedirects"] {
  if (!isRecord(value)) {
    throw new MultilingualContractError("invalid-redirects", "invalid legacy redirects config")
  }

  return {
    flatPermalinks: requiredBoolean(value, "flatPermalinks", "legacyRedirects"),
    status: requiredRedirectStatus(value, "status", "legacyRedirects"),
    noindex: requiredBoolean(value, "noindex", "legacyRedirects"),
  }
}

function requiredContentIndexConfig(value: unknown): MultilingualConfiguration["contentIndex"] {
  if (!isRecord(value)) {
    throw new MultilingualContractError("invalid-content-index", "invalid content index config")
  }

  return {
    search: requiredContentIndexMode(value, "search", "contentIndex"),
    rss: requiredContentIndexMode(value, "rss", "contentIndex"),
    sitemap: requiredContentIndexMode(value, "sitemap", "contentIndex"),
  }
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
