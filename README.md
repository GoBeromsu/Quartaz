# Beomsu's Digital Garden

Personal blog built with [Quartz](https://quartz.jzhao.xyz/).

## Multilingual Publishing

```bash
# Validate generated translation/backfill status before publishing
node .codex/skills/korean-blog-translator/scripts/translate_blog_post.mjs backfill \
  --content content \
  --locales en,zh-Hans,hi,es,fr,ar,bn,pt-BR \
  --out-dir @staging \
  --provider solar \
  --dry-run

# Sync prepared Ataraxia staging content into Quartz content/
npm run sync

# Required local QA
npm run check
npm test
npx quartz build
npx quartz build --serve --port 8081
```

## URL Strategy

- Public article URLs are locale-prefixed: `/ko/{permalink}`, `/en/{permalink}`,
  `/zh-Hans/{permalink}`, `/hi/{permalink}`, `/es/{permalink}`, `/fr/{permalink}`,
  `/ar/{permalink}`, `/bn/{permalink}`, and `/pt-BR/{permalink}`.
- Korean is the source locale. Target markdown must keep the same `permalink` and
  `translationKey` as the Korean source.
- Existing flat permalinks remain legacy redirect/noindex pages.
- Generated translations should target `@staging`, which resolves to the Ataraxia
  `.deploy-staging` source used by `npm run sync`.
- Root-relative attachments must use `/_attachments/{filename}` and `file:///`
  references are rejected before sync/publish.

## Deploy

Use the project `/deploy` skill after local QA. Manual deployment, if needed:

```bash
npx quartz build && git add . && git commit -m "message" && git push origin v5
```
