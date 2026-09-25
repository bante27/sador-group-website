import { Insight } from '../types/insight.types';

export const sortInsightsByDate = (items: Insight[]): Insight[] => {
    return [...items].sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
};

export const filterPublishedInsights = (items: Insight[]): Insight[] => {
    return items.filter((item) => item.status === 'published' || item.status === undefined);
};

export const searchInsights = (items: Insight[], query: string): Insight[] => {
    if (!query || query.trim() === '') return items;
    const q = query.toLowerCase();
    return items.filter((item) => {
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchExcerpt = item.excerpt.toLowerCase().includes(q);
        const matchCategory = item.category.toLowerCase().includes(q);
        const matchTags = item.tags?.some((t) => t.toLowerCase().includes(q));
        return matchTitle || matchExcerpt || matchCategory || matchTags;
    });
};

export const formatDate = (dateString: string): string => {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).toUpperCase();
    } catch {
        return dateString;
    }
};
