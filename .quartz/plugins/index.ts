import { componentRegistry } from "../../quartz/components/registry"

export type { GraphLandingPageOptions } from "./graph-landing"
export type { NotePropertiesComponentOptions, NotePropertiesOptions } from "@quartz-community/note-properties"
export type { CreatedModifiedDateOptions } from "@quartz-community/created-modified-date"
export type { SyntaxHighlightingOptions } from "@quartz-community/syntax-highlighting"
export type { ObsidianFlavoredMarkdownOptions } from "@quartz-community/obsidian-flavored-markdown"
export type { GfmOptions } from "@quartz-community/github-flavored-markdown"
export type { TableOfContentsTransformerOptions, TocEntry } from "@quartz-community/table-of-contents"
export type { DescriptionOptions } from "@quartz-community/description"
export type { Args, LatexOptions } from "@quartz-community/latex"
export type { ImageOptions, SocialImageFileData, SocialImageOptions, UserOpts } from "@quartz-community/og-image"
export type { ContentPageOptions, ContentBodyOptions } from "@quartz-community/content-page"
export type { FolderPageOptions } from "@quartz-community/folder-page"
export type { TagPageOptions } from "@quartz-community/tag-page"
export type { SearchField, SearchOptions } from "@quartz-community/search"
export type { BreadcrumbOptions } from "@quartz-community/breadcrumbs"
export type { ContentMetaOptions } from "@quartz-community/content-meta"
export type { CommentsOptions } from "@quartz-community/comments"
export { BlogFooter, BlogLinksHeader } from "./blog-chrome"
export { BlogAllTags, BlogArticleList, BlogLatest } from "./blog-home"
export { tokenClassifierTransformer } from "@quartz-community/syntax-highlighting"
export { CustomOgImagesEmitterName } from "@quartz-community/og-image"
export { ContentMeta } from "@quartz-community/content-meta"
import { LocaleRedirect as __quartzPlugin0_LocaleRedirect } from "./blog-chrome"
import { BlogStyles as __quartzPlugin1_BlogStyles } from "./blog-home"
import { NotePropertiesComponent as __quartzPlugin2_NotePropertiesComponent, NoteProperties as __quartzPlugin2_NoteProperties } from "@quartz-community/note-properties"
import { CreatedModifiedDate as __quartzPlugin3_CreatedModifiedDate } from "@quartz-community/created-modified-date"
import { SyntaxHighlighting as __quartzPlugin4_SyntaxHighlighting } from "@quartz-community/syntax-highlighting"
import { ObsidianFlavoredMarkdown as __quartzPlugin5_ObsidianFlavoredMarkdown } from "@quartz-community/obsidian-flavored-markdown"
import { GitHubFlavoredMarkdown as __quartzPlugin6_GitHubFlavoredMarkdown } from "@quartz-community/github-flavored-markdown"
import { TableOfContents as __quartzPlugin7_TableOfContents, TableOfContentsTransformer as __quartzPlugin7_TableOfContentsTransformer } from "@quartz-community/table-of-contents"
import { Description as __quartzPlugin8_Description } from "@quartz-community/description"
import { Latex as __quartzPlugin9_Latex } from "@quartz-community/latex"
import { UnlistedPages as __quartzPlugin10_UnlistedPages } from "@quartz-community/unlisted-pages"
import { AliasRedirects as __quartzPlugin11_AliasRedirects } from "@quartz-community/alias-redirects"
import { Favicon as __quartzPlugin12_Favicon } from "@quartz-community/favicon"
import { CustomOgImages as __quartzPlugin13_CustomOgImages } from "@quartz-community/og-image"
import { CNAME as __quartzPlugin14_CNAME } from "@quartz-community/cname"
import { ContentBody as __quartzPlugin15_ContentBody, ContentPage as __quartzPlugin15_ContentPage } from "@quartz-community/content-page"
import { FolderPage as __quartzPlugin16_FolderPage, FolderContent as __quartzPlugin16_FolderContent } from "@quartz-community/folder-page"
import { TagPage as __quartzPlugin17_TagPage, TagContent as __quartzPlugin17_TagContent } from "@quartz-community/tag-page"
import { PageTitle as __quartzPlugin18_PageTitle } from "@quartz-community/page-title"
import { Search as __quartzPlugin19_Search } from "@quartz-community/search"
import { Darkmode as __quartzPlugin20_Darkmode } from "@quartz-community/darkmode"
import { Breadcrumbs as __quartzPlugin21_Breadcrumbs } from "@quartz-community/breadcrumbs"
import { ArticleTitle as __quartzPlugin22_ArticleTitle } from "@quartz-community/article-title"
import { TagList as __quartzPlugin23_TagList } from "@quartz-community/tag-list"
import { Comments as __quartzPlugin24_Comments } from "@quartz-community/comments"

