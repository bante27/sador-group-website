export type InsightCategory =
    | 'News'
    | 'Product'
    | 'Technology'
    | 'Events'
    | 'Updates'
    | 'Blog';

export interface InsightSEO {
    title?: string;
    description?: string;
    image?: string;
}

export interface Insight {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content?: string;
    category: InsightCategory;
    author?: string;
    publishedAt: string;
    updatedAt?: string;
    featured?: boolean;
    image?: string;
    thumbnail?: string;
    readingTime?: number;
    tags?: string[];
    location?: string;
    eventDate?: string;
    externalUrl?: string;
    status?: 'published' | 'draft';
    seo?: InsightSEO;
}
