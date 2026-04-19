function normalizeLegacyDateKeys(src) {
  const frontmatterMatch = src.match(/^---\r?\n[\s\S]*?\r?\n---(\r?\n|$)/)
  if (!frontmatterMatch) {
    return src
  }

  const frontmatter = frontmatterMatch[0]
    .replace(/^date_created(?=\s*:)/m, "created")
    .replace(/^date_modified(?=\s*:)/m, "modified")

  return `${frontmatter}${src.slice(frontmatterMatch[0].length)}`
}

const LegacyFrontmatterDates = () => ({
  name: "LegacyFrontmatterDates",
  textTransform(_ctx, src) {
    return normalizeLegacyDateKeys(src)
  },
})

export default LegacyFrontmatterDates
