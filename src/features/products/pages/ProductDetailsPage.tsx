import React from 'react';
import ProductCard from '../components/ProductCard';
import ProductFeatures from '../components/ProductFeatures';
import ProductBenefits from '../components/ProductBenefits';
import ProductScreenshots from '../components/ProductScreenshots';
import RelatedProducts from '../components/RelatedProducts';

export function ProductDetailsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <ProductCard />
            <ProductFeatures />
            <ProductBenefits />
            <ProductScreenshots />
            <RelatedProducts />
        </div>
    );
}

export default ProductDetailsPage;
