import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../../quartz/components/types"
import { classNames } from "../../quartz/util/lang"
import { FullSlug, resolveRelative } from "../../quartz/util/path"
import {
  isTranslationMetadata,
  localeEntryRedirectPayload,
  PREFERRED_LOCALE_STORAGE_KEY,
  type TranslationMetadata,
} from "../../quartz/util/multilingual"
import type { MultilingualLocaleConfiguration } from "../../quartz/cfg"
import { currentLocaleId } from "./locale"

function siblingTranslations(
  allFiles: QuartzComponentProps["allFiles"],
  current: TranslationMetadata,
): Map<string, QuartzComponentProps["fileData"]> {
  const siblings = new Map<string, QuartzComponentProps["fileData"]>()

  for (const file of allFiles) {
    if (
      isTranslationMetadata(file.multilingual) &&
      file.multilingual.translationKey === current.translationKey
    ) {
      siblings.set(file.multilingual.locale, file)
    }
  }

  return siblings
}

function localeHref(
  fileData: QuartzComponentProps["fileData"],
  locale: MultilingualLocaleConfiguration,
  sibling: QuartzComponentProps["fileData"] | undefined,
): string {
  if (sibling?.slug && fileData.slug) {
    return resolveRelative(fileData.slug as FullSlug, sibling.slug as FullSlug)
  }

  return locale.routePrefix
}

export function switchAriaLabel(targetLocaleId: string, targetName: string): string {
  if (targetLocaleId === "en") {
    return "Switch to English"
  }
  if (targetLocaleId === "ko") {
    return "한국어로 전환"
  }
  return `Switch to ${targetName}`
}

export default (() => {
  const BlogLanguageSwitcher: QuartzComponent = ({
    cfg,
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    const multilingual = cfg.multilingual
    if (!multilingual?.enabled) {
      return null
    }

    const currentLocale = currentLocaleId(cfg, fileData) ?? multilingual.sourceLocale
    // Only ko+en are published: a single toggle to the other language
    // replaces the dropdown. Auto-detect on / stays untouched below.
    const otherLocale = multilingual.locales.find((locale) => locale.id !== currentLocale)
    if (!otherLocale) {
      return null
    }
    const siblings = isTranslationMetadata(fileData.multilingual)
      ? siblingTranslations(allFiles, fileData.multilingual)
      : new Map<string, QuartzComponentProps["fileData"]>()
    const href = localeHref(fileData, otherLocale, siblings.get(otherLocale.id))
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
          aria-label={switchAriaLabel(otherLocale.id, otherLocale.nativeName)}
        >
          {otherLocale.id === "en" ? "English" : otherLocale.id === "ko" ? "Korean" : otherLocale.nativeName}
        </a>
      </nav>
    )
  }

  BlogLanguageSwitcher.css = `
.blog-language-switcher-toggle {
  align-items: center;
  color: var(--blog-ink);
  display: inline-flex;
  font-size: inherit;
  font-weight: 400;
  height: 44px;
  justify-content: center;
  line-height: 1;
  min-height: 44px;
  padding: 0;
  text-decoration: none;
  white-space: nowrap;
}

.blog-language-switcher-toggle:hover {
  color: var(--blog-accent);
}

.blog-language-switcher-toggle:focus-visible {
  outline: 2px solid var(--blog-accent);
  outline-offset: 2px;
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
