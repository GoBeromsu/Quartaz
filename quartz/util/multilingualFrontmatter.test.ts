import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test, { describe } from "node:test"

import { parse } from "yaml"

import type { MultilingualConfiguration } from "../cfg"
import {
  attachTranslationMetadata,
  isUndeclaredLocaleContent,
  readMultilingualFixtureGroup,
  validateMultilingualConfig,
  validateTranslationFrontmatterGroups,
} from "./multilingual"

const fixtureRoot = new URL("../test/fixtures/multilingual/", import.meta.url)

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function requiredRecord(value: unknown, label: string): Record<string, unknown> {
  if (!isRecord(value)) {
    assert.fail(`${label} should be an object`)
  }

  return value
}

function readConfigMultilingual(): MultilingualConfiguration {
  const root = requiredRecord(
    parse(readFileSync(new URL("../../quartz.config.yaml", import.meta.url), "utf8")),
    "quartz.config.yaml",
  )
  const configuration = requiredRecord(root.configuration, "configuration")

  return validateMultilingualConfig(configuration.multilingual)
}

function declaredFixtureEntries(
  config: MultilingualConfiguration,
  entries: readonly { readonly locale: string }[],
) {
  const declared = new Set(config.locales.map((locale) => locale.id))
  return entries.filter((entry) => declared.has(entry.locale))
}

function validateFixtureGroup(config: MultilingualConfiguration, fixturePath: URL) {
  return validateTranslationFrontmatterGroups(
    config,
    declaredFixtureEntries(config, readMultilingualFixtureGroup(fixturePath)),
    {
      baseUrl: "berom.net",
    },
  )
}

describe("translation frontmatter", () => {
  test("valid group exposes locale metadata on file.data", () => {
    const config = readConfigMultilingual()
    const groups = validateFixtureGroup(config, new URL("complete/", fixtureRoot))
    const group = groups[0]
    const source = group?.source
    const fileData: Record<string, unknown> = {}

    assert.equal(groups.length, 1)
    assert.equal(group.entries.length, 2)
    assert.deepEqual(
      group.entries.map((entry) => entry.locale),
      ["en", "ko"],
    )
    assert.equal(source?.locale, "ko")
    assert.equal(source?.translationStatus, "source")

    attachTranslationMetadata(fileData, source.metadata)

    assert.deepEqual(fileData.multilingual, {
      translationKey: "beauty-of-youth",
      locale: "ko",
      sourceLocale: "ko",
      sourcePath: "content/Articles/젊음이 아름답다.md",
      sourceHash: "sha256:fixture-source-hash",
      translationStatus: "source",
      permalink: "beauty-of-youth",
      localizedPath: "/ko/beauty-of-youth",
      canonicalUrl: "https://berom.net/ko/beauty-of-youth",
      direction: "ltr",
    })
  })

  test("rejects duplicate locale in one translation group", () => {
    const config = readConfigMultilingual()

    assert.throws(
      () => validateFixtureGroup(config, new URL("duplicate-locale/", fixtureRoot)),
      /duplicate locale for translationKey duplicate-locale: ko/,
    )
  })

  test("rejects translated groups without a Korean source", () => {
    const config = readConfigMultilingual()

    assert.throws(
      () => validateFixtureGroup(config, new URL("missing-source/", fixtureRoot)),
      /missing source for translationKey missing-source/,
    )
  })

  test("allows external-only groups without a Korean source", () => {
    const config = readConfigMultilingual()
    const groups = validateFixtureGroup(config, new URL("external-only/", fixtureRoot))

    assert.equal(groups[0]?.entries.length, 1)
    assert.equal(groups[0]?.entries[0]?.translationStatus, "external-only")
  })

  test("rejects mismatched sibling permalinks unless localizedSlug is enabled", () => {
    const config = readConfigMultilingual()
    const entries = readMultilingualFixtureGroup(new URL("mismatched-permalink/", fixtureRoot))
    const localizedSlugConfig = { ...config, localizedSlug: true }

    assert.throws(
      () => validateTranslationFrontmatterGroups(config, entries, { baseUrl: "berom.net" }),
      /mismatched permalink for translationKey mismatched-permalink/,
    )
    assert.equal(
      validateTranslationFrontmatterGroups(localizedSlugConfig, entries, {
        baseUrl: "berom.net",
      })[0]?.entries.length,
      2,
    )
  })

  test("treats supported-but-unpublished locale files as undeclared content", () => {
    const config = readConfigMultilingual()

    assert.equal(
      isUndeclaredLocaleContent(config, { frontmatter: { locale: "zh-Hans" } }),
      true,
    )
    assert.equal(isUndeclaredLocaleContent(config, { frontmatter: { locale: "en" } }), false)
    assert.equal(isUndeclaredLocaleContent(config, { frontmatter: { locale: "ko" } }), false)
  })
})
