import React from 'react';
import { Insight } from '../types/insight.types';
import InsightMeta from './InsightMeta';
import InsightImage from './InsightImage';

interface RelatedInsightsProps {
    insights: Insight[];
    onSelect: (slug: string) => void;
}

export const RelatedInsights: React.FC<RelatedInsightsProps> = ({ insights, onSelect }) => {
    if (!insights || insights.length === 0) return null;

    return (
        <div className="my-16 pt-12 border-t border-zinc-200">
            <h3 className="text-xs uppercase font-mono tracking-widest text-zinc-500 mb-8">
                RELATED INSIGHTS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {insights.map((item) => {
                    const isExternal = Boolean(item.externalUrl);
                    const handleClick = () => {
                        if (isExternal && item.externalUrl) {
                            window.open(item.externalUrl, '_blank', 'noopener,noreferrer');
                        } else {
                            onSelect(item.slug);
                        }
                    };

                    return (
                        <div
                            key={item.id}
                            onClick={handleClick}
                            className="group cursor-pointer bg-white border border-zinc-200 rounded-lg p-6 flex flex-col justify-between hover:border-emerald-600 transition-all shadow-sm"
                            role="article"
                            tabIndex={0}
                        >
                            <div>
                                <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-700 text-xs font-mono uppercase rounded mb-3">
                                    {item.category}
                                </span>

                                <h4 className="text-xl font-light text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                                    {item.title}
                                </h4>

                                <p className="text-sm text-zinc-600 line-clamp-2 mb-6">
                                    {item.excerpt}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                                <InsightMeta
                                    publishedAt={item.publishedAt}
                                    readingTime={item.readingTime}
                                />
                                <span className="text-xs font-mono font-medium text-slate-900 group-hover:text-emerald-600">
                                    {isExternal ? 'Read ↗' : 'Read →'}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RelatedInsights;
