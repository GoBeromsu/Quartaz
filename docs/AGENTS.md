<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-27 | Updated: 2026-03-27 -->

# docs

## Purpose
Documentation for Quartz v4.5.2—guides for users, theme developers, and plugin authors. Covers configuration, features, plugins, hosting, and advanced customization. This is the user-facing reference material, separate from source code.

## Key Files
| File | Description |
|------|-------------|
| `index.md` | Documentation homepage and getting started |
| `configuration.md` | Global config options (theme, analytics, locale, etc.) |
| `authoring content.md` | Markdown syntax, frontmatter, callouts |
| `build.md` | Build process overview |
| `hosting.md` | Deployment options (GitHub Pages, Netlify, Vercel, etc.) |
| `layout.md` | Layout system and page structure |
| `layout-components.md` | Available layout components |
| `philosophy.md` | Quartz design philosophy |
| `upgrading.md` | Migration guide from v3 to v4 |

## Subdirectories
| Directory | Purpose |
|-----------|---------|
| `advanced/` | Advanced configuration, custom plugins, performance tuning |
| `features/` | Feature documentation (search, graph, backlinks, etc.) |
| `plugins/` | Plugin reference documentation |
| `images/` | Screenshots and diagrams (17 images) |
| `tags/` | Tag-based navigation (documentation index) |

## For AI Agents

### Working In This Directory
- This is documentation, not source code—changes here are user-facing
- Use markdown with frontmatter for metadata
- Include code examples (YAML config, TypeScript for plugins)
- Reference source code files by path for technical accuracy
- Organize by user intent: beginners → advanced → reference

### Testing Requirements
- Build and serve docs locally: `npm run docs`
- Verify code examples are syntactically correct
- Check all internal links resolve
- Verify screenshots are current and accurate
- Ensure navigation (breadcrumbs, sidebars) works

### Common Patterns
- **Code blocks**: Use ```yaml, ```typescript, ```markdown syntax
- **Links**: reference source files, features, or other docs
- **Callouts**: use blockquote syntax for tips, warnings, info
- **Headings**: hierarchical (H1 = section, H2 = topic, H3 = details)

## Dependencies

### Internal
- Quartz components and plugins (documented here)
- Configuration system (documented in configuration.md)
- Build system (documented in build.md)

### External
- Users of Quartz who need setup and customization guides

<!-- MANUAL: -->
