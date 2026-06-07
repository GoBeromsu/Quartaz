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

export type LocalePrefixResult = {
  readonly locale: MultilingualLocale | undefined
  readonly permalink: string
}

export type TranslationRouteInput = {
  readonly translationKey: string
  readonly locale: string
  readonly permalink: string
}

export type AlternateUrl = {
  readonly locale: MultilingualLocale
  readonly hreflang: ValidLocale
  readonly direction: MultilingualLocaleDirection
  readonly url: string
}

export type AlternateUrlCluster = {
  readonly translationKey: string
  readonly alternates: readonly AlternateUrl[]
  readonly xDefault: {
    readonly hreflang: "x-default"
    readonly url: string
  }
}

export type TranslationMetadata = {
  readonly translationKey: string
  readonly locale: MultilingualLocale
  readonly sourceLocale: MultilingualLocale
  readonly sourcePath: string
  readonly sourceHash: string
  readonly translationStatus: TranslationStatus
  readonly permalink: string
  readonly localizedPath: string
  readonly canonicalUrl: string
  readonly direction: MultilingualLocaleDirection
}

export type ValidatedTranslationEntry = MultilingualFixtureEntry & {
  readonly locale: MultilingualLocale
  readonly sourceLocale: MultilingualLocale
  readonly metadata: TranslationMetadata
}

export type ValidatedTranslationGroup = {
  readonly translationKey: string
  readonly source: ValidatedTranslationEntry | undefined
  readonly entries: readonly ValidatedTranslationEntry[]
}

export type TranslationFrontmatterValidationOptions = {
  readonly baseUrl: string
}

