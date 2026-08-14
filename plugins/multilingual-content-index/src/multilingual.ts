import type { GlobalConfiguration } from "@quartz-community/types"

export type MultilingualContentIndexMode = "all" | "source"

export type ContentTranslationDetails = {
  readonly translationKey: string
  readonly locale: string
  readonly sourceLocale: string
  readonly translationStatus: string
  readonly permalink: string
  readonly localizedPath: string
  readonly canonicalUrl: string
}

export type MultilingualIndexConfiguration = {
  readonly sourceLocale: string
  readonly xDefaultRoute: string
  readonly contentIndex: {
    readonly search: MultilingualContentIndexMode
    readonly rss: MultilingualContentIndexMode
    readonly sitemap: MultilingualContentIndexMode
  }
  readonly locales: readonly {
    readonly id: string
    readonly locale: string
  }[]
}

export type AlternateLink = {
  readonly hreflang: string
  readonly url: string
}

export type TranslationIndexedContent = {
  readonly multilingual?: ContentTranslationDetails
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function optionalString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() !== "" ? value : undefined
}

function readContentIndexMode(value: unknown): MultilingualContentIndexMode | undefined {
  if (value === "all" || value === "source") {
    return value
  }

  return undefined
}

export function readTranslationDetails(
  data: Record<string, unknown>,
): ContentTranslationDetails | undefined {
  const metadata = data.multilingual
  if (!isRecord(metadata)) {
    return undefined
  }

  const translationKey = optionalString(metadata.translationKey)
  const locale = optionalString(metadata.locale)
  const sourceLocale = optionalString(metadata.sourceLocale)
  const translationStatus = optionalString(metadata.translationStatus)
  const permalink = optionalString(metadata.permalink)
  const localizedPath = optionalString(metadata.localizedPath)
  const canonicalUrl = optionalString(metadata.canonicalUrl)

  if (
    !translationKey ||
    !locale ||
    !sourceLocale ||
    !translationStatus ||
    !permalink ||
    !localizedPath ||
    !canonicalUrl
  ) {
    return undefined
  }

  return {
    translationKey,
    locale,
    sourceLocale,
    translationStatus,
    permalink,
    localizedPath,
    canonicalUrl,
  }
}

export function readMultilingualConfig(
  cfg: GlobalConfiguration,
): MultilingualIndexConfiguration | undefined {
  const config = (cfg as { readonly multilingual?: unknown }).multilingual
  if (!isRecord(config)) {
    return undefined
  }

  const sourceLocale = optionalString(config.sourceLocale)
  const xDefaultRoute = optionalString(config.xDefaultRoute) ?? "/"
  const contentIndex = config.contentIndex
  const locales = config.locales
  if (!sourceLocale || !isRecord(contentIndex) || !Array.isArray(locales)) {
    return undefined
  }

  const search = readContentIndexMode(contentIndex.search)
  const rss = readContentIndexMode(contentIndex.rss)
  const sitemap = readContentIndexMode(contentIndex.sitemap)
  if (!search || !rss || !sitemap) {
    return undefined
  }

  return {
    sourceLocale,
    xDefaultRoute,
    contentIndex: { search, rss, sitemap },
    locales: locales.flatMap((locale) => {
      if (!isRecord(locale)) {
        return []
      }

      const id = optionalString(locale.id)
      const bcp47Locale = optionalString(locale.locale)
      return id && bcp47Locale ? [{ id, locale: bcp47Locale }] : []
    }),
  }
}

export function orderedAlternateLinks(
  config: MultilingualIndexConfiguration,
  content: Iterable<TranslationIndexedContent>,
  translationKey: string,
): readonly AlternateLink[] {
  const urlByLocale = new Map<string, string>()
  for (const item of content) {
    const metadata = item.multilingual
    if (metadata?.translationKey === translationKey) {
      urlByLocale.set(metadata.locale, metadata.canonicalUrl)
    }
  }

  return config.locales.flatMap((locale) => {
    const url = urlByLocale.get(locale.id)
    return url ? [{ hreflang: locale.locale, url }] : []
  })
}

export function sourceLocaleEntries<T extends TranslationIndexedContent>(
  config: MultilingualIndexConfiguration,
  entries: Iterable<readonly [string, T]>,
): [string, T][] {
  const sourceEntries: [string, T][] = []
  for (const [slug, content] of entries) {
    const metadata = content.multilingual
    if (metadata?.locale === config.sourceLocale && metadata.translationStatus === "source") {
      sourceEntries.push([slug, content])
    }
  }

  return sourceEntries
}
