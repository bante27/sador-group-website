import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Product } from '../types/product.types';

interface ProductDetailsProps {
    product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            if (imageRef.current) {
                gsap.fromTo(
                    imageRef.current,
                    { opacity: 0, scale: 0.96 },
                    { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: imageRef.current, start: 'top 85%', once: true } }
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, [product]);

    return (
        <div ref={containerRef} className="bg-[#FAF9F6] text-[#18181B] min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#059669] mb-3">
                        Sador Group / Product / {product.category}
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        {product.logo && (
                            <div className="w-12 h-12 bg-white border border-zinc-200 flex items-center justify-center text-2xl shadow-sm">
                                {product.logo}
                            </div>
                        )}
                        <h1 className="text-4xl md:text-6xl font-light font-serif tracking-tight text-[#18181B]">
                            {product.name}
                        </h1>
                    </div>
                    <p className="text-lg md:text-xl text-[#71717A] font-light leading-relaxed max-w-3xl">
                        {product.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-zinc-200">
                        <div>
                            <span className="block font-mono text-[10px] uppercase tracking-wider text-[#71717A]">Category</span>
                            <span className="font-mono text-xs text-[#18181B] uppercase tracking-wider font-medium">{product.category}</span>
                        </div>
                        {product.status && (
                            <div className="pl-6 border-l border-zinc-200">
                                <span className="block font-mono text-[10px] uppercase tracking-wider text-[#71717A]">Status</span>
                                <span className="font-mono text-xs text-[#059669] uppercase tracking-wider font-medium">{product.status}</span>
                            </div>
                        )}
                        {product.website && (
                            <div className="ml-auto">
                                <a
                                    href={product.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#18181B] text-[#FAF9F6] text-xs font-mono uppercase tracking-widest hover:bg-[#059669] transition-colors"
                                >
                                    <span>Launch Site</span>
                                    <span>↗</span>
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Product Visual */}
                {product.image && (
                    <div className="mb-16 overflow-hidden aspect-[16/9] bg-zinc-100 border border-zinc-200 shadow-sm">
                        <img
                            ref={imageRef}
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover will-change-transform"
                        />
                    </div>
                )}

                {/* Overview Section */}
                <div className="mb-16">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-[#71717A] mb-4">Overview</h2>
                    <p className="text-lg font-light text-[#18181B] leading-relaxed">
                        {product.overview}
                    </p>
                </div>

                {/* Problem & Solution */}
                <div className="mb-16 py-12 border-y border-zinc-200">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-[#71717A] mb-4">The Challenge</h2>
                    <p className="text-base text-[#71717A] font-light leading-relaxed mb-6">
                        {product.problem}
                    </p>
                    <div className="p-6 bg-white border border-zinc-200">
                        <span className="block font-mono text-[10px] uppercase tracking-widest text-[#059669] mb-1">Sador Architecture Solution</span>
                        <p className="text-sm text-[#18181B] font-light leading-relaxed">
                            Engineered from the ground up to eliminate structural bottlenecks, providing seamless scalability, uncompromised security, and absolute reliability.
                        </p>
                    </div>
                </div>

                {/* Key Features */}
                <div className="mb-16">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-[#71717A] mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {product.features.map((feature, idx) => (
                            <div key={idx} className="p-6 bg-white border border-zinc-200 flex flex-col justify-between">
                                <span className="font-mono text-xs text-[#059669] mb-4 tracking-widest">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <h3 className="text-base font-medium text-[#18181B] font-serif">
                                    {feature}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                {product.benefits && product.benefits.length > 0 && (
                    <div className="mb-16 py-12 border-t border-zinc-200">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-[#71717A] mb-8">Benefits</h2>
                        <ul className="space-y-4">
                            {product.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-4 pb-4 border-b border-zinc-100 last:border-0">
                                    <span className="text-[#059669] font-mono text-xs mt-1">✓</span>
                                    <span className="text-base font-light text-[#18181B] leading-relaxed">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Technology Stack */}
                {product.technologies && product.technologies.length > 0 && (
                    <div className="mb-16 py-12 border-t border-zinc-200">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-[#71717A] mb-6">Technology Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {product.technologies.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-white border border-zinc-200 font-mono text-xs uppercase tracking-wider text-[#18181B]">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Target Users */}
                {product.targetUsers && product.targetUsers.length > 0 && (
                    <div className="mb-16 py-12 border-t border-zinc-200">
                        <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-[#71717A] mb-6">Target Users</h2>
                        <div className="flex flex-wrap gap-3">
                            {product.targetUsers.map((user, idx) => (
                                <span key={idx} className="px-3.5 py-1.5 bg-zinc-100 border border-zinc-200 font-mono text-xs uppercase tracking-wider text-zinc-700">
                                    {user}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductDetails;
