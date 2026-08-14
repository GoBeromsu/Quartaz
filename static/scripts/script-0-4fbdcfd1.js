
const preferredLocaleStorageKey = "preferred-locale"
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