export type AppliedMultilingualPageData = {
  readonly slug: string
  readonly legacyRedirectSlug: string
  readonly metadata: TranslationMetadata
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
  const localizedSlug = requiredBoolean(value, "localizedSlug", "multilingual")
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
    localizedSlug,
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

function stripEdgeSlashes(value: string): string {
  return value.replace(/^\/+|\/+$/g, "")
}

function normalizedSiteOrigin(baseUrl: string): string {
  const url = new URL(/^https?:\/\//.test(baseUrl) ? baseUrl : `https://${baseUrl}`)

  return url.origin
}

function absoluteUrl(baseUrl: string, pathname: string): string {
  return new URL(pathname, normalizedSiteOrigin(baseUrl)).toString()
}

function isLocaleLikePrefix(value: string): boolean {
  return /^[a-z]{2}(?:-[A-Za-z0-9]+)?$/.test(value)
}

function getLocaleConfig(
  config: MultilingualConfiguration,
  locale: string,
): MultilingualLocaleConfiguration {
  const localeId = requiredLocaleId(locale, "locale")
  const localeConfig = config.locales.find((entry) => entry.id === localeId)

  if (!localeConfig) {
    throw new MultilingualContractError("unsupported-locale", `unsupported locale: ${locale}`)
  }

  return localeConfig
}

export function buildLocalizedPath(
  config: MultilingualConfiguration,
  locale: string,
  permalink: string,
): string {
  const localeConfig = getLocaleConfig(config, locale)
  const normalizedPermalink = stripEdgeSlashes(permalink)

  if (normalizedPermalink === "") {
    return localeConfig.routePrefix
  }

  return `${localeConfig.routePrefix}${normalizedPermalink}`
}

export function buildCanonicalLocaleUrl(
  config: MultilingualConfiguration,
  baseUrl: string,
  locale: string,
  permalink: string,
): string {
  return absoluteUrl(baseUrl, buildLocalizedPath(config, locale, permalink))
}

export function buildLegacyRedirectUrl(baseUrl: string, permalink: string): string {
  return absoluteUrl(baseUrl, `/${stripEdgeSlashes(permalink)}`)
}

export function buildXDefaultUrl(config: MultilingualConfiguration, baseUrl: string): string {
  return absoluteUrl(baseUrl, config.xDefaultRoute)
}

export function stripLocalePrefix(
  config: MultilingualConfiguration,
  pathname: string,
): LocalePrefixResult {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`
  const segments = normalizedPath.split("/").filter((segment) => segment.length > 0)
  const firstSegment = segments[0]

  if (!firstSegment) {
    return { locale: undefined, permalink: "" }
  }

  for (const locale of config.locales) {
    const configuredPrefix = stripEdgeSlashes(locale.routePrefix)

    if (firstSegment === configuredPrefix) {
      return {
        locale: requiredLocaleId(locale.id, "locale"),
        permalink: segments.slice(1).join("/"),
      }
    }
  }

  if (isLocaleLikePrefix(firstSegment)) {
    throw new MultilingualContractError(
      "unsupported-locale-prefix",
      `unsupported locale prefix: /${firstSegment}/`,
    )
  }

  return {
    locale: undefined,
    permalink: segments.join("/"),
  }
}

export function getLocaleDirection(
  config: MultilingualConfiguration,
  locale: string,
): MultilingualLocaleDirection {
  return getLocaleConfig(config, locale).direction
}

export function buildAlternateUrlCluster(
  config: MultilingualConfiguration,
  baseUrl: string,
  translations: readonly TranslationRouteInput[],
  translationKey: string,
): AlternateUrlCluster {
  const translationsByLocale = new Map<MultilingualLocale, TranslationRouteInput>()

  for (const translation of translations) {
    if (translation.translationKey !== translationKey) {
      continue
    }

    const locale = requiredLocaleId(translation.locale, translation.translationKey)

    if (translationsByLocale.has(locale)) {
      throw new MultilingualContractError(
        "duplicate-translation-key",
        `duplicate translation key: ${translation.translationKey} for ${locale}`,
      )
    }

    translationsByLocale.set(locale, translation)
  }

  const alternates = config.locales.map((localeConfig) => {
    const locale = requiredLocaleId(localeConfig.id, "locale")
    const translation = translationsByLocale.get(locale)

    if (!translation) {
      throw new MultilingualContractError("missing-translation", `missing translation: ${locale}`)
    }

    return {
      locale,
      hreflang: localeConfig.locale,
      direction: localeConfig.direction,
      url: buildCanonicalLocaleUrl(config, baseUrl, locale, translation.permalink),
    }
  })

  return {
    translationKey,
    alternates,
    xDefault: {
      hreflang: "x-default",
      url: buildXDefaultUrl(config, baseUrl),
    },
  }
}

function buildTranslationMetadata(
  config: MultilingualConfiguration,
  entry: MultilingualFixtureEntry,
  options: TranslationFrontmatterValidationOptions,
): TranslationMetadata {
  const locale = requiredLocaleId(entry.locale, entry.fileName)
  const sourceLocale = requiredLocaleId(entry.sourceLocale, entry.fileName)
  const localizedPath = buildLocalizedPath(config, locale, entry.permalink)

  return {
    translationKey: entry.translationKey,
    locale,
    sourceLocale,
    sourcePath: entry.sourcePath,
    sourceHash: entry.sourceHash,
    translationStatus: entry.translationStatus,
    permalink: entry.permalink,
    localizedPath,
    canonicalUrl: absoluteUrl(options.baseUrl, localizedPath),
    direction: getLocaleDirection(config, locale),
  }
}

function validateTranslationGroup(
  config: MultilingualConfiguration,
  translationKey: string,
  entries: readonly MultilingualFixtureEntry[],
  options: TranslationFrontmatterValidationOptions,
): ValidatedTranslationGroup {
  const locales = new Set<string>()
  const sourceEntries = entries.filter((entry) => entry.translationStatus === "source")
  const nonExternalEntries = entries.filter((entry) => entry.translationStatus !== "external-only")
  const permalinks = new Set<string>()
  const validatedEntries: ValidatedTranslationEntry[] = []

  for (const entry of entries) {
    const locale = requiredLocaleId(entry.locale, entry.fileName)
    const sourceLocale = requiredLocaleId(entry.sourceLocale, entry.fileName)

    if (locales.has(locale)) {
      throw new MultilingualContractError(
        "duplicate-locale",
        `duplicate locale for translationKey ${translationKey}: ${locale}`,
      )
    }

    locales.add(locale)
    permalinks.add(entry.permalink)
    validatedEntries.push({
      ...entry,
      locale,
      sourceLocale,
      metadata: buildTranslationMetadata(config, entry, options),
    })
  }

  if (sourceEntries.length > 1) {
    throw new MultilingualContractError(
      "duplicate-source",
      `duplicate source for translationKey ${translationKey}`,
    )
  }

  const source = validatedEntries.find((entry) => entry.translationStatus === "source")

  if (!source && nonExternalEntries.length > 0) {
    throw new MultilingualContractError(
      "missing-source",
      `missing source for translationKey ${translationKey}`,
    )
  }

  if (source && source.locale !== config.sourceLocale) {
    throw new MultilingualContractError(
      "missing-source",
      `missing source for translationKey ${translationKey}`,
    )
  }

  if (permalinks.size > 1 && !config.localizedSlug) {
    throw new MultilingualContractError(
      "mismatched-permalink",
      `mismatched permalink for translationKey ${translationKey}`,
    )
  }

  return {
    translationKey,
    source,
    entries: validatedEntries,
  }
}

export function validateTranslationFrontmatterGroups(
  config: MultilingualConfiguration,
  entries: readonly unknown[],
  options: TranslationFrontmatterValidationOptions,
): readonly ValidatedTranslationGroup[] {
  const typedEntries = entries.map((entry) => assertFixtureEntry(entry))
  const entriesByTranslationKey = new Map<string, MultilingualFixtureEntry[]>()

  for (const entry of typedEntries) {
    const existingEntries = entriesByTranslationKey.get(entry.translationKey)

    if (existingEntries) {
      existingEntries.push(entry)
    } else {
      entriesByTranslationKey.set(entry.translationKey, [entry])
    }
  }

  return [...entriesByTranslationKey.entries()]
    .sort(([leftKey], [rightKey]) => leftKey.localeCompare(rightKey))
    .map(([translationKey, groupEntries]) =>
      validateTranslationGroup(config, translationKey, groupEntries, options),
    )
}

export function attachTranslationMetadata(
  fileData: Record<string, unknown>,
  metadata: TranslationMetadata,
): void {
  fileData.multilingual = metadata
}

export function isTranslationMetadata(value: unknown): value is TranslationMetadata {
  if (!isRecord(value)) {
    return false
  }

  return (
    typeof value.translationKey === "string" &&
    typeof value.locale === "string" &&
    typeof value.sourceLocale === "string" &&
    typeof value.permalink === "string" &&
    typeof value.localizedPath === "string" &&
    typeof value.canonicalUrl === "string" &&
    typeof value.direction === "string"
  )
}

function frontmatterRecordToEntry(
  frontmatter: Record<string, unknown>,
  fileName: string,
): MultilingualFixtureEntry {
  return {
    fileName,
    title: requiredString(frontmatter, "title", fileName),
    translationKey: requiredString(frontmatter, "translationKey", fileName),
    locale: requiredString(frontmatter, "locale", fileName),
    sourceLocale: requiredString(frontmatter, "sourceLocale", fileName),
    sourcePath: requiredString(frontmatter, "sourcePath", fileName),
    sourceHash: requiredString(frontmatter, "sourceHash", fileName),
    translationStatus: requiredTranslationStatus(frontmatter, fileName),
    permalink: requiredString(frontmatter, "permalink", fileName),
  }
}

export function applyMultilingualPageData(
  config: MultilingualConfiguration | undefined,
  fileData: Record<string, unknown>,
  options: TranslationFrontmatterValidationOptions,
): AppliedMultilingualPageData | undefined {
  if (!config?.enabled || !isRecord(fileData.frontmatter)) {
    return undefined
  }

  if (fileData.frontmatter.translationKey === undefined) {
    return undefined
  }

  const fileName = typeof fileData.relativePath === "string" ? fileData.relativePath : "file"
  const entry = frontmatterRecordToEntry(fileData.frontmatter, fileName)
  const metadata = buildTranslationMetadata(config, entry, options)
  const slug = stripEdgeSlashes(metadata.localizedPath)

  attachTranslationMetadata(fileData, metadata)
  fileData.slug = slug

  if (Array.isArray(fileData.aliases)) {
    fileData.aliases = fileData.aliases.filter((alias) => alias !== metadata.permalink)
  }

  return {
    slug,
    legacyRedirectSlug: metadata.permalink,
    metadata,
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
