import React from 'react';
import { Insight } from '../types/insight.types';
import InsightMeta from './InsightMeta';

interface FeaturedInsightProps {
    insight: Insight | null;
    onSelect: (slug: string) => void;
}

export const FeaturedInsight: React.FC<FeaturedInsightProps> = ({ insight, onSelect }) => {
    if (!insight) return null;

    const isExternal = Boolean(insight.externalUrl);

    const handleClick = () => {
        if (isExternal && insight.externalUrl) {
            window.open(insight.externalUrl, '_blank', 'noopener,noreferrer');
        } else {
            onSelect(insight.slug);
        }
    };

    return (
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-6">
                <span className="text-xs uppercase font-mono tracking-[0.2em] text-emerald-700 font-semibold">
                    FEATURED PUBLICATION
                </span>
            </div>

            <div
                onClick={handleClick}
                className="cursor-default bg-gradient-to-r from-[#F4F7F5] via-white to-[#F4F7F5] border border-zinc-200 rounded-xl p-8 shadow-sm"
                role="article"
                tabIndex={0}
            >
                {/* Content */}
                <div className="flex flex-col justify-between space-y-6">
                    <div>
                        <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-mono uppercase rounded mb-4 font-medium">
                            {insight.category}
                        </span>

                        <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
                            {insight.title}
                        </h2>

                        <div className="text-slate-800 text-lg font-medium leading-relaxed space-y-4">
                            <p>{insight.excerpt}</p>
                            {insight.content && (
                                <p className="text-slate-700 text-base font-normal">
                                    {insight.content}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-300 flex items-center justify-between">
                        <InsightMeta
                            publishedAt={insight.publishedAt}
                            readingTime={insight.readingTime}
                            location={insight.location}
                            eventDate={insight.eventDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedInsight;
