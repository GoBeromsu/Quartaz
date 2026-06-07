# Multilingual Publishing Contract

This contract defines the first multilingual rollout for the Quartz blog. Korean is the authored
source language. Every public article is published under a locale-prefixed URL and belongs to a
translation group identified by a stable `translationKey`.

## Locale Profile

| Route Prefix | BCP 47  | Role   | Direction |
| ------------ | ------- | ------ | --------- |
| `ko`         | `ko-KR` | source | `ltr`     |
| `en`         | `en-US` | target | `ltr`     |
| `zh-Hans`    | `zh-CN` | target | `ltr`     |
| `hi`         | `hi-IN` | target | `ltr`     |
| `es`         | `es-ES` | target | `ltr`     |
| `fr`         | `fr-FR` | target | `ltr`     |
| `ar`         | `ar-SA` | target | `rtl`     |
| `bn`         | `bn-BD` | target | `ltr`     |
| `pt-BR`      | `pt-BR` | target | `ltr`     |

## Frontmatter Fields

Every published multilingual article must include these fields:

```yaml
translationKey: beauty-of-youth
locale: ko
sourceLocale: ko
sourcePath: content/Articles/젊음이 아름답다.md
sourceHash: sha256:fixture-source-hash
translationStatus: source
permalink: beauty-of-youth
```

- `translationKey` is stable across the full translation group.
- `locale` uses the route prefix, not the BCP 47 tag.
- `sourceLocale` is `ko` for this rollout.
- `sourcePath` points to the Korean source markdown.
- `sourceHash` is a content hash for idempotent translation checks.
- `translationStatus` is `source`, `translated`, `stale`, `blocked`, or `external-only`.
- `permalink` is the shared English kebab-case slug for the whole group.

## URL Rules

- `/` is the `x-default` language selector page.
- `/ko/{permalink}` is the Korean source canonical URL.
- `/{locale}/{permalink}` is the target translation canonical URL.
- Existing flat URLs such as `/{permalink}` are compatibility redirects to `/ko/{permalink}` and
  must be `noindex`.
- Localized titles do not change URLs in the first rollout.

## Validation Rules

- A translation group must contain exactly one Korean source page.
- A translation group may contain at most one page per locale.
- A translated page must have the same `translationKey` and `permalink` as the Korean source.
- Unsupported locale prefixes are invalid.
- Arabic pages must resolve to `dir="rtl"`.
- Generated translated markdown must not contain `file:///` links.
