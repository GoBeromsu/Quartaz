import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test, { describe } from "node:test"

import { parse } from "yaml"

import type { MultilingualConfiguration } from "../cfg"
import { validateMultilingualConfig } from "./multilingual"

const expectedLocaleIds = ["ko", "en", "zh-Hans", "hi", "es", "fr", "ar", "bn", "pt-BR"]
const expectedTargetLocaleIds = ["en", "zh-Hans", "hi", "es", "fr", "ar", "bn", "pt-BR"]

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
  const config = requiredRecord(
    parse(readFileSync(new URL("../../quartz.config.yaml", import.meta.url), "utf8")),
    "quartz.config.yaml",
  )
  const configuration = requiredRecord(config.configuration, "configuration")

  return validateMultilingualConfig(configuration.multilingual)
}

function readSchemaConfigurationProperties(): Record<string, unknown> {
  const schema = requiredRecord(
    JSON.parse(
      readFileSync(new URL("../plugins/quartz-plugins.schema.json", import.meta.url), "utf8"),
    ),
    "quartz-plugins.schema.json",
  )
  const properties = requiredRecord(schema.properties, "schema.properties")
  const configuration = requiredRecord(properties.configuration, "schema.configuration")
  const configurationProperties = requiredRecord(
    configuration.properties,
    "schema.configuration.properties",
  )

  return configurationProperties
}

describe("multilingual config", () => {
  test("loads the configured locale profile from quartz.config.yaml", () => {
    const config = readConfigMultilingual()
    const localeIds = config.locales.map((locale) => locale.id)

    assert.equal(config.enabled, true)
    assert.equal(config.sourceLocale, "ko")
    assert.deepEqual(config.targetLocales, expectedTargetLocaleIds)
    assert.deepEqual(localeIds, expectedLocaleIds)
    assert.deepEqual(
      config.locales.map((locale) => locale.routePrefix),
      expectedLocaleIds.map((localeId) => `/${localeId}/`),
    )
    assert.equal(config.defaultLocaleRoute, "/ko/")
    assert.equal(config.xDefaultRoute, "/")
    assert.equal(config.locales.find((locale) => locale.id === "ar")?.direction, "rtl")
    assert.equal(config.contentIndex.search, "all")
    assert.equal(config.contentIndex.rss, "all")
    assert.equal(config.contentIndex.sitemap, "all")
  })

  test("adds multilingual configuration to the JSON schema", () => {
    const configurationProperties = readSchemaConfigurationProperties()

    assert.ok(
      configurationProperties.multilingual,
      "schema should expose configuration.multilingual",
    )
  })

  test("rejects duplicate locale prefixes deterministically", () => {
    const config = readConfigMultilingual()
    const duplicatedPrefixConfig: MultilingualConfiguration = {
      ...config,
      locales: config.locales.map((locale) =>
        locale.id === "fr" ? { ...locale, routePrefix: "/en/" } : locale,
      ),
    }

    assert.throws(
      () => validateMultilingualConfig(duplicatedPrefixConfig),
      /duplicate locale prefix: \/en\//,
    )
  })
})
