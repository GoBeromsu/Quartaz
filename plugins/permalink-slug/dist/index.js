// `permalink: foo` in frontmatter publishes the note at /foo regardless of
// its folder. Runs after the frontmatter transformer (order 6), which has
// already pushed the permalink into `file.data.aliases`; that alias is
// dropped here so alias-redirects does not overwrite the page with a stub.
const PermalinkSlug = () => ({
  name: "PermalinkSlug",
  markdownPlugins() {
    return [
      () => (_tree, file) => {
        const permalink = file.data.frontmatter?.permalink
        if (typeof permalink !== "string" || permalink.trim() === "") return
        const slug = permalink.trim().replace(/^\/+|\/+$/g, "")
        file.data.slug = slug
        if (file.data.aliases) {
          file.data.aliases = file.data.aliases.filter((alias) => alias !== slug)
        }
      },
    ]
  },
})
export default PermalinkSlug
