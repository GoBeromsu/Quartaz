export const PREFERRED_LOCALE_STORAGE_KEY = "preferred-locale"

export interface MultilingualLocaleConfig {
  readonly id: string
  readonly locale: string
  readonly routePrefix: string
  readonly nativeName?: string
  readonly label?: string
  readonly direction?: string
}

export interface MultilingualConfig {
  readonly enabled: boolean
  readonly sourceLocale: string
  readonly locales: readonly MultilingualLocaleConfig[]
}

export interface GlobalConfig {
  readonly locale: string
  readonly multilingual?: MultilingualConfig
}

export interface TranslationMetadata {
  readonly translationKey: string
  readonly locale: string
}

export interface LocaleFileData {
  readonly slug?: string
  readonly frontmatter?: Record<string, unknown>
  readonly multilingual?: unknown
}

export interface LocaleEntryChoice {
  readonly id: string
  readonly prefix: string
  readonly tags: readonly string[]
}

export interface LocaleEntryRedirectPayload {
  readonly locales: readonly LocaleEntryChoice[]
  readonly sourceLocale: string
  readonly storageKey: string
}

function slugString(file: LocaleFileData): string | undefined {
  return typeof file.slug === "string" ? file.slug : undefined
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

export function isTranslationMetadata(value: unknown): value is TranslationMetadata {
  if (!isRecord(value)) {
    return false
  }

  return typeof value.translationKey === "string" && typeof value.locale === "string"
}

export function isLocaleHomeSlug(slug?: string): boolean {
  if (typeof slug !== "string" || slug.length === 0) {
    return false
  }

  return slug === "index" || slug.endsWith("/index")
}

export function isLocaleHomeFile(file: LocaleFileData): boolean {
  if (isLocaleHomeSlug(slugString(file))) {
    return true
  }

  if (file.frontmatter?.translationKey === "home") {
    return true
  }

  return isTranslationMetadata(file.multilingual) && file.multilingual.translationKey === "home"
}

function localeFromSlug(cfg: GlobalConfig, slug: string | undefined): string | undefined {
  const multilingual = cfg.multilingual
  if (!multilingual?.enabled || !slug) {
    return undefined
  }

  for (const locale of multilingual.locales) {
    const route = locale.routePrefix.replace(/^\/+|\/+$/g, "")
    if (slug === locale.id || slug.startsWith(`${locale.id}/`)) {
      return locale.id
    }

    if (route.length > 0 && (slug === route || slug.startsWith(`${route}/`))) {
      return locale.id
    }
  }

  return undefined
}

export function currentLocaleId(cfg: GlobalConfig, fileData: LocaleFileData): string | undefined {
  if (isTranslationMetadata(fileData.multilingual)) {
    return fileData.multilingual.locale
  }

  return localeFromSlug(cfg, slugString(fileData))
}

export function currentLocaleTag(cfg: GlobalConfig, fileData: LocaleFileData): string {
  const multilingual = cfg.multilingual
  const locale = currentLocaleId(cfg, fileData)
  const localeConfig = multilingual?.locales.find((entry) => entry.id === locale)

  return localeConfig?.locale ?? cfg.locale
}

export function pageMatchesLocale(
  cfg: GlobalConfig,
  fileData: LocaleFileData,
  locale: string | undefined,
): boolean {
  if (!cfg.multilingual?.enabled || !locale) {
    return true
  }

  if (isTranslationMetadata(fileData.multilingual)) {
    return fileData.multilingual.locale === locale
  }

  return localeFromSlug(cfg, slugString(fileData)) === locale
}

function fileLocale(cfg: GlobalConfig, file: LocaleFileData): string | undefined {
  if (isTranslationMetadata(file.multilingual)) {
    return file.multilingual.locale
  }

  return localeFromSlug(cfg, slugString(file))
}

function notePermalink(cfg: GlobalConfig, slug: string): string {
  const multilingual = cfg.multilingual
  if (!multilingual) {
    return slug
  }

  for (const locale of multilingual.locales) {
    const route = locale.routePrefix.replace(/^\/+|\/+$/g, "")
    if (slug === locale.id || slug === route) {
      return ""
    }
    if (slug.startsWith(`${locale.id}/`)) {
      return slug.slice(locale.id.length + 1)
    }
    if (route.length > 0 && slug.startsWith(`${route}/`)) {
      return slug.slice(route.length + 1)
    }
  }

  return slug
}

function noteIdentity(cfg: GlobalConfig, file: LocaleFileData): string {
  if (isTranslationMetadata(file.multilingual)) {
    return `key:${file.multilingual.translationKey}`
  }

  const slug = slugString(file)
  if (!slug) {
    return "slug:"
  }

  return `slug:${notePermalink(cfg, slug)}`
}

function pickPreferredFile<T extends LocaleFileData>(
  cfg: GlobalConfig,
  members: readonly T[],
  locale: string | undefined,
): T | undefined {
  const sourceLocale = cfg.multilingual?.sourceLocale
  return (
    members.find((file) => fileLocale(cfg, file) === locale) ??
    members.find((file) => fileLocale(cfg, file) === sourceLocale) ??
    members.find((file) => fileLocale(cfg, file) === undefined) ??
    members[0]
  )
}

// One row per Obsidian note: current-locale translation if it exists,
// otherwise the source-locale original. Unpaired garden notes appear
// on every locale instead of being hidden behind a missing translation.
export function localeScopedFiles<T extends LocaleFileData>(
  cfg: GlobalConfig,
  currentFile: LocaleFileData,
  allFiles: readonly T[],
): readonly T[] {
  if (!cfg.multilingual?.enabled) {
    return allFiles
  }

  const locale = currentLocaleId(cfg, currentFile)
  const groups = new Map<string, T[]>()
  for (const file of allFiles) {
    const identity = noteIdentity(cfg, file)
    const members = groups.get(identity) ?? []
    members.push(file)
    groups.set(identity, members)
  }

  const preferred: T[] = []
  for (const members of groups.values()) {
    const picked = pickPreferredFile(cfg, members, locale)
    if (picked) {
      preferred.push(picked)
    }
  }
  return preferred
}

export function localizeInternalHref(
  cfg: GlobalConfig,
  fileData: LocaleFileData,
  href: string,
): string {
  if (!href.startsWith("/") || href.startsWith("//")) {
    return href
  }

  const locale = currentLocaleId(cfg, fileData)
  if (!locale || href === "/") {
    return href
  }

  const localeConfig = cfg.multilingual?.locales.find((entry) => entry.id === locale)
  if (!localeConfig) {
    return href
  }

  const normalizedPrefix = localeConfig.routePrefix.replace(/\/$/, "")
  if (href === normalizedPrefix || href.startsWith(`${normalizedPrefix}/`)) {
    return href
  }

  return `${normalizedPrefix}${href}`
}

export function localeEntryRedirectPayload(
  multilingual: MultilingualConfig,
): LocaleEntryRedirectPayload {
  return {
    locales: multilingual.locales.map((locale) => ({
      id: locale.id,
      prefix: locale.routePrefix,
      tags: [locale.id, locale.locale],
    })),
    sourceLocale: multilingual.sourceLocale,
    storageKey: PREFERRED_LOCALE_STORAGE_KEY,
  }
}
