import type { GlobalConfiguration } from "../../quartz/cfg"
import type { QuartzPluginData } from "../../quartz/plugins/vfile"
import type { ValidLocale } from "../../quartz/i18n"
import {
  isTranslationMetadata,
  MultilingualContractError,
  stripLocalePrefix,
  type MultilingualLocale,
} from "../../quartz/util/multilingual"

function slugString(file: QuartzPluginData): string | undefined {
  return typeof file.slug === "string" ? file.slug : undefined
}

function localeFromSlug(
  cfg: GlobalConfiguration,
  slug: string | undefined,
): MultilingualLocale | undefined {
  const multilingual = cfg.multilingual
  if (!multilingual?.enabled || !slug) {
    return undefined
  }

  try {
    return stripLocalePrefix(multilingual, slug).locale
  } catch (error) {
    if (error instanceof MultilingualContractError) {
      return undefined
    }

    throw error
  }
}

export function currentLocaleId(
  cfg: GlobalConfiguration,
  fileData: QuartzPluginData,
): MultilingualLocale | undefined {
  if (isTranslationMetadata(fileData.multilingual)) {
    return fileData.multilingual.locale
  }

  return localeFromSlug(cfg, slugString(fileData))
}

export function currentLocaleTag(
  cfg: GlobalConfiguration,
  fileData: QuartzPluginData,
): ValidLocale {
  const multilingual = cfg.multilingual
  const locale = currentLocaleId(cfg, fileData)
  const localeConfig = multilingual?.locales.find((entry) => entry.id === locale)

  return localeConfig?.locale ?? cfg.locale
}

export function pageMatchesLocale(
  cfg: GlobalConfiguration,
  fileData: QuartzPluginData,
  locale: MultilingualLocale | undefined,
): boolean {
  if (!cfg.multilingual?.enabled || !locale) {
    return true
  }

  if (isTranslationMetadata(fileData.multilingual)) {
    return fileData.multilingual.locale === locale
  }

  return localeFromSlug(cfg, slugString(fileData)) === locale
}

function fileLocale(
  cfg: GlobalConfiguration,
  file: QuartzPluginData,
): MultilingualLocale | undefined {
  if (isTranslationMetadata(file.multilingual)) {
    return file.multilingual.locale
  }

  return localeFromSlug(cfg, slugString(file))
}

function noteIdentity(cfg: GlobalConfiguration, file: QuartzPluginData): string {
  if (isTranslationMetadata(file.multilingual)) {
    return `key:${file.multilingual.translationKey}`
  }

  const slug = slugString(file)
  const multilingual = cfg.multilingual
  if (!multilingual || !slug) {
    return `slug:${slug ?? ""}`
  }

  try {
    const stripped = stripLocalePrefix(multilingual, slug)
    return `slug:${stripped.permalink}`
  } catch (error) {
    if (error instanceof MultilingualContractError) {
      return `slug:${slug}`
    }
    throw error
  }
}

function pickPreferredFile(
  cfg: GlobalConfiguration,
  members: readonly QuartzPluginData[],
  locale: MultilingualLocale | undefined,
): QuartzPluginData | undefined {
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
export function localeScopedFiles(
  cfg: GlobalConfiguration,
  currentFile: QuartzPluginData,
  allFiles: readonly QuartzPluginData[],
): readonly QuartzPluginData[] {
  if (!cfg.multilingual?.enabled) {
    return allFiles
  }

  const locale = currentLocaleId(cfg, currentFile)
  const groups = new Map<string, QuartzPluginData[]>()
  for (const file of allFiles) {
    const identity = noteIdentity(cfg, file)
    const members = groups.get(identity) ?? []
    members.push(file)
    groups.set(identity, members)
  }

  const preferred: QuartzPluginData[] = []
  for (const members of groups.values()) {
    const picked = pickPreferredFile(cfg, members, locale)
    if (picked) {
      preferred.push(picked)
    }
  }
  return preferred
}

export function localizeInternalHref(
  cfg: GlobalConfiguration,
  fileData: QuartzPluginData,
  href: string,
): string {
  if (!href.startsWith("/") || href.startsWith("//")) {
    return href
  }

  const locale = currentLocaleId(cfg, fileData)
  if (!locale || href === "/") {
    return href
  }

  const multilingual = cfg.multilingual
  const localeConfig = multilingual?.locales.find((entry) => entry.id === locale)
  if (!localeConfig) {
    return href
  }

  const normalizedPrefix = localeConfig.routePrefix.replace(/\/$/, "")
  if (href === normalizedPrefix || href.startsWith(`${normalizedPrefix}/`)) {
    return href
  }

  return `${normalizedPrefix}${href}`
}
