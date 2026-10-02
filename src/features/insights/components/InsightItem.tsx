import React, { useState } from 'react';
import { Insight } from '../types/insight.types';
import InsightMeta from './InsightMeta';

interface InsightItemProps {
    insight: Insight;
    index: number;
    onSelect: (slug: string) => void;
}

export const InsightItem: React.FC<InsightItemProps> = ({ insight, index, onSelect }) => {
    const [isHovered, setIsHovered] = useState(false);
    const formattedIndex = String(index + 1).padStart(2, '0');
    const isExternal = Boolean(insight.externalUrl);

    const handleClick = () => {
        if (isExternal && insight.externalUrl) {
            window.open(insight.externalUrl, '_blank', 'noopener,noreferrer');
        } else {
            onSelect(insight.slug);
        }
    };

    return (
        <div
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative cursor-pointer bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:border-emerald-600 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between"
            role="article"
            tabIndex={0}
            aria-label={`Read ${insight.title}`}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                }
            }}
        >
            {/* Content info */}
            <div className="flex-1 flex flex-col justify-between space-y-3">
                <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {formattedIndex}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-medium">
                        {insight.category}
                    </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                    {insight.title}
                </h3>

                {insight.excerpt && (
                    <p className="text-zinc-600 text-sm md:text-base line-clamp-2 leading-relaxed">
                        {insight.excerpt}
                    </p>
                )}

                <div className="pt-2">
                    <InsightMeta
                        publishedAt={insight.publishedAt}
                        readingTime={insight.readingTime}
                        location={insight.location}
                        eventDate={insight.eventDate}
                    />
                </div>
            </div>

            {/* Action Arrow */}
            <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-slate-900 bg-zinc-50 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300 shrink-0 self-end md:self-center">
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">→</span>
            </div>
        </div>
    );
};

export default InsightItem;
