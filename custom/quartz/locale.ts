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

export function localeScopedFiles(
  cfg: GlobalConfiguration,
  currentFile: QuartzPluginData,
  allFiles: readonly QuartzPluginData[],
): readonly QuartzPluginData[] {
  const locale = currentLocaleId(cfg, currentFile)

  return allFiles.filter((file) => pageMatchesLocale(cfg, file, locale))
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
