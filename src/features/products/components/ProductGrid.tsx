import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Product } from '../types/product.types';
import ProductCard from './ProductCard';

interface ProductGridProps {
    products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
    const gridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.product-card-item',
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 85%',
                        once: true
                    }
                }
            );
        }, gridRef);

        return () => ctx.revert();
    }, [products]);

    if (products.length === 0) {
        return (
            <div className="py-24 text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-[#71717A] mb-2">No Products Found</p>
                <p className="text-zinc-900 font-serif text-lg">Try selecting a different category.</p>
            </div>
        );
    }

    return (
        <section ref={gridRef} className="py-16 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <div key={product.id} className="product-card-item opacity-0">
                            <ProductCard product={product} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductGrid;
