import assert from "node:assert/strict"
import test, { describe } from "node:test"

import { h } from "preact"
import renderToString from "preact-render-to-string"

import type { QuartzComponentProps } from "@quartz-community/types"

import BlogFooter from "./components/BlogFooter"
import BlogLinksHeader from "./components/BlogLinksHeader"
import LocaleRedirect from "./components/LocaleRedirect"

type TestGlobal = typeof globalThis & { React?: { readonly createElement: typeof h } }
;(globalThis as TestGlobal).React = { createElement: h }

type CssCarrier = { readonly css?: string }

function componentCss(component: CssCarrier): string {
  const css = component.css
  if (typeof css !== "string") {
    assert.fail("component should expose a CSS string")
  }
  return css
}

const props = {
  fileData: { slug: "index" },
  cfg: { locale: "ko-KR" },
  allFiles: [],
  children: [],
} as unknown as QuartzComponentProps

describe("Blog chrome", () => {
  test("locale redirect strips only the configured prefixes", () => {
    const html = renderToString(LocaleRedirect({ prefixes: ["ko", "en", "bad/one"] })(props))
    const source = html.match(/<script>(.*)<\/script>/)?.[1] ?? ""
    assert.ok(source.includes("(ko|en)"))
    const fn = new Function("location", source.replace(/location\./g, "location."))
    const calls: string[] = []
    const run = (pathname: string) =>
      fn({ pathname, search: "?q=1", hash: "#h", replace: (to: string) => calls.push(to) })
    run("/ko/2025-retrospective")
    run("/en")
    run("/korea/town")
    run("/about")
    assert.deepEqual(calls, ["/2025-retrospective?q=1#h", "/?q=1#h"])
    assert.equal(renderToString(LocaleRedirect({ prefixes: [] })(props)), "")
  })

  test("renders header links verbatim", () => {
    const header = renderToString(
      BlogLinksHeader({ links: { Writing: "/writing", About: "/about" } })(props),
    )
    assert.match(header, /href="\/writing"/)
    assert.match(header, /href="\/about"/)
  })

  test("keeps header and footer chrome observable", () => {
    const css = [BlogLinksHeader({ links: {} }), BlogFooter({ links: {} })]
      .map(componentCss)
      .join("\n")

    assert.ok(css.includes(".blog-links-header"))
    assert.ok(css.includes("#quartz-body > footer"))
    assert.ok(css.includes("border-radius: 0;"))
    assert.ok(css.includes("box-shadow: none;"))
    assert.ok(css.includes("@media (max-width: 430px)"))
  })

  test("keeps header links on one row", () => {
    const css = componentCss(BlogLinksHeader({ links: {} }))
    assert.ok(css.includes("flex-wrap: nowrap"))
    assert.ok(css.includes("white-space: nowrap"))
    assert.ok(css.includes("min-height: 44px"))
  })
})
