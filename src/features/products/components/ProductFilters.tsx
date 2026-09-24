import React from 'react';

interface ProductFiltersProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    totalCount: number;
}

export function ProductFilters({
    categories,
    selectedCategory,
    onSelectCategory,
    totalCount
}: ProductFiltersProps) {
    return (
        <div className="border-b border-zinc-200/80 bg-[#FAF9F6] sticky top-20 z-30 backdrop-blur-md bg-opacity-90">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                    <button
                        onClick={() => onSelectCategory('All')}
                        className={`text-base font-sans px-4 py-2 transition-all relative whitespace-nowrap ${selectedCategory === 'All'
                            ? 'text-[#1d3557] font-medium'
                            : 'text-[#457b9d] hover:text-[#1d3557]'
                            }`}
                    >
                        All
                        {selectedCategory === 'All' && (
                            <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#1d3557]" />
                        )}
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onSelectCategory(category)}
                            className={`text-base font-sans px-4 py-2 transition-all relative whitespace-nowrap ${selectedCategory === category
                                ? 'text-[#1d3557] font-medium'
                                : 'text-[#457b9d] hover:text-[#1d3557]'
                                }`}
                        >
                            {category}
                            {selectedCategory === category && (
                                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#1d3557]" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="text-xs font-bold text-[#71717A] uppercase tracking-wider">
                    Showing <span className="text-[#18181B] font-medium">{totalCount}</span> Products
                </div>
            </div>
        </div>
    );
}

export default ProductFilters;
