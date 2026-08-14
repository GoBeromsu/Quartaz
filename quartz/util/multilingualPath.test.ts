import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test, { describe } from "node:test"

import { parse } from "yaml"

import type { MultilingualConfiguration } from "../cfg"
import {
  buildAlternateUrlCluster,
  buildCanonicalLocaleUrl,
  buildLegacyRedirectUrl,
  buildLocalizedPath,
  getLocaleDirection,
  stripLocalePrefix,
  validateMultilingualConfig,
} from "./multilingual"

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

describe("locale path helpers", () => {
  test("build localized paths and alternate URLs from config", () => {
    const config = readConfigMultilingual()
    const translations = config.locales.map((locale) => ({
      translationKey: "beauty-of-youth",
      locale: locale.id,
      permalink: "beauty-of-youth",
    }))
    const cluster = buildAlternateUrlCluster(config, "berom.net", translations, "beauty-of-youth")

    assert.equal(buildLocalizedPath(config, "ko", "beauty-of-youth"), "/ko/beauty-of-youth")
    assert.equal(buildLocalizedPath(config, "en", "beauty-of-youth"), "/en/beauty-of-youth")
    assert.equal(buildLocalizedPath(config, "ko", "index"), "/ko/")
    assert.equal(
      buildCanonicalLocaleUrl(config, "berom.net", "ko", "beauty-of-youth"),
      "https://berom.net/ko/beauty-of-youth",
    )
    assert.equal(
      buildLegacyRedirectUrl("berom.net", "beauty-of-youth"),
      "https://berom.net/beauty-of-youth",
    )
    assert.equal(cluster.xDefault.url, "https://berom.net/")
    assert.deepEqual(
      cluster.alternates.map((alternate) => alternate.url),
      ["https://berom.net/ko/beauty-of-youth", "https://berom.net/en/beauty-of-youth"],
    )
    assert.throws(
      () => buildLocalizedPath(config, "ar", "beauty-of-youth"),
      /unsupported locale: ar/,
    )
  })

  test("strip supported locale prefixes and reject unsupported locale-like prefixes", () => {
    const config = readConfigMultilingual()

    assert.deepEqual(stripLocalePrefix(config, "/ko/beauty-of-youth"), {
      locale: "ko",
      permalink: "beauty-of-youth",
    })
    assert.deepEqual(stripLocalePrefix(config, "/beauty-of-youth"), {
      locale: undefined,
      permalink: "beauty-of-youth",
    })
    assert.throws(
      () => stripLocalePrefix(config, "/xx/beauty-of-youth"),
      /unsupported locale prefix: \/xx\//,
    )
  })

  test("reject duplicate translation keys within an alternate cluster", () => {
    const config = readConfigMultilingual()

    assert.throws(
      () =>
        buildAlternateUrlCluster(
          config,
          "berom.net",
          [
            { translationKey: "beauty-of-youth", locale: "ko", permalink: "beauty-of-youth" },
            { translationKey: "beauty-of-youth", locale: "ko", permalink: "beauty-of-youth-copy" },
          ],
          "beauty-of-youth",
        ),
      /duplicate translation key: beauty-of-youth for ko/,
    )
  })

  test("return configured text direction for every published locale", () => {
    const config = readConfigMultilingual()

    for (const locale of config.locales) {
      assert.equal(getLocaleDirection(config, locale.id), locale.direction)
      assert.equal(locale.direction, "ltr")
    }
  })
})
