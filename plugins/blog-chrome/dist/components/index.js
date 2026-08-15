// node_modules/@quartz-community/utils/dist/lang.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/locale.ts
var PREFERRED_LOCALE_STORAGE_KEY = "preferred-locale";
function slugString(file) {
  return typeof file.slug === "string" ? file.slug : void 0;
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isTranslationMetadata(value) {
  if (!isRecord(value)) {
    return false;
  }
  return typeof value.translationKey === "string" && typeof value.locale === "string";
}
function localeFromSlug(cfg, slug2) {
  const multilingual = cfg.multilingual;
  if (!multilingual?.enabled || !slug2) {
    return void 0;
  }
  for (const locale of multilingual.locales) {
    const route = locale.routePrefix.replace(/^\/+|\/+$/g, "");
    if (slug2 === locale.id || slug2.startsWith(`${locale.id}/`)) {
      return locale.id;
    }
    if (route.length > 0 && (slug2 === route || slug2.startsWith(`${route}/`))) {
      return locale.id;
    }
  }
  return void 0;
}
function currentLocaleId(cfg, fileData) {
  if (isTranslationMetadata(fileData.multilingual)) {
    return fileData.multilingual.locale;
  }
  return localeFromSlug(cfg, slugString(fileData));
}
function localizeInternalHref(cfg, fileData, href) {
  if (!href.startsWith("/") || href.startsWith("//")) {
    return href;
  }
  const locale = currentLocaleId(cfg, fileData);
  if (!locale || href === "/") {
    return href;
  }
  const localeConfig = cfg.multilingual?.locales.find((entry) => entry.id === locale);
  if (!localeConfig) {
    return href;
  }
  const normalizedPrefix = localeConfig.routePrefix.replace(/\/$/, "");
  if (href === normalizedPrefix || href.startsWith(`${normalizedPrefix}/`)) {
    return href;
  }
  return `${normalizedPrefix}${href}`;
}
function localeEntryRedirectPayload(multilingual) {
  return {
    locales: multilingual.locales.map((locale) => ({
      id: locale.id,
      prefix: locale.routePrefix,
      tags: [locale.id, locale.locale]
    })),
    sourceLocale: multilingual.sourceLocale,
    storageKey: PREFERRED_LOCALE_STORAGE_KEY
  };
}
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/BlogLinksHeader.tsx
var BlogLinksHeader_default = ((opts) => {
  const BlogLinksHeader = ({
    cfg,
    fileData,
    displayClass
  }) => {
    const links = opts?.links ?? {};
    return /* @__PURE__ */ u2("nav", { class: classNames(displayClass, "blog-links-header"), children: Object.entries(links).map(([label, href]) => /* @__PURE__ */ u2("a", { href: localizeInternalHref(cfg, fileData, href), children: label })) });
  };
  BlogLinksHeader.css = `
.blog-links-header {
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  gap: 1.5rem;
}

.blog-links-header a {
  align-items: center;
  color: var(--blog-ink);
  display: inline-flex;
  font-weight: 400;
  min-height: 44px;
  text-decoration: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.blog-links-header a:hover {
  color: var(--blog-accent);
}

.blog-links-header a:focus-visible {
  outline: 2px solid var(--blog-accent);
  outline-offset: 2px;
}

@media (max-width: 800px) {
  .blog-links-header {
    gap: 0.65rem;
  }

  .blog-links-header a {
    font-size: 12px;
    height: 40px;
    min-height: 40px;
  }
}

@media (max-width: 430px) {
  .blog-links-header {
    gap: 0.5rem;
  }
}
`;
  return BlogLinksHeader;
});

// node_modules/@quartz-community/utils/dist/path.js
function simplifySlug(fp) {
  const res = stripSlashes(trimSuffix(fp, "index"), true);
  return res.length === 0 ? "/" : res;
}
function joinSegments(...args) {
  if (args.length === 0) {
    return "";
  }
  let joined = args.filter((segment) => segment !== "" && segment !== "/").map((segment) => stripSlashes(segment)).join("/");
  const first = args[0];
  const last = args[args.length - 1];
  if (first?.startsWith("/")) {
    joined = "/" + joined;
  }
  if (last?.endsWith("/")) {
    joined = joined + "/";
  }
  return joined;
}
function endsWith(s2, suffix) {
  return s2 === suffix || s2.endsWith("/" + suffix);
}
function trimSuffix(s2, suffix) {
  if (endsWith(s2, suffix)) {
    s2 = s2.slice(0, -suffix.length);
  }
  return s2;
}
function stripSlashes(s2, onlyStripPrefix) {
  if (s2.startsWith("/")) {
    s2 = s2.substring(1);
  }
  if (!onlyStripPrefix && s2.endsWith("/")) {
    s2 = s2.slice(0, -1);
  }
  return s2;
}
function pathToRoot(slug2) {
  let rootPath = slug2.split("/").filter((x2) => x2 !== "").slice(0, -1).map((_2) => "..").join("/");
  if (rootPath.length === 0) {
    rootPath = ".";
  }
  return rootPath;
}
function resolveRelative(current, target) {
  const res = joinSegments(pathToRoot(current), simplifySlug(target));
  return res;
}

// src/components/BlogLanguageSwitcher.tsx
function siblingTranslations(allFiles, translationKey) {
  const siblings = /* @__PURE__ */ new Map();
  for (const file of allFiles) {
    if (isTranslationMetadata(file.multilingual) && file.multilingual.translationKey === translationKey) {
      siblings.set(file.multilingual.locale, file);
    }
  }
  return siblings;
}
function localeHref(fileData, locale, sibling) {
  if (sibling?.slug && fileData.slug) {
    return resolveRelative(fileData.slug, sibling.slug);
  }
  return locale.routePrefix;
}
function switcherAriaLabel(targetLocaleId, nativeName) {
  if (targetLocaleId === "en") {
    return "Switch to English";
  }
  if (targetLocaleId === "ko") {
    return "\uD55C\uAD6D\uC5B4\uB85C \uC804\uD658";
  }
  return `Switch to ${nativeName}`;
}
var BlogLanguageSwitcher_default = (() => {
  const BlogLanguageSwitcher = ({
    cfg,
    fileData,
    allFiles,
    displayClass
  }) => {
    const multilingual = cfg.multilingual;
    if (!multilingual?.enabled) {
      return null;
    }
    const currentLocale = currentLocaleId(cfg, fileData) ?? multilingual.sourceLocale;
    const otherLocale = multilingual.locales.find((locale) => locale.id !== currentLocale);
    if (!otherLocale) {
      return null;
    }
    const siblings = isTranslationMetadata(fileData.multilingual) ? siblingTranslations(allFiles, fileData.multilingual.translationKey) : /* @__PURE__ */ new Map();
    const sibling = siblings.get(otherLocale.id);
    const href = localeHref(fileData, otherLocale, sibling);
    const nativeName = otherLocale.nativeName ?? otherLocale.label ?? otherLocale.id;
    const toggleLabel = otherLocale.id === "en" ? "English" : otherLocale.id === "ko" ? "Korean" : nativeName;
    const entryPayload = JSON.stringify(localeEntryRedirectPayload(multilingual));
    return /* @__PURE__ */ u2(
      "nav",
      {
        class: classNames(displayClass, "blog-language-switcher"),
        "data-locale-entry": entryPayload,
        children: /* @__PURE__ */ u2(
          "a",
          {
            class: "blog-language-switcher-toggle",
            href,
            lang: otherLocale.locale,
            hreflang: otherLocale.locale,
            "data-preferred-locale": otherLocale.id,
            "aria-label": switcherAriaLabel(otherLocale.id, nativeName),
            children: toggleLabel
          }
        )
      }
    );
  };
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
`;
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
`;
  return BlogLanguageSwitcher;
});

// src/components/BlogFooter.tsx
var BlogFooter_default = ((opts) => {
  const BlogFooter = ({ displayClass }) => {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const links = opts?.links ?? {};
    return /* @__PURE__ */ u2("footer", { class: displayClass ?? "", children: [
      /* @__PURE__ */ u2("p", { children: [
        "\xA9 ",
        year,
        " Beomsu Koh"
      ] }),
      /* @__PURE__ */ u2("ul", { children: Object.entries(links).map(([label, href]) => /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2("a", { href, children: label }) })) })
    ] });
  };
  BlogFooter.css = `
#quartz-body > footer {
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 4rem;
  opacity: 0.7;
  text-align: left;
}

#quartz-body > footer ul {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  list-style: none;
  margin: 0;
  margin-top: -1rem;
  padding: 0;
}

@media (max-width: 430px) {
  #quartz-body > footer ul {
    flex-wrap: wrap;
    row-gap: 0.25rem;
  }
}
`;
  return BlogFooter;
});

export { BlogFooter_default as BlogFooter, BlogLanguageSwitcher_default as BlogLanguageSwitcher, BlogLinksHeader_default as BlogLinksHeader };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map