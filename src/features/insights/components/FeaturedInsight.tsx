import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Insight } from '../types/insight.types';
import InsightMeta from './InsightMeta';

interface FeaturedInsightProps {
    insight: Insight | null;
    onSelect: (slug: string) => void;
}

export const FeaturedInsight: React.FC<FeaturedInsightProps> = ({
    insight,
    onSelect,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const revealLayerRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    if (!insight) return null;

    const isExternal = Boolean(insight.externalUrl);

    const handleClick = () => {
        if (isExternal && insight.externalUrl) {
            window.open(insight.externalUrl, '_blank', 'noopener,noreferrer');
        } else {
            onSelect(insight.slug);
        }
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const prefersReducedMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches;

            if (prefersReducedMotion) {
                if (revealLayerRef.current) {
                    gsap.set(revealLayerRef.current, { clipPath: 'inset(0 100% 0 0)' });
                }
                return;
            }

            if (revealLayerRef.current) {
                tlRef.current = gsap.timeline({
                    paused: true,
                    defaults: {
                        duration: 0.8,
                        ease: 'power3.inOut',
                    },
                });

                tlRef.current.fromTo(
                    revealLayerRef.current,
                    { clipPath: 'inset(0 100% 0 0)' },
                    { clipPath: 'inset(0 0% 0 0)' }
                );
            }
        }, cardRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = () => {
        if (tlRef.current) {
            tlRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (tlRef.current) {
            tlRef.current.reverse();
        }
    };

    return (
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-xs uppercase font-mono tracking-[0.2em] text-emerald-700 font-semibold">
                    FEATURED PUBLICATION
                </span>
            </div>

            <div
                ref={cardRef}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative cursor-pointer overflow-hidden border border-zinc-200 rounded-xl shadow-sm bg-[#F4F7F5]"
                role="article"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleClick();
                    }
                }}
            >
                {/* BASE LAYER */}
                <div className="p-8 flex flex-col justify-between space-y-6 select-none">
                    <div>
                        <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-mono uppercase rounded mb-4 font-medium">
                            {insight.category}
                        </span>

                        <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
                            {insight.title}
                        </h2>

                        <p className="text-slate-800 text-lg font-medium leading-relaxed mb-4">
                            {insight.excerpt}
                        </p>

                        {insight.content && (
                            <p className="text-slate-700 text-base font-normal leading-relaxed">
                                {insight.content}
                            </p>
                        )}
                    </div>

                    <div className="pt-6 border-t border-zinc-300">
                        <InsightMeta
                            publishedAt={insight.publishedAt}
                            readingTime={insight.readingTime}
                            location={insight.location}
                            eventDate={insight.eventDate}
                        />
                    </div>
                </div>

                {/* REVEAL LAYER */}
                <div
                    ref={revealLayerRef}
                    className="absolute inset-0 bg-[#064E3B] text-white p-8 flex flex-col justify-between space-y-6 pointer-events-none"
                    style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                    <div>
                        <span className="inline-block px-3 py-1 bg-white/15 text-white border border-white/20 text-xs font-mono uppercase rounded mb-4 font-medium">
                            {insight.category}
                        </span>

                        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
                            {insight.title}
                        </h2>

                        <p className="text-emerald-100 text-lg font-medium leading-relaxed mb-4">
                            {insight.excerpt}
                        </p>

                        {insight.content && (
                            <p className="text-emerald-200 text-base font-normal leading-relaxed">
                                {insight.content}
                            </p>
                        )}
                    </div>

                    <div className="pt-6 border-t border-white/20">
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
