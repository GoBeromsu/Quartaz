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
`

  return BlogStyles
}) satisfies QuartzComponentConstructor<undefined>
