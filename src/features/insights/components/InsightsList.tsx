import React, { useState, useMemo, useLayoutEffect, useRef } from 'react';
import { Insight, InsightCategory } from '../types/insight.types';
import InsightItem from './InsightItem';
import InsightsFilters from './InsightsFilters';
import gsap from 'gsap';

interface InsightsListProps {
    insights: Insight[];
    onSelectInsight: (slug: string) => void;
}

export const InsightsList: React.FC<InsightsListProps> = ({ insights, onSelectInsight }) => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const listRef = useRef<HTMLDivElement>(null);

    const categories = useMemo(() => {
        const set = new Set<string>();
        set.add('All');
        insights.forEach((i) => {
            if (i.category) set.add(i.category);
        });
        return Array.from(set) as (InsightCategory | 'All')[];
    }, [insights]);

    const filteredInsights = useMemo(() => {
        if (activeCategory === 'All') return insights;
        return insights.filter((i) => i.category === activeCategory);
    }, [insights, activeCategory]);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.insight-row-item',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    stagger: 0.08,
                    ease: 'power3.out',
                }
            );
        }, listRef);

        return () => ctx.revert();
    }, [activeCategory]);

    if (insights.length === 0) {
        return (
            <div className="py-16 text-center text-zinc-500 font-mono text-sm">
                Insights are coming soon.
            </div>
        );
    }

    return (
        <section ref={listRef} className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
            <InsightsFilters
                categories={categories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
            />

            <div className="flex flex-col">
                {filteredInsights.map((insight, index) => (
                    <div key={insight.id} className="insight-row-item">
                        <InsightItem
                            insight={insight}
                            index={index}
                            onSelect={onSelectInsight}
                        />
                    </div>
                ))}

                {filteredInsights.length === 0 && (
                    <div className="py-16 text-center text-zinc-500 font-mono text-sm">
                        No insights found in this category.
                    </div>
                )}
            </div>
        </section>
    );
};

export default InsightsList;
