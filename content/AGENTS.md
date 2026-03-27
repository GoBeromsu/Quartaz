<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-27 | Updated: 2026-03-27 -->

# content

## Purpose
The content directory holds all published markdown articles, blog posts, and metadata for the site. This is the source of truth for the digital garden. Articles are organized by topic (Articles/, InBox/), with shared assets in _attachments/ and index metadata in root-level .md files.

## Key Files
| File | Description |
|------|-------------|
| `index.md` | Homepage/landing page content |
| `About.md` | About page (bio, site description) |

## Subdirectories
| Directory | Purpose |
|-----------|---------|
| `Articles/` | Published articles and blog posts (~12 articles) |
| `InBox/` | Draft/work-in-progress content |
| `_attachments/` | Images, diagrams, and media assets |

## For AI Agents

### Working In This Directory
- All content is markdown with optional YAML frontmatter
- Use `permalink` in frontmatter for SEO-friendly URLs (English, kebab-case)
- All images should be copied to `_attachments/` with descriptive names and referenced via relative path `/_attachments/{filename}`
- Never commit `file:///` paths—they are local-only and break in production
- File structure does not affect URL structure; URLs are determined by `permalink` field only

### Testing Requirements
- Pre-publish: verify page renders correctly in browser
- Check for broken image links, layout issues, missing metadata
- Use Playwright MCP to screenshot in light and dark mode
- Validate frontmatter syntax (YAML)
- Ensure `permalink` values are unique and English-only

### Common Patterns
- **Frontmatter**: `title`, `permalink` (required), `date`, `tags`, `draft` (optional)
- **Markdown**: standard GitHub-flavored markdown
- **Media**: copy to `_attachments/`, reference as `/_attachments/name.ext`
- **Links**: use relative markdown links, Quartz transforms them
- **Drafts**: use `draft: true` to exclude from publication

## Dependencies

### Internal
- Quartz build system consumes content and generates HTML
- Components system reads frontmatter and renders metadata
- Plugin system applies transformations (links, syntax highlighting, etc.)

### External
- Markdown processors (remark, rehype)
- Frontmatter parser (gray-matter)

<!-- MANUAL: -->
