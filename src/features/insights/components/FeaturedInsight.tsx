import React from 'react';
import { Insight } from '../types/insight.types';
import InsightMeta from './InsightMeta';
import InsightImage from './InsightImage';

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
        <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-6">
                <span className="text-xs uppercase font-mono tracking-[0.2em] text-emerald-700">
                    FEATURED PUBLICATION
                </span>
            </div>

            <div
                onClick={handleClick}
                className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F4F7F5] border border-zinc-200 rounded-xl p-8 transition-all hover:border-emerald-600/50"
                role="article"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleClick();
                    }
                }}
            >
                {/* Left: Image */}
                <div className="lg:col-span-7 h-72 md:h-96 rounded-lg overflow-hidden">
                    <InsightImage
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div>
                        <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-mono uppercase rounded mb-4">
                            {insight.category}
                        </span>

                        <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-4 group-hover:text-emerald-700 transition-colors">
                            {insight.title}
                        </h2>

                        <p className="text-zinc-600 text-base font-normal leading-relaxed mb-6 line-clamp-3">
                            {insight.excerpt}
                        </p>
                    </div>

                    <div className="pt-6 border-t border-zinc-300 flex items-center justify-between">
                        <InsightMeta
                            publishedAt={insight.publishedAt}
                            readingTime={insight.readingTime}
                            location={insight.location}
                            eventDate={insight.eventDate}
                        />

                        <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-emerald-600 transition-colors">
                            {isExternal ? 'Read Article ↗' : 'Read Article →'}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedInsight;
