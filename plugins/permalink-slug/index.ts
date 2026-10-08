import type { QuartzTransformerPlugin } from "../../quartz/plugins/types"

// `permalink: foo` in frontmatter publishes the note at /foo regardless of
// its folder. Runs after the frontmatter transformer (order 6), which has
// already pushed the permalink into `file.data.aliases`; that alias is
// dropped here so alias-redirects does not overwrite the page with a stub.
const PermalinkSlug: QuartzTransformerPlugin = () => ({
  name: "PermalinkSlug",
  markdownPlugins() {
    return [
      () => (_tree, file) => {
        const permalink = (file.data.frontmatter as Record<string, unknown> | undefined)?.permalink
        if (typeof permalink !== "string" || permalink.trim() === "") return
        const slug = permalink.trim().replace(/^\/+|\/+$/g, "")
        file.data.slug = slug as typeof file.data.slug
        const aliases = file.data.aliases as string[] | undefined
        if (aliases)
          file.data.aliases = aliases.filter((alias) => alias !== slug) as typeof file.data.aliases
      },
    ]
  },
})

export default PermalinkSlug
