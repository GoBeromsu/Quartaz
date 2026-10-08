// Pages that are site chrome, not articles: never list them.
export const isUtilitySlug = (slug?: string): boolean =>
  slug === "index" || slug === "writing" || slug === "graph" || slug === "about"
