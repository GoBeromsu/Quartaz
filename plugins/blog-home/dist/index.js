// node_modules/@quartz-community/utils/dist/lang.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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

// src/dates.ts
function getDate(data) {
  if (!data.defaultDateType) {
    throw new Error(
      `Field 'defaultDateType' was not set. Ensure the CreatedModifiedDate plugin is configured with a 'defaultDateType' option. See https://quartz.jzhao.xyz/plugins/CreatedModifiedDate for more details.`
    );
  }
  return data.dates?.[data.defaultDateType];
}
function formatDate(d2, locale) {
  return d2.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
}
function byDateAndAlphabetical() {
  return (left, right) => {
    if (left.dates && right.dates) {
      return getDate(right).getTime() - getDate(left).getTime();
    }
    if (left.dates && !right.dates) {
      return -1;
    }
    if (!left.dates && right.dates) {
      return 1;
    }
    const leftTitle = left.frontmatter?.title?.toLowerCase() ?? "";
    const rightTitle = right.frontmatter?.title?.toLowerCase() ?? "";
    return leftTitle.localeCompare(rightTitle);
  };
}

// src/locale.ts
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
function isLocaleHomeSlug(slug2) {
  if (typeof slug2 !== "string" || slug2.length === 0) {
    return false;
  }
  return slug2 === "index" || slug2.endsWith("/index");
}
var UTILITY_TRANSLATION_KEYS = /* @__PURE__ */ new Set(["home", "graph", "writing"]);
function isLocaleHomeFile(file) {
  if (isLocaleHomeSlug(slugString(file))) {
    return true;
  }
  const frontmatterKey = file.frontmatter?.translationKey;
  if (typeof frontmatterKey === "string" && UTILITY_TRANSLATION_KEYS.has(frontmatterKey)) {
    return true;
  }
  return isTranslationMetadata(file.multilingual) && UTILITY_TRANSLATION_KEYS.has(file.multilingual.translationKey);
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
function currentLocaleTag(cfg, fileData) {
  const multilingual = cfg.multilingual;
  const locale = currentLocaleId(cfg, fileData);
  const localeConfig = multilingual?.locales.find((entry) => entry.id === locale);
  return localeConfig?.locale ?? cfg.locale;
}
function fileLocale(cfg, file) {
  if (isTranslationMetadata(file.multilingual)) {
    return file.multilingual.locale;
  }
  return localeFromSlug(cfg, slugString(file));
}
function notePermalink(cfg, slug2) {
  const multilingual = cfg.multilingual;
  if (!multilingual) {
    return slug2;
  }
  for (const locale of multilingual.locales) {
    const route = locale.routePrefix.replace(/^\/+|\/+$/g, "");
    if (slug2 === locale.id || slug2 === route) {
      return "";
    }
    if (slug2.startsWith(`${locale.id}/`)) {
      return slug2.slice(locale.id.length + 1);
    }
    if (route.length > 0 && slug2.startsWith(`${route}/`)) {
      return slug2.slice(route.length + 1);
    }
  }
  return slug2;
}
function noteIdentity(cfg, file) {
  if (isTranslationMetadata(file.multilingual)) {
    return `key:${file.multilingual.translationKey}`;
  }
  const slug2 = slugString(file);
  if (!slug2) {
    return "slug:";
  }
  return `slug:${notePermalink(cfg, slug2)}`;
}
function pickPreferredFile(cfg, members, locale) {
  const sourceLocale = cfg.multilingual?.sourceLocale;
  return members.find((file) => fileLocale(cfg, file) === locale) ?? members.find((file) => fileLocale(cfg, file) === sourceLocale) ?? members.find((file) => fileLocale(cfg, file) === void 0) ?? members[0];
}
function localeScopedFiles(cfg, currentFile, allFiles) {
  if (!cfg.multilingual?.enabled) {
    return allFiles;
  }
  const locale = currentLocaleId(cfg, currentFile);
  const groups = /* @__PURE__ */ new Map();
  for (const file of allFiles) {
    const identity = noteIdentity(cfg, file);
    const members = groups.get(identity) ?? [];
    members.push(file);
    groups.set(identity, members);
  }
  const preferred = [];
  for (const members of groups.values()) {
    const picked = pickPreferredFile(cfg, members, locale);
    if (picked) {
      preferred.push(picked);
    }
  }
  return preferred;
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

// src/components/BlogLatest.tsx
var defaultOptions = () => ({
  title: "Latest",
  limit: 3
});
var BlogLatest_default = ((userOpts) => {
  const BlogLatest = ({
    allFiles,
    fileData,
    displayClass,
    cfg
  }) => {
    const opts = { ...defaultOptions(), ...userOpts };
    const pages = localeScopedFiles(cfg, fileData, allFiles).filter((file) => Boolean(file.filePath) && !isLocaleHomeFile(file)).sort(byDateAndAlphabetical()).slice(0, opts.limit);
    if (pages.length === 0) {
      return null;
    }
    return /* @__PURE__ */ u2("section", { class: classNames(displayClass, "blog-latest"), children: [
      /* @__PURE__ */ u2("h3", { children: opts.title }),
      /* @__PURE__ */ u2("ul", { class: "blog-article-list", children: pages.map((page) => {
        const date = page.dates ? getDate(page) : void 0;
        const dateText = date ? formatDate(date, currentLocaleTag(cfg, fileData)) : "";
        return /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2(
          "a",
          {
            href: resolveRelative(fileData.slug, page.slug),
            class: "internal",
            children: [
              /* @__PURE__ */ u2("span", { class: "date", children: dateText }),
              /* @__PURE__ */ u2("span", { class: "title", children: page.frontmatter?.title ?? "Untitled" })
            ]
          }
        ) });
      }) })
    ] });
  };
  BlogLatest.css = `
.blog-latest {
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 2rem;
}

.blog-latest h3 {
  color: var(--blog-ink);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0;
  margin-bottom: 0.5rem;
}
`;
  return BlogLatest;
});

