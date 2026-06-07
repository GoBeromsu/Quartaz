---
name: korean-blog-translator
description: Translate Korean-source Quartz blog markdown into the configured multilingual locale set. Use when adding translated blog posts, running a dry-run translation manifest, refreshing stale translations after a Korean source edit, preserving Obsidian/Quartz markdown syntax during translation, or preparing existing Korean posts for /ko/, /en/, /zh-Hans/, /hi/, /es/, /fr/, /ar/, /bn/, and /pt-BR publishing.
---

# Korean Blog Translator

## Overview

Use this skill to turn one Korean source markdown file into locale-specific translated markdown files for this Quartz blog. The bundled CLI is the source of truth for dry-run manifests, source-hash checks, protected markdown handling, and provider selection.

## Workflow

1. Read `references/markdown-preservation.md` before translating content with code fences, wikilinks, attachments, callouts, or URLs.
2. Run a dry-run first:

   ```bash
   node .codex/skills/korean-blog-translator/scripts/translate_blog_post.mjs \
     --source "content/Articles/젊음이 아름답다.md" \
     --locales en,zh-Hans,hi,es,fr,ar,bn,pt-BR \
     --out-dir /tmp/blog-translations \
     --provider mock \
     --dry-run
   ```

3. Inspect the JSON manifest. Every translation must be `would-write`, `unchanged`, or `stale`; treat `stale` as a conflict requiring review.
4. Generate with `--provider solar` only when `UPSTAGE_API_KEY` is present. Use `--provider mock` for tests and deterministic fixture generation.
5. Never overwrite a stale translation silently. If the manifest reports `stale`, preserve the existing translated file and decide whether to retranslate, merge manually, or mark blocked.
6. Keep `permalink` shared across source and translated siblings. Do not translate frontmatter keys, stable URLs, attachment paths, or internal IDs.

## CLI Contract

`scripts/translate_blog_post.mjs` accepts:

- `--source <path>`: Korean markdown source with YAML frontmatter.
- `--locales <comma-list>`: target locales from `en,zh-Hans,hi,es,fr,ar,bn,pt-BR`.
- `--out-dir <path>`: output root; files are written under `<out-dir>/<locale>/<source-filename>`.
- `--provider mock|solar`: deterministic mock or Upstage Solar.
- `--dry-run`: print manifest without writing files.

The manifest is JSON on stdout. Provider/setup errors go to stderr with a nonzero exit.

## Output Rules

- Add or update translation frontmatter: `translationKey`, `locale`, `sourceLocale: ko`, `sourcePath`, `sourceHash`, `translationStatus: translated`, and shared `permalink`.
- Preserve fenced code blocks, image paths, markdown links, wikilinks, callout markers, URLs, and attachment paths.
- Use the source hash to detect stale translations. Existing files with a different `sourceHash` are reported as `stale` and left unchanged.
- Do not call the Solar API when credentials are missing; fail before network work.
