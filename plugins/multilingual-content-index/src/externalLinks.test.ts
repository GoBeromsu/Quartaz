import assert from "node:assert/strict"
import { describe, it } from "node:test"
import type { Root } from "hast"
import {
  collectExternalLinks,
  isOutsideSiteUrl,
  normalizeExternalUrl,
  siteHostsForBlog,
} from "./externalLinks"

function linkTree(hrefs: string[]): Root {
  return {
    type: "root",
    children: hrefs.map((href) => ({
      type: "element",
      tagName: "a",
      properties: { href },
      children: [],
    })),
  }
}

describe("siteHostsForBlog", () => {
  it("includes baseUrl and the live blog host with www variants", () => {
    assert.deepEqual(siteHostsForBlog("https://beomsukoh.com"), [
      "beomsukoh.com",
      "www.beomsukoh.com",
    ])
  })
})

describe("normalizeExternalUrl", () => {
  it("keeps http(s) and drops hash plus trailing slash", () => {
    assert.equal(normalizeExternalUrl("https://GitHub.com/foo/#readme"), "https://github.com/foo")
  })

  it("rejects relative paths, mailto, and anchors", () => {
    assert.equal(normalizeExternalUrl("/en/about"), null)
    assert.equal(normalizeExternalUrl("mailto:hi@example.com"), null)
    assert.equal(normalizeExternalUrl("#section"), null)
  })
})

describe("isOutsideSiteUrl", () => {
  const hosts = siteHostsForBlog("beomsukoh.com")

  it("treats the blog origin as internal", () => {
    assert.equal(isOutsideSiteUrl("https://beomsukoh.com/en/about", hosts), false)
    assert.equal(isOutsideSiteUrl("https://www.beomsukoh.com/ko/writing", hosts), false)
  })

  it("keeps third-party sites", () => {
    assert.equal(isOutsideSiteUrl("https://github.com/jackyzha0/quartz", hosts), true)
  })
})

describe("collectExternalLinks", () => {
  const hosts = siteHostsForBlog("beomsukoh.com")

  it("collects unique outside http(s) hrefs and skips blog urls", () => {
    const tree = linkTree([
      "https://github.com/foo",
      "https://github.com/foo/",
      "https://beomsukoh.com/en/about",
      "/writing",
      "https://arxiv.org/abs/123",
    ])
    assert.deepEqual(collectExternalLinks({ tree, siteHosts: hosts }), [
      "https://github.com/foo",
      "https://arxiv.org/abs/123",
    ])
  })
})
