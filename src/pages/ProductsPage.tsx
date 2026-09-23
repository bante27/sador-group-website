import React, { useState, useMemo } from 'react';
import ProductsHero from '../features/products/components/ProductsHero';
import ProductFilters from '../features/products/components/ProductFilters';
import ProductSearch from '../features/products/components/ProductSearch';
import ProductGrid from '../features/products/components/ProductGrid';
import ProductCard from '../features/products/components/ProductCard';
import ProductDetails from '../features/products/components/ProductDetails';
import ProductFeatures from '../features/products/components/ProductFeatures';
import ProductBenefits from '../features/products/components/ProductBenefits';
import ProductScreenshots from '../features/products/components/ProductScreenshots';
import RelatedProducts from '../features/products/components/RelatedProducts';
import ProductCTA from '../features/products/components/ProductCTA';
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
        <div className="min-h-screen bg-[#FAF9F6]">
            <ProductsHero />
            <ProductFilters
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                totalCount={filteredProducts.length}
            />
            <ProductSearch />
            <ProductGrid products={filteredProducts} />
            <ProductCard product={products[0]} index={0} />
            <ProductDetails product={products[0]} />
            <ProductFeatures />
            <ProductBenefits benefits={products[0].benefits} />
            <ProductScreenshots screenshots={products[0].screenshots} />
            <RelatedProducts relatedIds={products[0].relatedProducts} allProducts={products} />
            <ProductCTA productName={products[0].name} />
        </div>
    );
}

export default ProductsPage;
