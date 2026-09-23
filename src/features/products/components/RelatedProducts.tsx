import React from 'react';
import { Product } from '../types/product.types';
import ProductCard from './ProductCard';

interface RelatedProductsProps {
  relatedIds?: string[];
  allProducts: Product[];
}

export function RelatedProducts({ relatedIds, allProducts }: RelatedProductsProps) {
  if (!relatedIds || relatedIds.length === 0) {
    return null;
  }

  const matchedProducts = allProducts.filter(p => relatedIds.includes(p.id) || relatedIds.includes(p.slug));

  if (matchedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 border-t border-zinc-200 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#059669] mb-2 block">
            Ecosystem Integration
          </span>
          <h2 className="text-3xl font-light font-serif text-[#18181B] tracking-tight">
            Related Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;