type AnyFn = (...args: unknown[]) => unknown
export const plugins: Record<string, Record<string, AnyFn>> = {
  "blog-chrome": {
    LocaleRedirect: (...args: unknown[]) => { componentRegistry.setOptionOverrides("blog-chrome", args[0] as Record<string, unknown>); return (__quartzPlugin0_LocaleRedirect as unknown as AnyFn)(...args) },
  },
  "blog-home": {
    BlogStyles: (...args: unknown[]) => { componentRegistry.setOptionOverrides("blog-home", args[0] as Record<string, unknown>); return (__quartzPlugin1_BlogStyles as unknown as AnyFn)(...args) },
  },
  "quartz-community__note-properties": {
    NotePropertiesComponent: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/note-properties", args[0] as Record<string, unknown>); return (__quartzPlugin2_NotePropertiesComponent as unknown as AnyFn)(...args) },
    NoteProperties: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/note-properties", args[0] as Record<string, unknown>); return (__quartzPlugin2_NoteProperties as unknown as AnyFn)(...args) },
  },
  "quartz-community__created-modified-date": {
    CreatedModifiedDate: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/created-modified-date", args[0] as Record<string, unknown>); return (__quartzPlugin3_CreatedModifiedDate as unknown as AnyFn)(...args) },
  },
  "quartz-community__syntax-highlighting": {
    SyntaxHighlighting: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/syntax-highlighting", args[0] as Record<string, unknown>); return (__quartzPlugin4_SyntaxHighlighting as unknown as AnyFn)(...args) },
  },
  "quartz-community__obsidian-flavored-markdown": {
    ObsidianFlavoredMarkdown: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/obsidian-flavored-markdown", args[0] as Record<string, unknown>); return (__quartzPlugin5_ObsidianFlavoredMarkdown as unknown as AnyFn)(...args) },
  },
  "quartz-community__github-flavored-markdown": {
    GitHubFlavoredMarkdown: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/github-flavored-markdown", args[0] as Record<string, unknown>); return (__quartzPlugin6_GitHubFlavoredMarkdown as unknown as AnyFn)(...args) },
  },
  "quartz-community__table-of-contents": {
    TableOfContents: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/table-of-contents", args[0] as Record<string, unknown>); return (__quartzPlugin7_TableOfContents as unknown as AnyFn)(...args) },
    TableOfContentsTransformer: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/table-of-contents", args[0] as Record<string, unknown>); return (__quartzPlugin7_TableOfContentsTransformer as unknown as AnyFn)(...args) },
  },
  "quartz-community__description": {
    Description: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/description", args[0] as Record<string, unknown>); return (__quartzPlugin8_Description as unknown as AnyFn)(...args) },
  },
  "quartz-community__latex": {
    Latex: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/latex", args[0] as Record<string, unknown>); return (__quartzPlugin9_Latex as unknown as AnyFn)(...args) },
  },
  "quartz-community__unlisted-pages": {
    UnlistedPages: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/unlisted-pages", args[0] as Record<string, unknown>); return (__quartzPlugin10_UnlistedPages as unknown as AnyFn)(...args) },
  },
  "quartz-community__alias-redirects": {
    AliasRedirects: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/alias-redirects", args[0] as Record<string, unknown>); return (__quartzPlugin11_AliasRedirects as unknown as AnyFn)(...args) },
  },
  "quartz-community__favicon": {
    Favicon: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/favicon", args[0] as Record<string, unknown>); return (__quartzPlugin12_Favicon as unknown as AnyFn)(...args) },
  },
  "quartz-community__og-image": {
    CustomOgImages: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/og-image", args[0] as Record<string, unknown>); return (__quartzPlugin13_CustomOgImages as unknown as AnyFn)(...args) },
  },
  "quartz-community__cname": {
    CNAME: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/cname", args[0] as Record<string, unknown>); return (__quartzPlugin14_CNAME as unknown as AnyFn)(...args) },
  },
  "quartz-community__content-page": {
    ContentBody: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/content-page", args[0] as Record<string, unknown>); return (__quartzPlugin15_ContentBody as unknown as AnyFn)(...args) },
    ContentPage: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/content-page", args[0] as Record<string, unknown>); return (__quartzPlugin15_ContentPage as unknown as AnyFn)(...args) },
  },
  "quartz-community__folder-page": {
    FolderPage: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/folder-page", args[0] as Record<string, unknown>); return (__quartzPlugin16_FolderPage as unknown as AnyFn)(...args) },
    FolderContent: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/folder-page", args[0] as Record<string, unknown>); return (__quartzPlugin16_FolderContent as unknown as AnyFn)(...args) },
  },
  "quartz-community__tag-page": {
    TagPage: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/tag-page", args[0] as Record<string, unknown>); return (__quartzPlugin17_TagPage as unknown as AnyFn)(...args) },
    TagContent: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/tag-page", args[0] as Record<string, unknown>); return (__quartzPlugin17_TagContent as unknown as AnyFn)(...args) },
  },
  "quartz-community__page-title": {
    PageTitle: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/page-title", args[0] as Record<string, unknown>); return (__quartzPlugin18_PageTitle as unknown as AnyFn)(...args) },
  },
  "quartz-community__search": {
    Search: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/search", args[0] as Record<string, unknown>); return (__quartzPlugin19_Search as unknown as AnyFn)(...args) },
  },
  "quartz-community__darkmode": {
    Darkmode: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/darkmode", args[0] as Record<string, unknown>); return (__quartzPlugin20_Darkmode as unknown as AnyFn)(...args) },
  },
  "quartz-community__breadcrumbs": {
    Breadcrumbs: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/breadcrumbs", args[0] as Record<string, unknown>); return (__quartzPlugin21_Breadcrumbs as unknown as AnyFn)(...args) },
  },
  "quartz-community__article-title": {
    ArticleTitle: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/article-title", args[0] as Record<string, unknown>); return (__quartzPlugin22_ArticleTitle as unknown as AnyFn)(...args) },
  },
  "quartz-community__tag-list": {
    TagList: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/tag-list", args[0] as Record<string, unknown>); return (__quartzPlugin23_TagList as unknown as AnyFn)(...args) },
  },
  "quartz-community__comments": {
    Comments: (...args: unknown[]) => { componentRegistry.setOptionOverrides("@quartz-community/comments", args[0] as Record<string, unknown>); return (__quartzPlugin24_Comments as unknown as AnyFn)(...args) },
  },
}

