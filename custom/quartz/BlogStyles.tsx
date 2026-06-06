import { QuartzComponent, QuartzComponentConstructor } from "../../quartz/components/types"

export default (() => {
  const BlogStyles: QuartzComponent = () => null

  BlogStyles.css = `
:root {
  --blog-accent: #a52142;
  --blog-ink: #0f0f0f;
  --blog-muted: #737373;
  --blog-faint: #b5b5b5;
  --blog-border: #e6e6e6;
  --blog-content-width: 40rem;
  --blog-content-inline-offset: 2rem;
  --blog-font-stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif;
  --blog-mono-stack: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
  --blog-list-indent: 1.8em;
  --blog-list-spacing: 0.075em;
  --blog-paragraph-spacing: 1.75rem;
  --blog-surface: var(--background-primary);
  --blog-text: var(--blog-ink);
  --blog-wide-width: min(88vw, 50rem);
  --blog-link-color: var(--blog-accent);
}

:root[saved-theme="dark"] {
  --blog-ink: #d1d1d1;
  --blog-muted: #8c8c8c;
  --blog-faint: #595959;
  --blog-border: #353535;
  --blog-link-color: #c75b75;
}

body {
  color: var(--blog-ink);
  font-family: var(--blog-font-stack);
  font-size: 16px;
  line-height: 1.5;
}

code,
pre,
kbd,
samp {
  font-family: var(--blog-mono-stack);
}

article,
.markdown-preview-view {
  color: var(--blog-text);
  font-size: 16px;
  line-height: 1.5;
}

article :is(p, ul, ol, blockquote, pre, table, .callout),
.markdown-preview-view :is(p, ul, ol, blockquote, pre, table, .callout) {
  margin-block: 0 var(--blog-paragraph-spacing);
}

article :is(h1, h2, h3, h4, h5, h6),
.markdown-preview-view :is(h1, h2, h3, h4, h5, h6) {
  color: var(--blog-ink);
  font-family: var(--blog-font-stack);
  letter-spacing: 0;
  line-height: 1.2;
  margin-block: 2rem 0.9rem;
}

article :is(h1),
.markdown-preview-view :is(h1) {
  font-size: 2rem;
}

article :is(h2),
.markdown-preview-view :is(h2) {
  font-size: 1.55rem;
}

article :is(h3),
.markdown-preview-view :is(h3) {
  font-size: 1.2rem;
}

article :is(a.internal, a.external),
.markdown-preview-view :is(a.internal, a.external) {
  color: var(--blog-link-color);
  text-decoration: none;
}

article :is(a.internal, a.external):hover,
.markdown-preview-view :is(a.internal, a.external):hover {
  color: var(--text-accent-hover);
  text-decoration: underline;
  text-underline-offset: 0.16em;
}

article :is(ul, ol),
.markdown-preview-view :is(ul, ol) {
  padding-inline-start: var(--blog-list-indent);
}

article li,
.markdown-preview-view li {
  margin-block: var(--blog-list-spacing);
}

article li::marker,
.markdown-preview-view li::marker {
  color: var(--blog-faint);
}

article blockquote,
.markdown-preview-view blockquote {
  border-inline-start: 1px solid var(--blog-border);
  color: var(--blog-muted);
  margin-inline: 0;
  padding-inline: 1rem 0;
}

article :is(img, video, iframe),
.markdown-preview-view :is(img, video, iframe) {
  display: block;
  height: auto;
  margin-inline: auto;
  max-width: var(--blog-wide-width);
}

article :is(pre, table, .block-language-mermaid),
.markdown-preview-view :is(pre, table, .block-language-mermaid) {
  max-width: var(--blog-wide-width);
}

article :is(pre, table),
.markdown-preview-view :is(pre, table) {
  overflow-x: auto;
}

article :is(p:has(.katex), li:has(.katex), .table-container),
.markdown-preview-view :is(p:has(.katex), li:has(.katex), .table-container) {
  max-width: 100%;
  overflow-x: auto;
}

article .table-container > table,
.markdown-preview-view .table-container > table {
  max-width: none;
  width: max-content;
}

article .block-language-mermaid,
.markdown-preview-view .block-language-mermaid {
  overflow-x: auto;
}

.block-language-mermaid .mermaid svg {
  height: auto;
  max-width: none;
  width: auto;
}

.callout {
  --callout-color: var(--color);
  background-color: color-mix(in srgb, var(--callout-color) 6%, transparent);
  border: 1px solid var(--callout-color);
  box-shadow: none;
}

.callout-title {
  padding-block: 0.85rem;
}

.callout-content {
  color: var(--blog-text);
}

[saved-theme="dark"] article img {
  background-color: white;
  border-radius: 8px;
  padding: 0.5rem;
}

.page[data-frame="full-width"] > #quartz-body .center.full-width,
.page[data-frame="full-width"] > #quartz-body > footer {
  box-sizing: border-box;
  margin-inline: auto;
  max-width: var(--blog-content-width);
  min-width: 0;
  width: min(calc(100% - var(--blog-content-inline-offset)), var(--blog-content-width));
}

.page[data-frame="full-width"] .page-header {
  border-bottom: 1px solid var(--blog-border);
  margin-bottom: 2rem;
  padding: 2rem 0;
}

.page-header .page-title {
  color: var(--blog-ink);
}

.page-header .page-title a {
  color: var(--blog-ink);
  text-decoration: none;
}

.page-header .page-title a:hover {
  color: var(--blog-accent);
}

body[data-slug="index"] .page-header {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

body[data-slug="index"] .page-header .popover-hint {
  display: none;
}

@media (max-width: 430px) {
  :root {
    --blog-content-inline-offset: 1.5rem;
  }

  .page-header .flex-component {
    gap: 0.75rem !important;
    width: 100%;
  }

  .page-header .page-title {
    font-size: 1.75rem;
    line-height: 1.1;
  }

  .page-header .search-button {
    padding-inline: 0.5rem;
  }
}
`

  return BlogStyles
}) satisfies QuartzComponentConstructor<undefined>
