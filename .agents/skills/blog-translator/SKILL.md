---
name: blog-translator
description: Translate Quartaz (beomsukoh.com) blog posts between Korean and English by hand as the agent. Use when adding an English translation for a Korean post, adding a Korean translation for an English draft, refreshing a stale translation after the source changed, or replacing "[en]"-prefixed mock output with a real translation. Covers the multilingual frontmatter contract, markdown preservation, and verification.
---

# Blog Translator (ko ↔ en)

Translate one blog post between Korean and English for the Quartz site at
`~/Documents/02_Area/Quartaz` (repo `GoBeromsu/Quartaz`). **You, the agent, write
the translation.** Never publish machine/mock output: lines prefixed with
`[en]`/`[ko]` are mock-provider artifacts, not translations — they break
markdown headings, the TOC, and the reading experience.

## Site contract

- `ko` is the site `sourceLocale`. The Korean file is the source note and lives
  unprefixed (e.g. `content/Articles/<name>.md`). The English file lives at
  `content/en/<same filename>.md`.
- Even when a post is drafted in English first, store the Korean version as the
  unprefixed source (`translationStatus: source`) and the English version under
  `content/en/` (`translationStatus: translated`).
- Both files share `translationKey` and `permalink`; the language toggle and the
  one-garden listing (prefer current locale, fall back to source) depend on them.

## Frontmatter contract

Copy the source frontmatter, then set on the translation:

```yaml
title: "<translated title — never prefix with [en]/[ko]>"
translationKey: <same as source>
locale: en            # or ko
sourceLocale: ko
sourcePath: content/Articles/<source filename>.md
sourceHash: <see below>
translationStatus: translated
permalink: <same as source>
```

Compute `sourceHash` from the repo root (hash of the source file minus its own
`sourceHash` key):

```bash
node --input-type=module -e "
import { readFileSync } from 'node:fs'
const { sourceHash } = await import('./.codex/skills/korean-blog-translator/scripts/lib/translation-core.mjs')
console.log(sourceHash(readFileSync(process.argv.at(-1), 'utf8')))
" "content/Articles/<source>.md"
```

If an existing translation's `sourceHash` no longer matches the source, the
translation is stale: retranslate the changed sections, then update the hash.

## Translation rules

- Translate prose naturally; keep the author's voice (paper reviews keep terms
  like Actor/Critic/topology in English in both languages).
- Preserve byte-for-byte: code fences, `$…$`/`$$…$$` math, image paths
  (`/_attachments/...`), URLs, wikilink targets (`[[Note Name]]`), `==highlight==`
  markers, callout type markers (`> [!tldr]`, `> [!question]`, `> [!warning]`).
- Callout body text and link display text are prose: translate them.
- Mermaid diagrams: keep the structure and node IDs; human-readable edge/node
  labels may be translated.
- Keep heading levels identical so the TOC mirrors the source.
- Never translate frontmatter keys, `tags`, `type`, dates, or `aliases` targets.

## Verify before shipping

1. `npx quartz build` (or `ulimit -n 65536; node quartz/bootstrap-cli.mjs build`)
   from the repo root.
2. Check the built page (`public/en/<permalink>.html` or `public/ko/...`):
   no `[en]`/`[ko]` markers, headings render as `<h2>/<h3>` (TOC has entries),
   the title is clean.
3. Both locale homes must list the pair once each: `/ko/` shows the Korean
   title, `/en/` the English title.

## Batch / CLI tooling

`.codex/skills/korean-blog-translator/scripts/translate_blog_post.mjs` still
exists for dry-run manifests, stale detection, and backfill classification
(`--dry-run`, `backfill`). Its `--provider mock` output is for tests only —
never commit or deploy it.

## Sync caveat

Repo `content/` is rsynced from the Obsidian vault staging when
`scripts/watch-content.mjs` runs. Translations created only in the repo can be
deleted by a future sync — mirror new `content/en/` files into the vault's
deploy-staging if the watcher is re-enabled.
