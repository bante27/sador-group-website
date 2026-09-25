import React from 'react';

interface ProjectFiltersProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
    categories,
    activeCategory,
    onSelectCategory,
}) => {
    return (
        <div className="flex flex-wrap items-center gap-2 mb-12">
            {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                    <button
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        aria-pressed={isActive}
                        className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full transition-all ${
                            isActive
                                ? 'bg-slate-900 text-white shadow-sm'
                                : 'bg-zinc-200/70 text-zinc-700 hover:bg-zinc-300'
                        }`}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default ProjectFilters;
