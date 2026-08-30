import test, { describe } from "node:test"
import assert from "node:assert"
import { affectedPageSlugs, collectComponents, resolveLayout } from "./dispatcher"
import { QuartzPageTypePluginInstance } from "../types"
import { QuartzComponent } from "../../components/types"
import { FilePath } from "../../util/path"

const StubA: QuartzComponent = (() => null) as unknown as QuartzComponent
const StubB: QuartzComponent = (() => null) as unknown as QuartzComponent
const StubHead: QuartzComponent = (() => null) as unknown as QuartzComponent

function makePageType(
  overrides: Partial<QuartzPageTypePluginInstance> = {},
): QuartzPageTypePluginInstance {
  return {
    name: "test-page-type",
    layout: "content",
    match: () => true,
    body: () => (() => null) as unknown as QuartzComponent,
    ...overrides,
  } as QuartzPageTypePluginInstance
}

describe("affectedPageSlugs", () => {
  test("invalidates the changed note, ancestor folders, tag prefixes, and locale homes", () => {
    const path = "70. Collections/01 People/Ada.md" as FilePath
    const current = new Map([
      [
        path,
        {
          slug: "70.-collections/01-people/ada",
          tags: ["people/researcher"],
          listingFingerprint: "ada-v1",
        },
      ],
    ])

    const affected = affectedPageSlugs([{ type: "change", path }], current, new Map(), ["ko", "en"])

    assert.deepStrictEqual(
      [...affected].sort(),
      [
        "70.-collections/01-people/ada",
        "70.-collections/01-people/index",
        "70.-collections/index",
        "en/index",
        "en/writing",
        "index",
        "ko/index",
        "ko/writing",
        "tags/index",
        "tags/people",
        "tags/people/researcher",
      ].sort(),
    )
  })

  test("uses previous state to invalidate deleted and retagged entries", () => {
    const path = "notes/example.md" as FilePath
    const previous = new Map([
      [path, { slug: "notes/example", tags: ["old/nested"], listingFingerprint: "old" }],
    ])
    const current = new Map([
      [path, { slug: "notes/example", tags: ["new"], listingFingerprint: "new" }],
    ])

    const affected = affectedPageSlugs([{ type: "change", path }], current, previous, [])

    assert.ok(affected.has("notes/index"))
    assert.ok(affected.has("tags/old"))
    assert.ok(affected.has("tags/old/nested"))
    assert.ok(affected.has("tags/new"))
  })

  test("invalidates translation siblings when alternate links change", () => {
    const sourcePath = "notes/source.md" as FilePath
    const translatedPath = "en/notes/source.md" as FilePath
    const previous = new Map([
      [
        sourcePath,
        {
          slug: "ko/notes/source",
          tags: [],
          translationKey: "notes/source",
          listingFingerprint: "source-v1",
        },
      ],
    ])
    const current = new Map([
      [
        sourcePath,
        {
          slug: "ko/notes/source",
          tags: [],
          translationKey: "notes/source",
          listingFingerprint: "source-v1",
        },
      ],
      [
        translatedPath,
        {
          slug: "en/notes/source",
          tags: [],
          translationKey: "notes/source",
          listingFingerprint: "translation-v1",
        },
      ],
    ])

    const affected = affectedPageSlugs([{ type: "add", path: translatedPath }], current, previous, [
      "ko",
      "en",
    ])

    assert.ok(affected.has("ko/notes/source"))
    assert.ok(affected.has("en/notes/source"))
  })

  test("body-only edits rebuild only the changed page", () => {
    const path = "notes/example.md" as FilePath
    const state = {
      slug: "notes/example",
      tags: ["stable"],
      listingFingerprint: "stable-metadata",
    }

    const affected = affectedPageSlugs(
      [{ type: "change", path }],
      new Map([[path, state]]),
      new Map([[path, state]]),
      ["ko"],
    )

    assert.deepStrictEqual([...affected], ["notes/example"])
  })
})

