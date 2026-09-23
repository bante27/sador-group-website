import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCTAProps {
    productName?: string;
}

export function ProductCTA({ productName = 'this product' }: ProductCTAProps) {
    return (
        <section className="py-20 bg-[#18181B] text-[#FAF9F6]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#059669] mb-3 block">
                    Sador Group Enterprise Ecosystem
                </span>

                <h2 className="text-3xl md:text-4xl font-light font-serif mb-4 tracking-tight">
                    Ready to explore {productName}?
                </h2>

                <p className="text-[#71717A] text-base font-light mb-8 max-w-xl mx-auto leading-relaxed">
                    Discover how it can support your business operations and accelerate your enterprise scale.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                        to="/contact"
                        className="px-6 py-3 bg-[#059669] text-white text-xs font-mono uppercase tracking-widest hover:bg-emerald-600 transition-colors"
                    >
                        Contact Sador Group →
                    </Link>
                    <Link
                        to="/products"
                        className="px-6 py-3 border border-zinc-700 text-[#FAF9F6] text-xs font-mono uppercase tracking-widest hover:border-zinc-500 transition-colors"
                    >
                        Explore All Products
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ProductCTA;
