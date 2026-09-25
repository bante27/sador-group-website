import React, { useEffect, useState } from 'react';
import { Insight } from '../types/insight.types';
import { insightService } from '../services/insightService';
import InsightsHero from './InsightsHero';
import FeaturedInsight from './FeaturedInsight';
import InsightsList from './InsightsList';
import InsightDetails from './InsightDetails';
import InsightsCTA from './InsightsCTA';

interface InsightsSectionProps {
    initialSlug?: string;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ initialSlug }) => {
    const [insights, setInsights] = useState<Insight[]>([]);
    const [featured, setFeatured] = useState<Insight | null>(null);
    const [selectedSlug, setSelectedSlug] = useState<string | null>(initialSlug || null);
    const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);
    const [related, setRelated] = useState<Insight[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        async function loadData() {
            try {
                const all = await insightService.getInsights();
                const feat = await insightService.getFeaturedInsight();
                if (isMounted) {
                    setInsights(all);
                    setFeatured(feat);
                }
            } catch {
                // handle error gracefully
            } finally {
                if (isMounted) setLoading(false);
            }
        }
        loadData();
        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        let isMounted = true;
        async function loadDetail() {
            if (selectedSlug) {
                const item = await insightService.getInsightBySlug(selectedSlug);
                if (item && isMounted) {
                    setSelectedInsight(item);
                    const rel = await insightService.getRelatedInsights(item.id, item.category, item.tags);
                    setRelated(rel);
                }
            } else {
                setSelectedInsight(null);
                setRelated([]);
            }
        }
        loadDetail();
        return () => {
            isMounted = false;
        };
    }, [selectedSlug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center text-zinc-500 font-mono text-sm">
                Loading insights...
            </div>
        );
    }

    return (
        <div className="bg-[#FAF9F6] min-h-screen text-[#18181B] selection:bg-emerald-600 selection:text-white">
            <InsightsHero />

            {selectedInsight ? (
                <InsightDetails
                    insight={selectedInsight}
                    relatedInsights={related}
                    onBack={() => setSelectedSlug(null)}
                    onSelectInsight={(slug) => setSelectedSlug(slug)}
                />
            ) : (
                <>
                    <FeaturedInsight
                        insight={featured}
                        onSelect={(slug) => setSelectedSlug(slug)}
                    />

                    <InsightsList
                        insights={insights}
                        onSelectInsight={(slug) => setSelectedSlug(slug)}
                    />
                </>
            )}

            <InsightsCTA />
        </div>
    );
};

export default InsightsSection;
