import React from 'react';
import ProductCard from './ProductCard';

export function ProductGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}

export default ProductGrid;
