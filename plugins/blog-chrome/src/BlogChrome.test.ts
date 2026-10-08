import assert from "node:assert/strict"
import test, { describe } from "node:test"

import { h } from "preact"
import renderToString from "preact-render-to-string"

import type { QuartzComponentProps } from "@quartz-community/types"

import BlogFooter from "./components/BlogFooter"
import BlogLinksHeader from "./components/BlogLinksHeader"

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
