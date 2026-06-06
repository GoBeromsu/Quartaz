import assert from "node:assert/strict"
import test, { describe } from "node:test"

import BlogAllTags from "./BlogAllTags"
import BlogArticleList from "./BlogArticleList"
import BlogFooter from "./BlogFooter"
import BlogLatest from "./BlogLatest"
import BlogLinksHeader from "./BlogLinksHeader"

type CssCarrier = {
  readonly css?: string
}

function componentCss(component: CssCarrier): string {
  const css = component.css
  if (typeof css !== "string") {
    assert.fail("component should expose a CSS string")
  }

  return css
}

function chromeCss(): string {
  const components = [
    BlogArticleList(),
    BlogLatest(),
    BlogAllTags(),
    BlogLinksHeader({ links: {} }),
    BlogFooter({ links: {} }),
  ] as const

  return components.map(componentCss).join("\n")
}

function assertIncludesAll(haystack: string, markers: readonly string[]): void {
  for (const marker of markers) {
    assert.ok(haystack.includes(marker), `expected chrome CSS to include ${marker}`)
  }
}

describe("Blog chrome Ataraxia contract", () => {
  test("keeps current homepage components observable", () => {
    const css = chromeCss()
    const existingMarkers = [
      ".blog-article-list",
      ".blog-latest",
      ".blog-all-tags",
      ".blog-links-header",
      "#quartz-body > footer",
    ] as const

    assertIncludesAll(css, existingMarkers)
  })

  test("keeps homepage chrome quiet", () => {
    const css = chromeCss()
    const quietChromeMarkers = [
      ".blog-article-list-section h3",
      "font-size: 1rem;",
      "font-weight: 600;",
      "border-radius: 0;",
      "box-shadow: none;",
      "text-decoration: none;",
      "@media (max-width: 430px)",
    ] as const

    assertIncludesAll(css, quietChromeMarkers)
  })
})
