import type { GraphLandingPageOptions, GraphLandingProfileCopy } from "./pageType"

export interface ProfileBlock {
  lang: string
  copy: GraphLandingProfileCopy
  hidden: boolean
}

/**
 * One profile block per hero language so the hero language swap can show the
 * matching sections. A language without its own translation reuses the
 * default sections; the footer is inherited when a translation omits it.
 */
export function profileBlocks(
  profile: GraphLandingPageOptions["profile"],
  defaultLang: string,
  heroLangs: ReadonlyArray<string>,
): ProfileBlock[] {
  if (!profile) return []
  const { translations, ...base } = profile
  if (!base.sections || base.sections.length === 0) return []
  const langs = [defaultLang]
  for (const lang of [...heroLangs, ...Object.keys(translations ?? {})]) {
    if (!langs.includes(lang)) langs.push(lang)
  }
  return langs.map((lang) => {
    const translated = lang === defaultLang ? undefined : translations?.[lang]
    return {
      lang,
      copy: translated ? { ...base, ...translated } : base,
      hidden: lang !== defaultLang,
    }
  })
}

/** Two-digit panel numeral: 0 -> "01". */
export function sectionIndexLabel(index: number): string {
  return String(index + 1).padStart(2, "0")
}

/** External links open in a new tab; site-relative and anchor links do not. */
export function isExternalHref(href: string): boolean {
  return /^(https?:)?\/\//i.test(href) || /^mailto:/i.test(href)
}
