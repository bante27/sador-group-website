import { Insight } from '../types/insight.types';
import { insights } from '../data/insights';
import { filterPublishedInsights, sortInsightsByDate } from '../utils/insight.utils';

export const insightService = {
    async getInsights(): Promise<Insight[]> {
        const published = filterPublishedInsights(insights);
        return sortInsightsByDate(published);
    },

    async getInsightBySlug(slug: string): Promise<Insight | null> {
        const all = await this.getInsights();
        const found = all.find((item) => item.slug === slug);
        return found || null;
    },

    async getFeaturedInsight(): Promise<Insight | null> {
        const all = await this.getInsights();
        return all.find((item) => item.featured) || all[0] || null;
    },

    async getRelatedInsights(currentId: string, category: string, tags?: string[]): Promise<Insight[]> {
        const all = await this.getInsights();
        const others = all.filter((item) => item.id !== currentId);

        // Score based on matching category or tags
        const scored = others.map((item) => {
            let score = 0;
            if (item.category === category) score += 2;
            if (tags && item.tags) {
                const matchingTags = item.tags.filter((t) => tags.includes(t));
                score += matchingTags.length;
            }
            return { item, score };
        });

        scored.sort((a, b) => b.score - a.score);
        return scored.slice(0, 2).map((s) => s.item);
    },
};
