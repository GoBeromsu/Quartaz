import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { describe, test } from "node:test"
import { parse } from "yaml"

function requiredRecord(value: unknown, label: string): Record<string, unknown> {
  assert.ok(value !== null && typeof value === "object" && !Array.isArray(value), `${label} must be an object`)
  return value as Record<string, unknown>
}

describe("local vault ignore patterns", () => {
  test("excludes transient Gajae Code session state", () => {
    const root = requiredRecord(
      parse(readFileSync(new URL("../../quartz.config.yaml", import.meta.url), "utf8")),
      "quartz.config.yaml",
    )
    const configuration = requiredRecord(root.configuration, "configuration")
    const ignorePatterns = configuration.ignorePatterns

    assert.ok(Array.isArray(ignorePatterns), "ignorePatterns should be an array")
    assert.ok(
      ignorePatterns.includes(".gjc/**"),
      "ignorePatterns should exclude .gjc/** so transient session files cannot race the watcher",
    )
  })
})
