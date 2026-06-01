import { QuartzComponent, QuartzComponentConstructor } from "../../quartz/components/types"

export default (() => {
  const BlogStyles: QuartzComponent = () => null

  BlogStyles.css = `
[saved-theme="dark"] article img {
  background-color: white;
  border-radius: 8px;
  padding: 0.5rem;
}

.center.full-width {
  margin: 0 auto;
  max-width: 750px;
}

.page-header {
  border-bottom: 1px solid var(--lightgray);
  margin-bottom: 2rem;
  padding: 2rem 0;
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

  .blog-article-list li {
    align-items: start;
    display: grid;
    gap: 0.35rem;
    grid-template-columns: minmax(6.5rem, auto) 1fr;
  }

  .blog-article-list .date {
    min-width: 0;
  }

  footer ul {
    flex-wrap: wrap;
    row-gap: 0.25rem;
  }
}
`

  return BlogStyles
}) satisfies QuartzComponentConstructor<undefined>
