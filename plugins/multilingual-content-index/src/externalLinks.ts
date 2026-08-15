import type { Root } from "hast"

interface HastNode {
  type?: string
  tagName?: string
  properties?: {
    href?: unknown
  }
  children?: HastNode[]
}

export function siteHostsFromBaseUrl(baseUrl: string): string[] {
  const trimmed = baseUrl.trim().toLowerCase()
  if (trimmed.length === 0) {
    return []
  }
  const withoutProtocol = trimmed.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
  const withoutWww = withoutProtocol.replace(/^www\./, "")
  if (withoutWww.length === 0) {
    return []
  }
  return [withoutWww, `www.${withoutWww}`]
}

export function siteHostsForBlog(baseUrl: string): string[] {
  const hosts = [...siteHostsFromBaseUrl(baseUrl), ...siteHostsFromBaseUrl("beomsukoh.com")]
  return [...new Set(hosts)]
}

export function normalizeExternalUrl(href: string): string | null {
  try {
    const parsed = new URL(href, "https://quartz.invalid")
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return null
    }
    if (parsed.hostname === "quartz.invalid") {
      return null
    }
    parsed.hash = ""
    parsed.hostname = parsed.hostname.toLowerCase()
    if (parsed.pathname !== "/" && parsed.pathname.endsWith("/")) {
      parsed.pathname = parsed.pathname.replace(/\/+$/, "")
    }
    return parsed.toString()
  } catch {
    return null
  }
}

export function isOutsideSiteUrl(href: string, siteHosts: readonly string[]): boolean {
  const normalized = normalizeExternalUrl(href)
  if (normalized === null) {
    return false
  }
  const hostname = new URL(normalized).hostname
  return !siteHosts.includes(hostname)
}

function hrefOfNode(node: HastNode): string | null {
  if (node.type !== "element" || node.tagName !== "a") {
    return null
  }
  const href = node.properties?.href
  if (typeof href !== "string") {
    return null
  }
  return href
}

function walkHast(node: HastNode, visit: (current: HastNode) => void): void {
  visit(node)
  const children = node.children
  if (!children) {
    return
  }
  for (const child of children) {
    walkHast(child, visit)
  }
}

export function collectExternalLinks(args: { tree: Root; siteHosts: readonly string[] }): string[] {
  const seen = new Set<string>()
  const links: string[] = []
  walkHast(args.tree as HastNode, (node) => {
    const href = hrefOfNode(node)
    if (href === null) {
      return
    }
    const normalized = normalizeExternalUrl(href)
    if (normalized === null) {
      return
    }
    if (!isOutsideSiteUrl(normalized, args.siteHosts)) {
      return
    }
    if (seen.has(normalized)) {
      return
    }
    seen.add(normalized)
    links.push(normalized)
  })
  return links
}
