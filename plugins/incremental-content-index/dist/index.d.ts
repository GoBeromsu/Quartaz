import { FullSlug, FilePath, SimpleSlug, QuartzEmitterPlugin } from '@quartz-community/types';

type ContentIndexMap = Map<FullSlug, ContentDetails>;
type ContentDetails = {
    slug: FullSlug;
    filePath: FilePath;
    title: string;
    links: SimpleSlug[];
    tags: string[];
    content: string;
    date?: Date;
    description?: string;
};
type Options = {
    enableSiteMap: boolean;
    enableRSS: boolean;
    rssLimit: number;
    rssSlug: string;
    includeEmptyFiles: boolean;
    contentMaxChars: number;
    emitGraphIndex: boolean;
    graphIndexMaxNodes: number;
    graphIndexMaxLinksPerNode: number;
};
declare const ContentIndex: QuartzEmitterPlugin<Partial<Options>>;

export { type ContentDetails, ContentIndex, type ContentIndexMap, ContentIndex as default };
