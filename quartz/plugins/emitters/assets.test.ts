import assert from "node:assert/strict"
import { existsSync, mkdirSync, mkdtempSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import test, { describe } from "node:test"

import { Assets } from "./assets"
import type { BuildCtx } from "../../util/ctx"
import type { ChangeEvent } from "../types"
import type { FilePath } from "../../util/path"

function tempCtx(): BuildCtx {
  const root = mkdtempSync(join(tmpdir(), "quartz-assets-"))
  const directory = join(root, "vault")
  const output = join(root, "out")
  mkdirSync(directory, { recursive: true })
  mkdirSync(output, { recursive: true })

  return {
    buildId: "test",
    argv: { directory, output, verbose: false },
    cfg: { configuration: { ignorePatterns: [] }, plugins: { pageTypes: [] } },
    allSlugs: [],
    allFiles: [],
    incremental: true,
    virtualPages: [],
  } as unknown as BuildCtx
}

async function drain(ctx: BuildCtx, changeEvents: ChangeEvent[]): Promise<string[]> {
  const emitted = Assets().partialEmit!(ctx, [], new Map() as never, changeEvents)
  const files: string[] = []
  for await (const file of emitted as AsyncIterable<FilePath>) {
    files.push(file)
  }
  return files
}

describe("Assets partial emit deletes", () => {
  test("tolerates deleting an asset that was never emitted", async () => {
    const ctx = tempCtx()
    const event = { type: "delete", path: "notes/.transient/state.json" as FilePath } as ChangeEvent

    // A never-copied asset has no output file. Before this was tolerated, the
    // ENOENT propagated out of rebuild() and aborted the entire rebuild.
    await assert.doesNotReject(() => drain(ctx, [event]))
  })

  test("still removes an asset that was previously emitted", async () => {
    const ctx = tempCtx()
    const dest = join(ctx.argv.output, "diagram.png")
    writeFileSync(dest, "binary")
    assert.ok(existsSync(dest), "fixture should start with an emitted asset")

    await drain(ctx, [{ type: "delete", path: "diagram.png" as FilePath } as ChangeEvent])

    assert.equal(existsSync(dest), false, "deleting a tracked asset should remove the output file")
  })

  test("skips markdown deletes, which other emitters own", async () => {
    const ctx = tempCtx()
    const dest = join(ctx.argv.output, "note.md")
    writeFileSync(dest, "# note")

    await drain(ctx, [{ type: "delete", path: "note.md" as FilePath } as ChangeEvent])

    assert.ok(existsSync(dest), "Assets must not claim markdown output")
  })
})
