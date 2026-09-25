import React from 'react';
import { Insight } from '../types/insight.types';
import InsightMeta from './InsightMeta';
import InsightImage from './InsightImage';
import RelatedInsights from './RelatedInsights';

interface InsightDetailsProps {
    insight: Insight;
    relatedInsights: Insight[];
    onBack: () => void;
    onSelectInsight: (slug: string) => void;
}

export const InsightDetails: React.FC<InsightDetailsProps> = ({
    insight,
    relatedInsights,
    onBack,
    onSelectInsight,
}) => {
    return (
        <article className="py-12 px-6 md:px-12 max-w-4xl mx-auto animate-fade-in">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-zinc-600 hover:text-slate-900 mb-12 transition-colors"
            >
                <span>←</span> Back to Insights
            </button>

            <div className="border-t border-zinc-300 pt-8 mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-700">
                    {insight.category}
                </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-8 leading-tight">
                {insight.title}
            </h1>

            {/* Metadata Bar */}
            <div className="py-6 border-y border-zinc-200 mb-10">
                <InsightMeta
                    publishedAt={insight.publishedAt}
                    readingTime={insight.readingTime}
                    author={insight.author}
                    location={insight.location}
                    eventDate={insight.eventDate}
                />
            </div>

            {/* Hero Image */}
            {insight.image && (
                <div className="mb-12 rounded-xl overflow-hidden max-h-[500px]">
                    <InsightImage
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Content Body */}
            <div className="prose prose-lg max-w-none text-slate-700 space-y-6 font-normal leading-relaxed mb-16">
                {insight.content ? (
                    insight.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))
                ) : (
                    <p>{insight.excerpt}</p>
                )}
            </div>

            {/* Tags */}
            {insight.tags && insight.tags.length > 0 && (
                <div className="pt-8 border-t border-zinc-200 mb-12">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
                        TAGS
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {insight.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1.5 bg-zinc-100 text-zinc-800 text-xs font-mono rounded border border-zinc-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Related Insights */}
            <RelatedInsights insights={relatedInsights} onSelect={onSelectInsight} />
        </article>
    );
};

export default InsightDetails;
