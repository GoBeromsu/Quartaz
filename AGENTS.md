<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-27 | Updated: 2026-03-27 -->

# Blog

## Purpose
Static blog powered by Quartz v4.5.2, deployed to berom.net via GitHub Pages.

## Key Files

| File | Description |
|------|-------------|
| `quartz.config.ts` | Main Quartz configuration — plugins, theme, analytics |
| `quartz.layout.ts` | Page layout component structure |
| `package.json` | Dependencies and npm scripts (Quartz 4.5.2) |
| `tsconfig.json` | TypeScript configuration |
| `CLAUDE.md` | Project-specific Claude guidelines (URL strategy, image policy, deploy) |
| `Dockerfile` | Docker containerization for builds |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `quartz/` | Quartz SSG framework source — components, plugins, styles, utilities (see `quartz/AGENTS.md`) |
| `content/` | Blog content — articles, about page, attachments (see `content/AGENTS.md`) |
| `docs/` | Quartz documentation and guides (see `docs/AGENTS.md`) |
| `scripts/` | Build and content sync scripts (see `scripts/AGENTS.md`) |
| `public/` | Compiled static HTML output — do not edit directly |
| `Articles/` | Source article markdown files (10 posts) |
| `InBox/` | Draft/work-in-progress articles |
| `.github/` | CI/CD workflows for GitHub Actions deployment |

## For AI Agents

### Working In This Directory
- Read `CLAUDE.md` first — it defines URL strategy (flat permalinks), image policy, and deploy workflow
- Content lives in `content/`; source articles in `Articles/` and `InBox/`
- Branch is `v4`; deploy with `npx quartz build && git push origin v4`
- Never commit `file:///` image paths — copy from Eagle library to `content/_attachments/`

### Testing Requirements
- Run `npx quartz build` to verify builds succeed
- Use Playwright MCP for visual verification before deploy
- Check both light and dark mode rendering

### Common Patterns
- Preact components (JSX with `.tsx` extension)
- SCSS for styling with CSS custom properties
- Plugin architecture: transformers process content, emitters generate output, filters exclude content
- i18n support across 33+ locales

## Dependencies

### External
- Quartz 4.5.2 — static site generator framework
- Preact — UI rendering
- esbuild — bundler
- Shiki — syntax highlighting
- KaTeX — math rendering
- Giscus — GitHub Discussions comments
- D3.js + Pixi.js — graph visualization

<!-- MANUAL: -->
