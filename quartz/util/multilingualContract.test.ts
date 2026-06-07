import assert from "node:assert/strict"
import { readdirSync, readFileSync } from "node:fs"
import { basename } from "node:path"
import test, { describe } from "node:test"

const fixtureRoot = new URL("../test/fixtures/multilingual/", import.meta.url)
const expectedLocales = ["ko", "en", "zh-Hans", "hi", "es", "fr", "ar", "bn", "pt-BR"] as const

type MultilingualContractModule = {
  readonly SUPPORTED_MULTILINGUAL_LOCALES: readonly string[]
  readonly readMultilingualFixtureGroup: (fixturePath: URL) => readonly unknown[]
  readonly assertValidMultilingualFixtureGroup: (entries: readonly unknown[]) => void
  readonly assertUnsupportedLocaleFixture: (fixturePath: URL) => void
}

async function loadContractModule(): Promise<MultilingualContractModule> {
  return import("./multilingual")
}

function fixtureFiles(group: string): readonly string[] {
  return readdirSync(new URL(`${group}/`, fixtureRoot))
    .filter((fileName) => fileName.endsWith(".md"))
    .sort()
}

describe("multilingual contract", () => {
  test("loads complete translation fixture group when every locale is present", async () => {
    const contract = await loadContractModule()
    const files = fixtureFiles("complete")

    assert.deepStrictEqual(
      files.map((fileName) => basename(fileName, ".md")).sort(),
      [...expectedLocales].sort(),
    )

    const entries = contract.readMultilingualFixtureGroup(new URL("complete/", fixtureRoot))
    contract.assertValidMultilingualFixtureGroup(entries)
    assert.deepStrictEqual(contract.SUPPORTED_MULTILINGUAL_LOCALES, expectedLocales)
  })

  test("rejects malformed locale fixture with a deterministic unsupported-locale error", async () => {
    const contract = await loadContractModule()

    assert.throws(
      () => contract.assertUnsupportedLocaleFixture(new URL("bad-locale.md", fixtureRoot)),
      /unsupported locale: xx/,
    )
  })

  test("rejects duplicate locale in one translation group", async () => {
    const contract = await loadContractModule()
    const entries = contract.readMultilingualFixtureGroup(new URL("duplicate-locale/", fixtureRoot))

    assert.throws(
      () => contract.assertValidMultilingualFixtureGroup(entries),
      /duplicate locale: ko/,
    )
  })

  test("rejects sibling translations with mismatched shared permalink", async () => {
    const contract = await loadContractModule()
    const entries = contract.readMultilingualFixtureGroup(
      new URL("mismatched-permalink/", fixtureRoot),
    )

    assert.throws(
      () => contract.assertValidMultilingualFixtureGroup(entries),
      /mismatched permalink/,
    )
  })

  test("documents locale URL and frontmatter rules", () => {
    const contractDoc = readFileSync(
      new URL("../../docs/multilingual-contract.md", import.meta.url),
      "utf8",
    )
    const requiredMarkers = [
      "`ko`",
      "`ko-KR`",
      "`zh-Hans`",
      "`zh-CN`",
      "`ar-SA`",
      "`rtl`",
      "translationKey: beauty-of-youth",
      "`/{locale}/{permalink}`",
      "must be `noindex`",
    ] as const

    for (const marker of requiredMarkers) {
      assert.ok(contractDoc.includes(marker), `expected contract doc to include ${marker}`)
    }
  })
})
