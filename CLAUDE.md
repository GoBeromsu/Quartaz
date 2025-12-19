# Quartz Project

## URL Strategy

### Flat URL with `permalink`
- Use `permalink` in frontmatter for folder-independent URLs
    - `permalink` must be in English (SEO-friendly, no UTF-8 encoding issues)
    - If title is already in English, keep it as-is
    - Use kebab-case: `my-article-title`
- URL format: `berom.net/{permalink}` (no folder prefix)

### Frontmatter Example
```yaml
---
title: My Article
permalink: my-article-slug
---
```
### Why this approach?
- Folder changes don't break URLs
- Shorter, cleaner URLs (better SEO)
- No need for `/posts/` or `/articles/` prefix
- Subdomains keep main domain clean
## Command
### Deploy

```bash
npx quartz build && git add . && git commit -m "message" && git push origin v4
```

- Branch: `v4`
- Auto-deploy via GitHub Actions to GitHub Pages
- Site: https://berom.net

