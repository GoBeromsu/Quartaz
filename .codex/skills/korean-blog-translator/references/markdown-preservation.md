# Markdown Preservation Rules

Preserve these regions exactly unless the user explicitly asks to edit them:

- YAML frontmatter keys and stable identifiers.
- Fenced code blocks and inline code.
- Markdown image paths such as `![](/_attachments/file.png)`.
- Obsidian wikilinks such as `[[Note]]` and `[[Note|Alias]]`.
- Callout markers such as `> [!note]`, including fold state markers.
- URLs, raw HTML, and attachment paths.

Translate human prose outside protected regions. For callouts, keep the marker unchanged and translate only the quoted prose below it when using a real provider.

When a generated file already exists, compare its `sourceHash` to the current Korean source hash before writing. A mismatch means the translation is stale; report it and leave the file untouched.