// src/components/BlogArticleList.tsx
var defaultOptions2 = () => ({
  limit: 10,
  filter: () => true,
  sort: byDateAndAlphabetical()
});
var BlogArticleList_default = ((userOpts) => {
  const BlogArticleList = ({
    allFiles,
    fileData,
    displayClass,
    cfg
  }) => {
    const opts = { ...defaultOptions2(), ...userOpts };
    const pages = localeScopedFiles(cfg, fileData, allFiles).filter((file) => Boolean(file.filePath) && !isLocaleHomeFile(file) && opts.filter(file)).sort(opts.sort);
    const limitedPages = opts.limit > 0 ? pages.slice(0, opts.limit) : pages;
    if (limitedPages.length === 0) {
      return null;
    }
    return /* @__PURE__ */ u2("section", { class: classNames(displayClass, "blog-article-list-section"), children: [
      opts.title && /* @__PURE__ */ u2("h3", { children: opts.title }),
      /* @__PURE__ */ u2("ul", { class: "blog-article-list", children: limitedPages.map((page) => {
        const date = page.dates ? getDate(page) : void 0;
        const dateText = date ? formatDate(date, currentLocaleTag(cfg, fileData)) : "";
        return /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2(
          "a",
          {
            href: resolveRelative(fileData.slug, page.slug),
            class: "internal",
            children: [
              /* @__PURE__ */ u2("span", { class: "date", children: dateText }),
              /* @__PURE__ */ u2("span", { class: "title", children: page.frontmatter?.title ?? "Untitled" })
            ]
          }
        ) });
      }) })
    ] });
  };
  BlogArticleList.css = `
.blog-article-list-section {
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 2rem;
}

.blog-article-list-section h3 {
  color: var(--blog-ink);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0;
  margin-bottom: 0.5rem;
}

.blog-article-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.blog-article-list li {
  padding: 0;
}

.blog-article-list a.internal {
  background-color: transparent;
  color: var(--blog-ink);
  font-weight: 400;
  align-items: baseline;
  display: flex;
  gap: 0.5em;
  padding: 0.25em 0;
  text-decoration: none;
  touch-action: manipulation;
}

.blog-article-list .date {
  color: var(--blog-faint);
  flex: 0 0 auto;
  font-variant-numeric: tabular-nums;
  min-width: 11em;
}

.blog-article-list .title {
  min-width: 0;
}

.blog-article-list a:hover {
  color: var(--blog-ink);
  text-decoration: none;
}

.blog-article-list a:hover .title {
  color: var(--blog-accent);
  text-decoration: underline;
  text-underline-offset: 0.16em;
}

.blog-article-list a:focus-visible {
  outline: 2px solid var(--blog-accent);
  outline-offset: 2px;
}

@media (max-width: 800px) {
  .blog-article-list li + li {
    border-top: 1px solid var(--blog-border);
  }

  .blog-article-list a.internal {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.2rem;
    min-height: 44px;
    padding: 0.85rem 0;
  }

  .blog-article-list .date {
    font-size: 0.8rem;
    line-height: 1.3;
    min-width: 0;
    order: 2;
  }

  .blog-article-list .title {
    font-size: 1rem;
    line-height: 1.4;
    order: 1;
    overflow-wrap: anywhere;
    word-break: keep-all;
  }
}
`;
  return BlogArticleList;
});

