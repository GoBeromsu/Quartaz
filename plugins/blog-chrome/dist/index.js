// node_modules/@quartz-community/utils/dist/lang.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
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
  const BlogLinksHeader = ({ displayClass }) => {
    const links = opts?.links ?? {};
    return /* @__PURE__ */ u2("nav", { class: classNames(displayClass, "blog-links-header"), children: Object.entries(links).map(([label, href]) => /* @__PURE__ */ u2("a", { href, children: label })) });
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

// src/components/LocaleRedirect.tsx
var LocaleRedirect_default = ((opts) => {
  const prefixes = (opts?.prefixes ?? []).filter((prefix) => /^[A-Za-z][A-Za-z-]*$/.test(prefix));
  const script = prefixes.length === 0 ? "" : `(function(){var m=location.pathname.match(/^\\/(${prefixes.join("|")})(\\/.*)?$/);if(m)location.replace((m[2]||"/")+location.search+location.hash)})()`;
  const LocaleRedirect = () => script ? /* @__PURE__ */ u2("script", { dangerouslySetInnerHTML: { __html: script } }) : null;
  return LocaleRedirect;
});

export { BlogFooter_default as BlogFooter, BlogLinksHeader_default as BlogLinksHeader, LocaleRedirect_default as LocaleRedirect };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map