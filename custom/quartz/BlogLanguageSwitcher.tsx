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

function switcherAriaLabel(localeId: string): string {
  return localeId === "en" ? "Language" : "언어 선택"
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
    const currentLocaleConfig =
      multilingual.locales.find((locale) => locale.id === currentLocale) ?? multilingual.locales[0]
    const siblings = isTranslationMetadata(fileData.multilingual)
      ? siblingTranslations(allFiles, fileData.multilingual)
      : new Map<string, QuartzComponentProps["fileData"]>()
    const entryPayload = JSON.stringify(localeEntryRedirectPayload(multilingual))

    return (
      <nav
        class={classNames(displayClass, "blog-language-switcher")}
        aria-label={switcherAriaLabel(currentLocale)}
        data-locale-entry={entryPayload}
      >
        <details>
          <summary>
            <span class="blog-language-switcher-current">{currentLocaleConfig.nativeName}</span>
          </summary>
          <ul>
            {multilingual.locales.map((locale) => {
              const sibling = siblings.get(locale.id)
              const href = localeHref(fileData, locale, sibling)

              return (
                <li>
                  <a
                    href={href}
                    lang={locale.locale}
                    hreflang={locale.locale}
                    data-preferred-locale={locale.id}
                    aria-current={locale.id === currentLocale ? "page" : undefined}
                  >
                    {locale.nativeName}
                  </a>
                </li>
              )
            })}
          </ul>
        </details>
      </nav>
    )
  }

  BlogLanguageSwitcher.css = `
.blog-language-switcher {
  position: relative;
}

.blog-language-switcher details {
  position: relative;
}

.blog-language-switcher summary {
  align-items: center;
  color: var(--blog-ink);
  cursor: pointer;
  display: inline-flex;
  font-size: 0.9rem;
  list-style: none;
  min-height: 44px;
  min-width: 44px;
  padding: 0 0.35rem;
}

.blog-language-switcher summary::-webkit-details-marker {
  display: none;
}

.blog-language-switcher-current {
  line-height: 1.2;
}

.blog-language-switcher ul {
  background: var(--light);
  border: 1px solid var(--blog-border);
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  min-width: 100%;
  padding: 0.25rem 0;
  position: absolute;
  right: 0;
  z-index: 5;
}

.blog-language-switcher a {
  align-items: center;
  color: var(--blog-muted);
  display: inline-flex;
  font-size: 0.9rem;
  min-height: 44px;
  min-width: 44px;
  padding: 0 0.85rem;
  text-decoration: none;
  white-space: nowrap;
}

.blog-language-switcher a[aria-current="page"] {
  color: var(--blog-ink);
  font-weight: 600;
}

.blog-language-switcher a:hover {
  color: var(--blog-accent);
}

.blog-language-switcher summary:focus-visible,
.blog-language-switcher a:focus-visible {
  outline: 2px solid var(--blog-accent);
  outline-offset: 2px;
}

@media (max-width: 640px) {
  .blog-language-switcher {
    flex-basis: 100%;
    order: 5;
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
