import { QuartzComponent, QuartzComponentConstructor } from "../../quartz/components/types"

export default (() => {
  const BlogStyles: QuartzComponent = () => null

  BlogStyles.css = `
:root {
  --blog-content-width: 750px;
  --blog-content-inline-offset: 2rem;
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
