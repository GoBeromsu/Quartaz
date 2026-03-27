<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-27 | Updated: 2026-03-27 -->

# quartz/components

## Purpose
Preact UI components for rendering the entire website. Includes layout structure (Header, Footer, Body), metadata display (ContentMeta, Date, ArticleTitle), navigation (Breadcrumbs, Explorer, Backlinks), interactive features (Search, Graph, TableOfContents), and utility components (Flex, Spacer, DesktopOnly, MobileOnly).

## Key Files
| File | Description |
|------|-------------|
| `renderPage.tsx` | Main entry point for rendering pages; composes layout |
| `Head.tsx` | `<head>` tags: meta, title, scripts, styles |
| `Body.tsx` | Main content body wrapper |
| `Header.tsx` | Top navigation/header bar |
| `Footer.tsx` | Footer element |
| `index.ts` | Component export manifest |
| `types.ts` | QuartzComponent interface and types |

## Subdirectories
| Directory | Purpose |
|-----------|---------|
| `pages/` | Page-specific components (ArticleList, Latest) |
| `scripts/` | Client-side JavaScript bundles (search, graph, interactions) |
| `styles/` | Component-scoped SCSS |

## For AI Agents

### Working In This Directory
- All components are Preact functional components (not React)
- Components must conform to `QuartzComponent` interface
- Props come from BuildCtx and site configuration
- Components are rendered to HTML strings via `preact-render-to-string`
- Use TypeScript for type safety
- Import utilities from `../util/` for paths, themes, logging

### Testing Requirements
- Render component to HTML string and verify output
- Test with different props (mobile/desktop, light/dark mode)
- Verify component integrates with layout system
- Check client-side scripts don't break without JavaScript
- No external API calls from components

### Common Patterns
- **Props**: `{ displayClass?: string; options?: T }`
- **Children**: Preact components can contain child components
- **Styling**: scoped SCSS files, CSS modules pattern
- **Client scripts**: lazy-loaded in `scripts/` directory
- **Utilities**: use `../util/` for paths, themes, icons

## Dependencies

### Internal
- `./pages/` - page-specific layouts
- `./scripts/` - client-side interactivity
- `./styles/` - component styling
- `../util/` - shared utilities, paths, themes

### External
- `preact` - UI component framework
- `preact-render-to-string` - server-side rendering
- D3.js (in Graph component)
- KaTeX (for math rendering)
- Shiki (for syntax highlighting integration)

<!-- MANUAL: -->
