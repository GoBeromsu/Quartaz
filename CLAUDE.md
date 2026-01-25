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

**Use `/deploy` skill for deployment** - it automates build, commit, push, and visual verification.

Skill location: `../Ataraxia/.claude/skills/deploy/` (managed in Ataraxia vault)

Manual command (if needed):
```bash
npx quartz build && git add . && git commit -m "message" && git push origin v4
```

- Branch: `v4`
- Auto-deploy via GitHub Actions to GitHub Pages
- Site: https://berom.net

## Content Sync

### Architecture
- Source: `../Ataraxia/40. Digital Garden/` (Obsidian vault)
- Destination: `./content/` (real directory, not symlink)
- Pre-commit hook auto-syncs on every commit

### Commands
| Command | Description |
|---------|-------------|
| `npm run sync` | One-time manual sync |
| `npm run watch` | Watch mode - auto-sync on file changes |
| `npm run dev` | Watch + Quartz serve (for development) |

### Files
- `.git/hooks/pre-commit` - Auto-sync hook
- `scripts/watch-content.mjs` - Watch script using chokidar

## Image Policy

### Eagle Library Images
- Eagle stores images at: `~/Documents/Ataraxia.library/images/{ID}.info/`
- When markdown references `file:///...Ataraxia.library/images/...`:
  1. Copy the image to `content/_attachments/` with a descriptive name
  2. Update the markdown path to `/_attachments/{filename}`
- Never commit `file:///` paths - they won't work in production

## Pre-publish Checklist

### Verify with Playwright MCP
Before deploying, always verify the page renders correctly using Playwright:
1. Navigate to the page URL
2. Take a screenshot in both light and dark mode
3. Check for broken images, layout issues, or missing content
4. Only deploy after visual confirmation

