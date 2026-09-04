import React from 'react';
import ProductHero from '../components/ProductHero';
import ProductSearch from '../components/ProductSearch';
import ProductFilters from '../components/ProductFilters';
import ProductGrid from '../components/ProductGrid';

export function ProductsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <ProductHero />
            <ProductSearch />
            <ProductFilters />
            <ProductGrid />
        </div>
    );
}

export default ProductsPage;
