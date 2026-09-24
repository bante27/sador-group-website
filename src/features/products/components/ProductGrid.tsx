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
            const cards = gsap.utils.toArray<HTMLElement>('.product-card-item');
            
            cards.forEach((card, index) => {
                const colIndex = index % 3;
                let xInitial = 0;
                let yInitial = 0;
                let rotationInitial = 0;

                if (colIndex === 0) {
                    xInitial = -300; 
                    rotationInitial = -8;
                } else if (colIndex === 2) {
                    xInitial = 300;  
                    rotationInitial = 8;
                } else {
                    yInitial = 250;  
                    rotationInitial = 0;
                }

                gsap.fromTo(
                    card,
                    { opacity: 0, x: xInitial, y: yInitial, rotation: rotationInitial, scale: 0.85 },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotation: 0,
                        scale: 1,
                        duration: 1.6,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 95%',
                            once: true,
                        }
                    }
                );
            });
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
        <section ref={gridRef} className="py-16 px-6 md:px-12 lg:px-20 bg-[#FAF9F6] overflow-hidden">
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
