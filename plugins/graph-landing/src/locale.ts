// Locale resolution without any dependency on a multilingual plugin.
// Every input is optional; a plain single-language Quartz site resolves to
// the site's configured language (or "en") with root-relative nav links.

export interface LocaleEntry {
  id: string
  nativeName?: string
}

export interface LocaleInputs {
  /** `fileData.multilingual.locale`, if some plugin sets it. */
  frontmatterLocale?: string
  /** Page slug, e.g. "ko/graph" or "index". */
  slug: string
  /** Locale ids a multilingual plugin configured, if any. */
  locales: readonly LocaleEntry[]
  /** `cfg.multilingual.sourceLocale`, if any. */
  sourceLocale?: string
  /** Plugin option `defaultLocale`. */
  defaultLocale?: string
  /** Quartz `configuration.locale`, e.g. "ko-KR". */
  siteLocale?: string
}

export interface ResolvedLocale {
  localeId: string
  sourceLocale: string
  /** True when a locale prefix is part of the URL space (/ko/, /en/). */
  prefixed: boolean
}

export function resolveLocale(input: LocaleInputs): ResolvedLocale {
  const ids = input.locales.map((locale) => locale.id)
  const head = input.slug.split("/")[0] ?? ""
  const slugLocale = ids.includes(head) ? head : undefined
  const siteLanguage = input.siteLocale?.split("-")[0]
  const localeId =
    input.frontmatterLocale ?? slugLocale ?? input.defaultLocale ?? siteLanguage ?? "en"
  const sourceLocale = input.sourceLocale ?? input.defaultLocale ?? localeId
  return {
    localeId,
    sourceLocale,
    prefixed: slugLocale !== undefined || Boolean(input.frontmatterLocale && ids.length > 0),
  }
}
