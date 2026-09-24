import React from 'react';

interface ProductSearchProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export function ProductSearch({ searchQuery, onSearchChange }: ProductSearchProps) {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
            <div className="relative">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search products by name, category, or features..."
                    className="w-full bg-[#FAF9F6] border border-zinc-300 rounded-lg px-4 py-3 pl-10 text-sm font-sans text-[#1d3557] focus:outline-none focus:border-[#1d3557] transition-colors shadow-sm"
                />
                <span className="absolute left-3.5 top-3.5 text-zinc-400">
                    🔍
                </span>
            </div>
        </div>
    );
}

export default ProductSearch;
