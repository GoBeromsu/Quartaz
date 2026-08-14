import { FullSlug, FilePath, SimpleSlug, QuartzEmitterPlugin } from "@quartz-community/types"
export { QuartzEmitterPlugin } from "@quartz-community/types"

type ContentTranslationDetails = {
  readonly translationKey: string
  readonly locale: string
  readonly sourceLocale: string
  readonly translationStatus: string
  readonly permalink: string
  readonly localizedPath: string
  readonly canonicalUrl: string
}

type ContentIndexMap = Map<FullSlug, ContentDetails>
type ContentDetails = {
  slug: FullSlug
  filePath: FilePath
  title: string
  links: SimpleSlug[]
  tags: string[]
  content: string
  richContent?: string
  date?: Date
  description?: string
  multilingual?: ContentTranslationDetails
}
interface Options {
  enableSiteMap: boolean
  enableRSS: boolean
  rssLimit?: number
  rssFullHtml: boolean
  rssSlug: string
  includeEmptyFiles: boolean
  rssRecentNotesText?: string
  rssLastFewNotesText?: (count: number) => string
}
declare const ContentIndex: QuartzEmitterPlugin<Partial<Options>>

export { type ContentDetails, ContentIndex, type ContentIndexMap }
