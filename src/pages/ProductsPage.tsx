import React, { useState, useMemo } from 'react';
import { ProductsHero } from '../features/products/components/ProductsHero';
import { ProductFilters } from '../features/products/components/ProductFilters';
import { ProductGrid } from '../features/products/components/ProductGrid';
import { products } from '../features/products/data/products';

export function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = useMemo(() => {
        const set = new Set<string>();
        products.forEach((p) => {
            if (p.category) set.add(p.category);
        });
        return Array.from(set);
    }, []);

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All') return products;
        return products.filter((p) => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="flex flex-col min-h-screen bg-[#FAF9F6] text-[#18181B] selection:bg-[#059669] selection:text-white">
            <ProductsHero />
            <ProductFilters
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                totalCount={filteredProducts.length}
            />
            <ProductGrid products={filteredProducts} />
        </div>
    );
}

export default ProductsPage;
