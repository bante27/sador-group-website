import React from 'react';
import { InsightCategory } from '../types/insight.types';

interface InsightsFiltersProps {
    categories: (InsightCategory | 'All')[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export const InsightsFilters: React.FC<InsightsFiltersProps> = ({
    categories,
    activeCategory,
    onSelectCategory,
}) => {
    return (
        <div className="flex flex-wrap items-center gap-2 mb-12">
            {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                    <button
                        key={cat}
                        onClick={() => onSelectCategory(cat)}
                        aria-pressed={isActive}
                        className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full transition-all ${isActive
                                ? 'bg-slate-900 text-white shadow-sm'
                                : 'bg-zinc-200/70 text-zinc-700 hover:bg-zinc-300'
                            }`}
                    >
                        {cat}
                    </button>
                );
            })}
        </div>
    );
};

export default InsightsFilters;