// src/components/BlogAllTags.tsx
var defaultOptions3 = {
  title: "Topics"
};
var BlogAllTags_default = ((userOpts) => {
  const opts = { ...defaultOptions3, ...userOpts };
  const BlogAllTags = ({
    fileData,
    allFiles,
    cfg,
    displayClass
  }) => {
    const allTags = [
      ...new Set(
        localeScopedFiles(cfg, fileData, allFiles).flatMap((file) => {
          const tags = file.frontmatter?.tags;
          return Array.isArray(tags) ? tags.map((tag) => String(tag)) : [];
        })
      )
    ].sort((left, right) => left.localeCompare(right));
    if (allTags.length === 0) {
      return null;
    }
    return /* @__PURE__ */ u2("section", { class: classNames(displayClass, "blog-all-tags"), children: [
      /* @__PURE__ */ u2("h3", { children: opts.title }),
      /* @__PURE__ */ u2("div", { class: "blog-all-tags-list", children: allTags.map((tag) => /* @__PURE__ */ u2(
        "a",
        {
          href: resolveRelative(fileData.slug, `tags/${tag}`),
          class: "internal tag-link",
          children: [
            "#",
            tag
          ]
        }
      )) })
    ] });
  };
  BlogAllTags.css = `
.blog-all-tags {
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 2rem;
}

.blog-all-tags h3 {
  color: var(--blog-ink);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0;
  margin-bottom: 0.5rem;
}

.blog-all-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.blog-all-tags a.internal.tag-link {
  background-color: transparent;
  color: var(--blog-muted);
  font-weight: 400;
  padding: 0;
  text-decoration: none;
}

.blog-all-tags a.internal.tag-link::before {
  content: none;
}

.blog-all-tags a.internal.tag-link:hover {
  color: var(--blog-accent);
  text-decoration: underline;
  text-underline-offset: 0.16em;
}
`;
  return BlogAllTags;
});

