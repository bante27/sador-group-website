import React, { useState, useMemo } from 'react';
import { ProductsHero } from '@/features/products/components/ProductsHero';
import { ProductHero } from '@/features/products/components/ProductHero';
import { ProductFilters } from '@/features/products/components/ProductFilters';
import { ProductSearch } from '@/features/products/components/ProductSearch';
import { ProductGrid } from '@/features/products/components/ProductGrid';
import { ProductCard } from '@/features/products/components/ProductCard';
import { ProductDetails } from '@/features/products/components/ProductDetails';
import { ProductFeatures } from '@/features/products/components/ProductFeatures';
import { ProductBenefits } from '@/features/products/components/ProductBenefits';
import { ProductScreenshots } from '@/features/products/components/ProductScreenshots';
import { RelatedProducts } from '@/features/products/components/RelatedProducts';
import { ProductCTA } from '@/features/products/components/ProductCTA';
import { products } from '@/features/products/data/products';

export function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const categories = useMemo(() => {
        const set = new Set<string>();
        products.forEach((p) => {
            if (p.category) set.add(p.category);
        });
        return Array.from(set);
    }, []);

    const filteredProducts = useMemo(() => {
        let list = products;
        if (selectedCategory !== 'All') {
            list = list.filter((p) => p.category === selectedCategory);
        }
        if (searchQuery.trim() !== '') {
            const q = searchQuery.toLowerCase();
            list = list.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q)
            );
        }
        return list;
    }, [selectedCategory, searchQuery]);

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
