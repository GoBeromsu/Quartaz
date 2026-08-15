import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import { classNames } from "@quartz-community/utils/lang"
import { resolveRelative, type FullSlug } from "@quartz-community/utils/path"
import {
  currentLocaleId,
  isTranslationMetadata,
  localeEntryRedirectPayload,
  PREFERRED_LOCALE_STORAGE_KEY,
  type GlobalConfig,
  type LocaleFileData,
  type MultilingualLocaleConfig,
} from "../locale"

function siblingTranslations(
  allFiles: readonly LocaleFileData[],
  translationKey: string,
): Map<string, LocaleFileData> {
  const siblings = new Map<string, LocaleFileData>()

  for (const file of allFiles) {
    if (
      isTranslationMetadata(file.multilingual) &&
      file.multilingual.translationKey === translationKey
    ) {
      siblings.set(file.multilingual.locale, file)
    }
  }

  return siblings
}

function localeHref(
  fileData: LocaleFileData,
  locale: MultilingualLocaleConfig,
  sibling: LocaleFileData | undefined,
): string {
  if (sibling?.slug && fileData.slug) {
    return resolveRelative(fileData.slug as FullSlug, sibling.slug as FullSlug)
  }

  return locale.routePrefix
}

function switcherAriaLabel(targetLocaleId: string, nativeName: string): string {
  if (targetLocaleId === "en") {
    return "Switch to English"
  }

  if (targetLocaleId === "ko") {
    return "한국어로 전환"
  }

  return `Switch to ${nativeName}`
}

export default (() => {
  const BlogLanguageSwitcher: QuartzComponent = ({
    cfg,
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    const multilingual = (cfg as GlobalConfig).multilingual
    if (!multilingual?.enabled) {
      return null
    }

    const currentLocale =
      currentLocaleId(cfg as GlobalConfig, fileData) ?? multilingual.sourceLocale
    const otherLocale = multilingual.locales.find((locale) => locale.id !== currentLocale)
    if (!otherLocale) {
      return null
    }

    const siblings = isTranslationMetadata(fileData.multilingual)
      ? siblingTranslations(allFiles, fileData.multilingual.translationKey)
      : new Map<string, LocaleFileData>()
    const sibling = siblings.get(otherLocale.id)
    const href = localeHref(fileData, otherLocale, sibling)
    const nativeName = otherLocale.nativeName ?? otherLocale.label ?? otherLocale.id
    const toggleLabel =
      otherLocale.id === "en" ? "English" : otherLocale.id === "ko" ? "Korean" : nativeName
    const entryPayload = JSON.stringify(localeEntryRedirectPayload(multilingual))

    return (
      <nav
        class={classNames(displayClass, "blog-language-switcher")}
        data-locale-entry={entryPayload}
      >
        <a
          class="blog-language-switcher-toggle"
          href={href}
          lang={otherLocale.locale}
          hreflang={otherLocale.locale}
          data-preferred-locale={otherLocale.id}
          aria-label={switcherAriaLabel(otherLocale.id, nativeName)}
        >
          {toggleLabel}
        </a>
      </nav>
    )
  }

  BlogLanguageSwitcher.css = `
.blog-language-switcher {
  position: relative;
}

.blog-language-switcher a {
  align-items: center;
  color: var(--blog-ink);
  cursor: pointer;
  display: inline-flex;
  font-size: 0.9rem;
  min-height: 44px;
  min-width: 44px;
  padding: 0 0.35rem;
  text-decoration: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.blog-language-switcher a:hover {
  color: var(--blog-accent);
}

.blog-language-switcher a:focus-visible {
  outline: 2px solid var(--blog-accent);
  outline-offset: 2px;
}

@media (max-width: 800px) {
  .blog-language-switcher a {
    font-size: 12px;
    height: 40px;
    justify-content: center;
    min-height: 40px;
    min-width: 0;
    padding: 0;
  }
}
`

  BlogLanguageSwitcher.afterDOMLoaded = `
const preferredLocaleStorageKey = ${JSON.stringify(PREFERRED_LOCALE_STORAGE_KEY)}
let cachedLocaleEntryPayload = null

function readLocaleEntryPayload() {
  const host = document.querySelector("[data-locale-entry]")
  const raw = host?.getAttribute("data-locale-entry")
  if (raw) {
    cachedLocaleEntryPayload = JSON.parse(raw)
  }
  return cachedLocaleEntryPayload
}

function normalizeLocaleTag(value) {
  return String(value || "").toLowerCase()
}

function localeFromNavigator(locales, language) {
  const lang = normalizeLocaleTag(language)
  if (!lang) {
    return undefined
  }

  return locales.find((locale) => {
    const id = normalizeLocaleTag(locale.id)
    if (lang === id || lang.startsWith(id + "-")) {
      return true
    }

    return (locale.tags || []).some((tag) => {
      const normalizedTag = normalizeLocaleTag(tag)
      const primary = normalizedTag.split("-")[0]
      return (
        lang === normalizedTag ||
        lang.startsWith(normalizedTag + "-") ||
        (primary && (lang === primary || lang.startsWith(primary + "-")))
      )
    })
  })
}

function redirectBareRoot() {
  const path = window.location.pathname
  if (path !== "/" && path !== "/index.html") {
    readLocaleEntryPayload()
    return
  }

  const payload = readLocaleEntryPayload()
  if (!payload) {
    return
  }

  const locales = payload.locales || []
  let chosen = locales.find((locale) => locale.id === localStorage.getItem(payload.storageKey))
  if (!chosen) {
    const languages = navigator.languages ? Array.from(navigator.languages) : []
    if (!languages.length && navigator.language) {
      languages.push(navigator.language)
    }
    for (const language of languages) {
      chosen = localeFromNavigator(locales, language)
      if (chosen) {
        break
      }
    }
  }
  if (!chosen) {
    chosen = locales.find((locale) => locale.id === payload.sourceLocale) || locales[0]
  }
  if (chosen?.prefix) {
    window.location.replace(chosen.prefix)
  }
}

document.addEventListener("click", (event) => {
  const target = event.target
  if (!(target instanceof Element)) {
    return
  }

  const link = target.closest("a[data-preferred-locale]")
  if (!(link instanceof HTMLAnchorElement)) {
    return
  }

  const locale = link.dataset.preferredLocale
  if (!locale) {
    return
  }

  try {
    localStorage.setItem(preferredLocaleStorageKey, locale)
  } catch (error) {}
})

document.addEventListener("nav", redirectBareRoot)
`

  return BlogLanguageSwitcher
}) satisfies QuartzComponentConstructor<undefined>