// src/components/BlogStyles.tsx
var BlogStyles_default = (() => {
  const BlogStyles = () => null;
  BlogStyles.css = `
:root {
  --blog-accent: #a52142;
  --blog-ink: #0f0f0f;
  --blog-muted: #737373;
  --blog-faint: #b5b5b5;
  --blog-border: #e6e6e6;
  --blog-content-width: 40rem;
  --blog-content-inline-offset: 2rem;
  --blog-font-stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
  --blog-mono-stack: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
  --blog-list-indent: 1.8em;
  --blog-list-spacing: 0.075em;
  --blog-paragraph-spacing: 1.75rem;
  --blog-surface: var(--background-primary);
  --blog-text: var(--blog-ink);
  --blog-wide-width: min(88vw, 50rem);
  --blog-link-color: var(--blog-accent);
}

:root[saved-theme="dark"] {
  --blog-ink: #d1d1d1;
  --blog-muted: #8c8c8c;
  --blog-faint: #595959;
  --blog-border: #353535;
  --blog-link-color: #c75b75;
}

body {
  color: var(--blog-ink);
  font-family: var(--blog-font-stack);
  font-size: 16px;
  line-height: 1.5;
}

code,
pre,
kbd,
samp {
  font-family: var(--blog-mono-stack);
}

article,
.markdown-preview-view {
  color: var(--blog-text);
  font-size: 16px;
  /* Korean prose needs more leading than the Minimal default. */
  line-height: 1.7;
}

article :is(p, ul, ol, blockquote, pre, table, .callout),
.markdown-preview-view :is(p, ul, ol, blockquote, pre, table, .callout) {
  margin-block: 0 var(--blog-paragraph-spacing);
}

article :is(h1, h2, h3, h4, h5, h6),
.markdown-preview-view :is(h1, h2, h3, h4, h5, h6) {
  color: var(--blog-ink);
  font-family: var(--blog-font-stack);
  letter-spacing: 0;
  line-height: 1.2;
  margin-block: 2rem 0.9rem;
}

article :is(h1),
.markdown-preview-view :is(h1) {
  font-size: 2rem;
}

article :is(h2),
.markdown-preview-view :is(h2) {
  font-size: 1.55rem;
}

article :is(h3),
.markdown-preview-view :is(h3) {
  font-size: 1.2rem;
}

article :is(a.internal, a.external),
.markdown-preview-view :is(a.internal, a.external) {
  color: var(--blog-link-color);
  text-decoration: none;
}

article :is(a.internal, a.external):hover,
.markdown-preview-view :is(a.internal, a.external):hover {
  color: var(--text-accent-hover);
  text-decoration: underline;
  text-underline-offset: 0.16em;
}

article :is(ul, ol),
.markdown-preview-view :is(ul, ol) {
  padding-inline-start: var(--blog-list-indent);
}

article li,
.markdown-preview-view li {
  margin-block: var(--blog-list-spacing);
}

article li::marker,
.markdown-preview-view li::marker {
  color: var(--blog-faint);
}

article blockquote,
.markdown-preview-view blockquote {
  border-inline-start: 1px solid var(--blog-border);
  color: var(--blog-muted);
  margin-inline: 0;
  padding-inline: 1rem 0;
}

article :is(img, video, iframe),
.markdown-preview-view :is(img, video, iframe) {
  display: block;
  height: auto;
  margin-inline: auto;
  max-width: var(--blog-wide-width);
}

article :is(pre, table, .block-language-mermaid),
.markdown-preview-view :is(pre, table, .block-language-mermaid) {
  max-width: var(--blog-wide-width);
}

article :is(pre, table),
.markdown-preview-view :is(pre, table) {
  overflow-x: auto;
}

article :is(p:has(.katex), li:has(.katex), .table-container),
.markdown-preview-view :is(p:has(.katex), li:has(.katex), .table-container) {
  max-width: 100%;
  overflow-x: auto;
}

article .table-container > table,
.markdown-preview-view .table-container > table {
  max-width: none;
  width: max-content;
}

article .block-language-mermaid,
.markdown-preview-view .block-language-mermaid {
  overflow-x: auto;
}

.block-language-mermaid .mermaid svg {
  height: auto;
  max-width: none;
  width: auto;
}

.callout {
  --callout-color: var(--color);
  background-color: color-mix(in srgb, var(--callout-color) 6%, transparent);
  border: 1px solid var(--callout-color);
  box-shadow: none;
}

.callout-title {
  padding-block: 0.85rem;
}

.callout-content {
  color: var(--blog-text);
}

[saved-theme="dark"] article img {
  background-color: white;
  border-radius: 8px;
  padding: 0.5rem;
}

.page[data-frame="full-width"] > #quartz-body .center.full-width,
.page[data-frame="full-width"] > #quartz-body > footer {
  box-sizing: border-box;
  margin-inline: auto;
  max-width: var(--blog-content-width);
  min-width: 0;
  width: min(calc(100% - var(--blog-content-inline-offset)), var(--blog-content-width));
}

.page[data-frame="full-width"] .page-header {
  margin-bottom: 2rem;
  padding: 2rem 0;
}

/* Floating TOC: fixed beside the 40rem column, only when it fits. */
.page[data-frame="full-width"] > #quartz-body .sidebar.right {
  display: none;
}

@media (min-width: 1280px) {
  .page[data-frame="full-width"] > #quartz-body .sidebar.right {
    display: block;
    left: calc(50% + (var(--blog-content-width) / 2) + 2.5rem);
    max-height: calc(100vh - 12rem);
    overflow-y: auto;
    position: fixed;
    top: 8.5rem;
    width: 15rem;
  }

  .page[data-frame="full-width"] .sidebar.right .toc {
    font-size: 0.85rem;
  }
}

.page-header .page-title {
  color: var(--blog-ink);
}

.page-header .page-title a {
  color: var(--blog-ink);
  text-decoration: none;
}

.page-header .page-title a:hover {
  color: var(--blog-accent);
}

body[data-slug="index"] .page[data-frame="full-width"] .page-header,
body[data-slug$="/index"] .page[data-frame="full-width"] .page-header {
  margin-bottom: 0;
  padding-bottom: 0;
}

body[data-slug="index"] .page[data-frame="full-width"] .page-header .popover-hint,
body[data-slug$="/index"] .page[data-frame="full-width"] .page-header .popover-hint {
  display: none;
}

body[data-slug="index"] .page[data-frame="full-width"] .center.full-width > hr,
body[data-slug$="/index"] .page[data-frame="full-width"] .center.full-width > hr {
  display: none;
}

body[data-slug="index"] .page-listing,
body[data-slug$="/index"] .page-listing {
  display: none;
}

@media (max-width: 800px) {
  .page[data-frame="full-width"] .page-header {
    margin-bottom: 1.25rem;
    padding: max(8px, env(safe-area-inset-top)) 0 8px;
  }

  .page[data-frame="full-width"] header {
    align-items: center;
    gap: 0;
    margin: 0;
    min-width: 0;
    width: 100%;
  }

  .page-header .flex-component {
    align-items: center;
    flex-wrap: nowrap !important;
    gap: 0.5rem !important;
    min-width: 0;
    width: 100%;
  }

  .page-header .flex-component > div {
    min-width: 0;
  }

  .page-header .flex-component > div:has(> .spacer) {
    flex-basis: 0 !important;
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    min-width: 8px;
  }

  .page-header .page-title {
    align-items: center;
    display: flex;
    flex: 0 1 auto;
    font-size: 14px;
    font-weight: 600;
    height: 40px;
    line-height: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .page-header .page-title a {
    align-items: center;
    display: inline-flex;
    height: 40px;
  }

  .page-header .flex-component > div:has(> .search),
  .page-header .flex-component > div:has(> .darkmode) {
    align-items: center;
    display: flex;
    height: 40px;
  }

  .page-header .search {
    flex-grow: 0 !important;
    max-width: none;
    min-width: 40px;
  }

  .page-header .search-button {
    border: 0;
    height: 40px;
    justify-content: center;
    min-height: 40px;
    min-width: 40px;
    padding: 0;
    width: 40px;
  }

  .page-header .search-button > p {
    display: none;
  }

  .page-header .search-button svg {
    margin: 0;
  }

  .page-header .darkmode {
    align-items: center;
    display: inline-flex;
    height: 40px;
    justify-content: center;
    min-height: 40px;
    min-width: 40px;
    overflow: hidden;
    position: relative;
    width: 40px;
  }

  .page-header .darkmode svg {
    height: 18px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 18px;
  }

  .page li.section-li > .section {
    align-items: flex-start;
    border-top: 1px solid var(--blog-border);
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    grid-template-columns: none;
    min-height: 44px;
    padding: 0.85rem 0;
  }

  .page li.section-li:first-child > .section {
    border-top: 0;
  }

  .page li.section-li > .section > .meta {
    font-size: 0.8rem;
    margin: 0;
    order: 2;
  }

  .page li.section-li > .section > .desc {
    min-width: 0;
    order: 1;
    width: 100%;
  }

  .page li.section-li > .section > .desc > h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
  }

  .page li.section-li > .section > .desc > h3 > a {
    overflow-wrap: anywhere;
    word-break: keep-all;
  }

  .page li.section-li > .section > .tags {
    display: none;
  }
}

@media (max-width: 430px) {
  :root {
    --blog-content-inline-offset: 1.5rem;
  }
}
`;
  return BlogStyles;
});

export { BlogAllTags_default as BlogAllTags, BlogArticleList_default as BlogArticleList, BlogLatest_default as BlogLatest, BlogStyles_default as BlogStyles };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map