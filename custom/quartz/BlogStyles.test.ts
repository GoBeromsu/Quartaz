import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test, { describe } from "node:test"

import BlogStyles from "./BlogStyles"

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

function assertIncludesAll(haystack: string, markers: readonly string[]): void {
  for (const marker of markers) {
    assert.ok(haystack.includes(marker), `expected CSS to include ${marker}`)
  }
}

describe("BlogStyles Ataraxia contract", () => {
  test("keeps current custom style hook observable", () => {
    const css = componentCss(BlogStyles())
    const existingMarkers = [
      "--blog-content-width",
      '.page[data-frame="full-width"]',
      ".page-header",
    ] as const

    assertIncludesAll(css, existingMarkers)
  })

  test("maps Minimal reading rhythm", () => {
    const css = componentCss(BlogStyles())
    const readingMarkers = [
      "--blog-content-width: 40rem;",
      "--blog-wide-width: min(88vw, 50rem);",
      "--blog-paragraph-spacing: 1.75rem;",
      "font-size: 16px;",
      "line-height: 1.5;",
    ] as const

    assertIncludesAll(css, readingMarkers)
  })

  test("keeps Ataraxia accent tokens", () => {
    const config = readFileSync(new URL("../../quartz.config.yaml", import.meta.url), "utf8")
    const css = componentCss(BlogStyles())
    const tokenMarkers = [
      'secondary: "#a52142"',
      "--blog-accent: #a52142;",
      "--background-primary",
    ] as const

    assert.ok(config.includes(tokenMarkers[0]), "light theme secondary should use #a52142")
    assertIncludesAll(css, tokenMarkers.slice(1))
  })

  test("maps Minimal light ink and border palette", () => {
    const config = readFileSync(new URL("../../quartz.config.yaml", import.meta.url), "utf8")
    const css = componentCss(BlogStyles())
    const configMarkers = [
      'lightgray: "#e6e6e6"',
      'gray: "#737373"',
      'darkgray: "#0f0f0f"',
      'dark: "#0f0f0f"',
    ] as const
    const cssMarkers = [
      "--blog-ink: #0f0f0f;",
      "--blog-muted: #737373;",
      "--blog-faint: #b5b5b5;",
      "--blog-border: #e6e6e6;",
      "color: var(--blog-ink);",
      ".page-header .page-title a",
    ] as const

    assertIncludesAll(config, configMarkers)
    assertIncludesAll(css, cssMarkers)
  })

  test("prevents duplicate homepage dividers", () => {
    const css = componentCss(BlogStyles())
    const dividerMarkers = [
      `body[data-slug="index"] .page[data-frame="full-width"] .center.full-width > hr {
  display: none;`,
    ] as const

    assertIncludesAll(css, dividerMarkers)
    assert.doesNotMatch(
      css,
      /\\.page\\[data-frame="full-width"\\] \\.page-header \\{[^}]*border-bottom/s,
    )
  })

  test("styles outlined Minimal callouts", () => {
    const css = componentCss(BlogStyles())
    const calloutMarkers = [
      ".callout",
      "border: 1px solid var(--callout-color);",
      "background-color: color-mix(in srgb, var(--callout-color) 6%, transparent);",
      "box-shadow: none;",
    ] as const

    assertIncludesAll(css, calloutMarkers)
  })

  test("maps Minimal list and media rules", () => {
    const css = componentCss(BlogStyles())
    const markdownMarkers = [
      "--blog-list-indent: 1.8em;",
      "--blog-list-spacing: 0.075em;",
      "text-decoration: none;",
      ".block-language-mermaid",
      "overflow-x: auto;",
      "max-width: var(--blog-wide-width);",
    ] as const

    assertIncludesAll(css, markdownMarkers)
  })

  test("contains wide math and tables on mobile", () => {
    const css = componentCss(BlogStyles())
    const overflowMarkers = [
      "p:has(.katex)",
      "li:has(.katex)",
      ".table-container",
      "max-width: 100%;",
      "width: max-content;",
    ] as const

    assertIncludesAll(css, overflowMarkers)
  })
})
