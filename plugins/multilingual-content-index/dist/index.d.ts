import { FullSlug, FilePath, SimpleSlug, QuartzEmitterPlugin } from '@quartz-community/types';
export { QuartzEmitterPlugin } from '@quartz-community/types';

type ContentTranslationDetails = {
    readonly translationKey: string;
    readonly locale: string;
    readonly sourceLocale: string;
    readonly translationStatus: string;
    readonly permalink: string;
    readonly localizedPath: string;
    readonly canonicalUrl: string;
};

type ContentIndexMap = Map<FullSlug, ContentDetails>;
type ContentDetails = {
    slug: FullSlug;
    filePath: FilePath;
    title: string;
    links: SimpleSlug[];
    tags: string[];
    externalLinks: string[];
    content: string;
    richContent?: string;
    date?: Date;
    description?: string;
    multilingual?: ContentTranslationDetails;
};
/** Lightweight, graph-only projection of ContentDetails emitted to static/graphIndex.json. */
type GraphIndexEntry = {
    slug: FullSlug;
    title: string;
    links: SimpleSlug[];
    tags: string[];
    externalLinks: string[];
    excerpt: string;
    multilingual?: ContentTranslationDetails;
};
interface Options {
    enableSiteMap: boolean;
    enableRSS: boolean;
    rssLimit?: number;
    rssFullHtml: boolean;
    rssSlug: string;
    includeEmptyFiles: boolean;
    rssRecentNotesText?: string;
    rssLastFewNotesText?: (count: number) => string;
    /**
     * When set, truncate `content` in the emitted contentIndex.json to at most
     * this many characters. Does not affect RSS/sitemap. Default: undefined
     * (full content).
     *
     * Caution: `content` is also the field the search plugin's FlexSearch
     * index is built from and that its result snippets are drawn from. Any
     * text past this cap is dropped before it reaches the index, so it becomes
     * unsearchable — a search for a term that only occurs beyond the cap will
     * not find that page. Choose a value generous enough to cover the terms
     * readers are expected to search for, or leave unset if full-document
     * search matters more than payload size.
     */
    contentMaxChars?: number;
    /** When true, additionally emit a lightweight static/graphIndex.json containing only graph-needed fields with a pre-truncated `excerpt` instead of full `content`. Default: false. */
    emitGraphIndex: boolean;
}
declare const ContentIndex: QuartzEmitterPlugin<Partial<Options>>;

export { type ContentDetails, ContentIndex, type ContentIndexMap, type GraphIndexEntry };