describe("resolveLayout", () => {
  test("footer defaults to [] when sharedDefaults omits footer", () => {
    const result = resolveLayout(makePageType(), { head: StubHead }, {})
    assert.deepStrictEqual(result.footer, [])
  })

  test("header defaults to [] when sharedDefaults omits header", () => {
    const result = resolveLayout(makePageType(), { head: StubHead }, {})
    assert.deepStrictEqual(result.header, [])
  })

  test("footer from sharedDefaults is used when no override", () => {
    const result = resolveLayout(makePageType(), { head: StubHead, footer: [StubA] }, {})
    assert.deepStrictEqual(result.footer, [StubA])
  })

  test("byPageType override replaces footer", () => {
    const result = resolveLayout(
      makePageType(),
      { head: StubHead, footer: [StubA] },
      { content: { footer: [StubB] } },
    )
    assert.deepStrictEqual(result.footer, [StubB])
  })

  test("byPageType override clears footer with []", () => {
    const result = resolveLayout(
      makePageType(),
      { head: StubHead, footer: [StubA] },
      { content: { footer: [] } },
    )
    assert.deepStrictEqual(result.footer, [])
  })

  test("byPageType override clears header with []", () => {
    const result = resolveLayout(
      makePageType(),
      { head: StubHead, header: [StubA] },
      { content: { header: [] } },
    )
    assert.deepStrictEqual(result.header, [])
  })

  test("all array slots default to [] when sharedDefaults only has head", () => {
    const result = resolveLayout(makePageType(), { head: StubHead }, {})
    assert.deepStrictEqual(result.header, [])
    assert.deepStrictEqual(result.left, [])
    assert.deepStrictEqual(result.right, [])
    assert.deepStrictEqual(result.beforeBody, [])
    assert.deepStrictEqual(result.afterBody, [])
    assert.deepStrictEqual(result.footer, [])
  })

  test("preserves component references through override", () => {
    const result = resolveLayout(makePageType(), { head: StubHead, footer: [StubA, StubB] }, {})
    assert.strictEqual(result.footer[0], StubA)
    assert.strictEqual(result.footer[1], StubB)
  })
})

describe("resolveLayout frame resolution", () => {
  test("config override frame wins over page type frame", () => {
    const result = resolveLayout(
      makePageType({ frame: "minimal" }),
      { head: StubHead },
      { content: { frame: "full-width" } },
    )
    assert.strictEqual(result.frame, "full-width")
  })

  test("page type frame wins when no config override", () => {
    const result = resolveLayout(makePageType({ frame: "minimal" }), { head: StubHead }, {})
    assert.strictEqual(result.frame, "minimal")
  })

  test("defaults to 'default' when no frame specified", () => {
    const result = resolveLayout(makePageType(), { head: StubHead }, {})
    assert.strictEqual(result.frame, "default")
  })

  test("defaults to 'default' when byPageType entry exists but has no frame", () => {
    const result = resolveLayout(makePageType(), { head: StubHead }, { content: { left: [StubA] } })
    assert.strictEqual(result.frame, "default")
  })
})

describe("resolveLayout skipContentIndexFetch resolution", () => {
  test("defaults to false when unspecified", () => {
    const result = resolveLayout(makePageType(), { head: StubHead }, {})
    assert.strictEqual(result.skipContentIndexFetch, false)
  })

  test("page type value is used when no config override", () => {
    const result = resolveLayout(
      makePageType({ skipContentIndexFetch: true }),
      { head: StubHead },
      {},
    )
    assert.strictEqual(result.skipContentIndexFetch, true)
  })

  test("config override wins over page type value", () => {
    const result = resolveLayout(
      makePageType({ skipContentIndexFetch: true }),
      { head: StubHead },
      { content: { skipContentIndexFetch: false } },
    )
    assert.strictEqual(result.skipContentIndexFetch, false)
  })

  test("defaults to false when byPageType entry exists but omits the field", () => {
    const result = resolveLayout(makePageType(), { head: StubHead }, { content: { left: [StubA] } })
    assert.strictEqual(result.skipContentIndexFetch, false)
  })
})

describe("collectComponents", () => {
  test("collects all unique components across page types", () => {
    const pageTypes = [makePageType(), makePageType({ layout: "landing" })]
    const sharedDefaults = { head: StubHead }
    const byPageType = {
      content: { footer: [StubA] },
      landing: { footer: [StubB] },
    }

    const result = collectComponents(pageTypes, sharedDefaults, byPageType)
    assert.ok(result.includes(StubA))
    assert.ok(result.includes(StubB))
  })

  test("deduplicates shared components", () => {
    const pageTypes = [makePageType(), makePageType({ layout: "landing" })]
    const sharedDefaults = { head: StubHead }
    const byPageType = {
      content: { left: [StubA] },
      landing: { left: [StubA] },
    }

    const result = collectComponents(pageTypes, sharedDefaults, byPageType)
    const matches = result.filter((component) => component === StubA)
    assert.strictEqual(matches.length, 1)
  })

  test("handles empty footer and header arrays", () => {
    const pageTypes = [makePageType({ layout: "empty" })]
    const sharedDefaults = { head: StubHead }
    const byPageType = { empty: { footer: [], header: [] } }

    const result = collectComponents(pageTypes, sharedDefaults, byPageType)
    assert.ok(result.every((component) => component))
  })
})
