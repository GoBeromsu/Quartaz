import { componentRegistry } from "../../quartz/components/registry"

export type { BreadcrumbOptions } from "./breadcrumbs"
export type { CommentsOptions } from "./comments"
export type { ContentMetaOptions } from "./content-meta"
export type { ContentPageOptions, ContentBodyOptions } from "./content-page"
export type { CrawlLinksOptions } from "./crawl-links"
export type { CreatedModifiedDateOptions } from "./created-modified-date"
export type { DescriptionOptions } from "./description"
export type { FolderPageOptions } from "./folder-page"
export type { GfmOptions } from "./github-flavored-markdown"
export type { GraphLandingPageOptions } from "./graph-landing"
export type { Args, LatexOptions } from "./latex"
export type { ContentDetails, ContentIndexMap } from "./multilingual-content-index"
export type { NotePropertiesComponentOptions, NotePropertiesOptions } from "./note-properties"
export type { ObsidianFlavoredMarkdownOptions } from "./obsidian-flavored-markdown"
export type { ImageOptions, SocialImageFileData, SocialImageOptions, UserOpts } from "./og-image"
export type { SearchField, SearchOptions } from "./search"
export type { SyntaxHighlightingOptions } from "./syntax-highlighting"
export type { TableOfContentsTransformerOptions, TocEntry } from "./table-of-contents"
export type { TagPageOptions } from "./tag-page"
export { ArticleTitle } from "./article-title"
export { BlogFooter, BlogLanguageSwitcher, BlogLinksHeader } from "./blog-chrome"
export { BlogAllTags, BlogArticleList, BlogLatest, BlogStyles } from "./blog-home"
export { Breadcrumbs } from "./breadcrumbs"
export { Comments } from "./comments"
export { ContentMeta } from "./content-meta"
export { ContentBody } from "./content-page"
export { Darkmode } from "./darkmode"
export { FolderPage, FolderContent } from "./folder-page"
export { NotePropertiesComponent } from "./note-properties"
export { CustomOgImagesEmitterName } from "./og-image"
export { PageTitle } from "./page-title"
export { Search } from "./search"
export { tokenClassifierTransformer } from "./syntax-highlighting"
export { TableOfContents } from "./table-of-contents"
export { TagList } from "./tag-list"
export { TagPage, TagContent } from "./tag-page"

export const plugins: Record<string, Record<string, (...args: unknown[]) => void>> = {
  "alias-redirects": {
    AliasRedirects: (...args: unknown[]) => { componentRegistry.setOptionOverrides("alias-redirects", args[0] as Record<string, unknown>); },
  },
  "cname": {
    CNAME: (...args: unknown[]) => { componentRegistry.setOptionOverrides("cname", args[0] as Record<string, unknown>); },
  },
  "content-page": {
    ContentPage: (...args: unknown[]) => { componentRegistry.setOptionOverrides("content-page", args[0] as Record<string, unknown>); },
  },
  "crawl-links": {
    CrawlLinks: (...args: unknown[]) => { componentRegistry.setOptionOverrides("crawl-links", args[0] as Record<string, unknown>); },
  },
  "created-modified-date": {
    CreatedModifiedDate: (...args: unknown[]) => { componentRegistry.setOptionOverrides("created-modified-date", args[0] as Record<string, unknown>); },
  },
  "description": {
    Description: (...args: unknown[]) => { componentRegistry.setOptionOverrides("description", args[0] as Record<string, unknown>); },
  },
  "favicon": {
    Favicon: (...args: unknown[]) => { componentRegistry.setOptionOverrides("favicon", args[0] as Record<string, unknown>); },
  },
  "github-flavored-markdown": {
    GitHubFlavoredMarkdown: (...args: unknown[]) => { componentRegistry.setOptionOverrides("github-flavored-markdown", args[0] as Record<string, unknown>); },
  },
  "latex": {
    Latex: (...args: unknown[]) => { componentRegistry.setOptionOverrides("latex", args[0] as Record<string, unknown>); },
  },
  "multilingual-content-index": {
    ContentIndex: (...args: unknown[]) => { componentRegistry.setOptionOverrides("multilingual-content-index", args[0] as Record<string, unknown>); },
  },
  "note-properties": {
    NoteProperties: (...args: unknown[]) => { componentRegistry.setOptionOverrides("note-properties", args[0] as Record<string, unknown>); },
  },
  "obsidian-flavored-markdown": {
    ObsidianFlavoredMarkdown: (...args: unknown[]) => { componentRegistry.setOptionOverrides("obsidian-flavored-markdown", args[0] as Record<string, unknown>); },
  },
  "og-image": {
    CustomOgImages: (...args: unknown[]) => { componentRegistry.setOptionOverrides("og-image", args[0] as Record<string, unknown>); },
  },
  "remove-draft": {
    RemoveDrafts: (...args: unknown[]) => { componentRegistry.setOptionOverrides("remove-draft", args[0] as Record<string, unknown>); },
  },
  "syntax-highlighting": {
    SyntaxHighlighting: (...args: unknown[]) => { componentRegistry.setOptionOverrides("syntax-highlighting", args[0] as Record<string, unknown>); },
  },
  "table-of-contents": {
    TableOfContentsTransformer: (...args: unknown[]) => { componentRegistry.setOptionOverrides("table-of-contents", args[0] as Record<string, unknown>); },
  },
  "unlisted-pages": {
    UnlistedPages: (...args: unknown[]) => { componentRegistry.setOptionOverrides("unlisted-pages", args[0] as Record<string, unknown>); },
  },
}

export const AliasRedirects = plugins["alias-redirects"].AliasRedirects
export const CNAME = plugins["cname"].CNAME
export const ContentPage = plugins["content-page"].ContentPage
export const CrawlLinks = plugins["crawl-links"].CrawlLinks
export const CreatedModifiedDate = plugins["created-modified-date"].CreatedModifiedDate
export const Description = plugins["description"].Description
export const Favicon = plugins["favicon"].Favicon
export const GitHubFlavoredMarkdown = plugins["github-flavored-markdown"].GitHubFlavoredMarkdown
export const Latex = plugins["latex"].Latex
export const ContentIndex = plugins["multilingual-content-index"].ContentIndex
export const NoteProperties = plugins["note-properties"].NoteProperties
export const ObsidianFlavoredMarkdown = plugins["obsidian-flavored-markdown"].ObsidianFlavoredMarkdown
export const CustomOgImages = plugins["og-image"].CustomOgImages
export const RemoveDrafts = plugins["remove-draft"].RemoveDrafts
export const SyntaxHighlighting = plugins["syntax-highlighting"].SyntaxHighlighting
export const TableOfContentsTransformer = plugins["table-of-contents"].TableOfContentsTransformer
export const UnlistedPages = plugins["unlisted-pages"].UnlistedPages