export const LocaleRedirect = plugins["blog-chrome"].LocaleRedirect as unknown as typeof __quartzPlugin0_LocaleRedirect
export const BlogStyles = plugins["blog-home"].BlogStyles as unknown as typeof __quartzPlugin1_BlogStyles
export const NotePropertiesComponent = plugins["quartz-community__note-properties"].NotePropertiesComponent as unknown as typeof __quartzPlugin2_NotePropertiesComponent
export const NoteProperties = plugins["quartz-community__note-properties"].NoteProperties as unknown as typeof __quartzPlugin2_NoteProperties
export const CreatedModifiedDate = plugins["quartz-community__created-modified-date"].CreatedModifiedDate as unknown as typeof __quartzPlugin3_CreatedModifiedDate
export const SyntaxHighlighting = plugins["quartz-community__syntax-highlighting"].SyntaxHighlighting as unknown as typeof __quartzPlugin4_SyntaxHighlighting
export const ObsidianFlavoredMarkdown = plugins["quartz-community__obsidian-flavored-markdown"].ObsidianFlavoredMarkdown as unknown as typeof __quartzPlugin5_ObsidianFlavoredMarkdown
export const GitHubFlavoredMarkdown = plugins["quartz-community__github-flavored-markdown"].GitHubFlavoredMarkdown as unknown as typeof __quartzPlugin6_GitHubFlavoredMarkdown
export const TableOfContents = plugins["quartz-community__table-of-contents"].TableOfContents as unknown as typeof __quartzPlugin7_TableOfContents
export const TableOfContentsTransformer = plugins["quartz-community__table-of-contents"].TableOfContentsTransformer as unknown as typeof __quartzPlugin7_TableOfContentsTransformer
export const Description = plugins["quartz-community__description"].Description as unknown as typeof __quartzPlugin8_Description
export const Latex = plugins["quartz-community__latex"].Latex as unknown as typeof __quartzPlugin9_Latex
export const UnlistedPages = plugins["quartz-community__unlisted-pages"].UnlistedPages as unknown as typeof __quartzPlugin10_UnlistedPages
export const AliasRedirects = plugins["quartz-community__alias-redirects"].AliasRedirects as unknown as typeof __quartzPlugin11_AliasRedirects
export const Favicon = plugins["quartz-community__favicon"].Favicon as unknown as typeof __quartzPlugin12_Favicon
export const CustomOgImages = plugins["quartz-community__og-image"].CustomOgImages as unknown as typeof __quartzPlugin13_CustomOgImages
export const CNAME = plugins["quartz-community__cname"].CNAME as unknown as typeof __quartzPlugin14_CNAME
export const ContentBody = plugins["quartz-community__content-page"].ContentBody as unknown as typeof __quartzPlugin15_ContentBody
export const ContentPage = plugins["quartz-community__content-page"].ContentPage as unknown as typeof __quartzPlugin15_ContentPage
export const FolderPage = plugins["quartz-community__folder-page"].FolderPage as unknown as typeof __quartzPlugin16_FolderPage
export const FolderContent = plugins["quartz-community__folder-page"].FolderContent as unknown as typeof __quartzPlugin16_FolderContent
export const TagPage = plugins["quartz-community__tag-page"].TagPage as unknown as typeof __quartzPlugin17_TagPage
export const TagContent = plugins["quartz-community__tag-page"].TagContent as unknown as typeof __quartzPlugin17_TagContent
export const PageTitle = plugins["quartz-community__page-title"].PageTitle as unknown as typeof __quartzPlugin18_PageTitle
export const Search = plugins["quartz-community__search"].Search as unknown as typeof __quartzPlugin19_Search
export const Darkmode = plugins["quartz-community__darkmode"].Darkmode as unknown as typeof __quartzPlugin20_Darkmode
export const Breadcrumbs = plugins["quartz-community__breadcrumbs"].Breadcrumbs as unknown as typeof __quartzPlugin21_Breadcrumbs
export const ArticleTitle = plugins["quartz-community__article-title"].ArticleTitle as unknown as typeof __quartzPlugin22_ArticleTitle
export const TagList = plugins["quartz-community__tag-list"].TagList as unknown as typeof __quartzPlugin23_TagList
export const Comments = plugins["quartz-community__comments"].Comments as unknown as typeof __quartzPlugin24_Comments
