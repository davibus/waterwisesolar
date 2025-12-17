import crawlData from '@/data/crawl.json';

export interface PageMetadata {
    title: string | null;
    description: string | null;
    url: string;
    published_time?: string | null;
    og_image?: string | null;
}

export interface PageData {
    markdown: string;
    html: string;
    metadata: PageMetadata;
}

export function getAllPages(): PageData[] {
    // @ts-ignore
    const data = crawlData.data as PageData[];

    return data.filter(page => {
        // Filter out sitemaps and non-content pages
        if (!page.metadata.url) return false;
        if (page.metadata.url.endsWith('.xml')) return false;
        if (!page.metadata.title) return false;
        return true;
    });
}

export function getPageBySlug(slugPath: string[]): PageData | undefined {
    const pages = getAllPages();
    // clean up slugPath
    const path = '/' + slugPath.join('/');

    return pages.find(page => {
        let url = page.metadata.url;
        // Normalized check
        // Remove domain
        let relativeUrl = url.replace('https://waterwisesolar.com', '').replace('http://waterwisesolar.com', '');
        if (relativeUrl === '') relativeUrl = '/';

        // exact match
        if (relativeUrl === path) return true;

        // try with trailing slash or without
        if (relativeUrl.replace(/\/$/, '') === path.replace(/\/$/, '')) return true;

        return false;
    });
}

export function getHomePage(): PageData | undefined {
    const pages = getAllPages();
    return pages.find(page => page.metadata.url === 'https://waterwisesolar.com/' || page.metadata.url === 'https://waterwisesolar.com');
}
