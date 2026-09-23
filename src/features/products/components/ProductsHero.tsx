import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function ProductsHero() {
    const heroRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.hero-animate',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out'
                }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="pt-28 pb-16 px-6 md:px-12 lg:px-20 bg-[#FAF9F6] border-b border-zinc-200/60"
        >
            <div className="max-w-7xl mx-auto">
                <div className="hero-animate text-xs uppercase tracking-[0.2em] font-mono text-[#059669] mb-4">
                    Sador Group / Products
                </div>

                <h1 className="hero-animate text-3xl md:text-5xl font-light text-[#18181B] tracking-tight leading-[1.15] mb-6 max-w-2xl font-serif">
                    Technology built for real-world business.
                </h1>

                <p className="hero-animate text-base md:text-lg text-[#71717A] font-light max-w-xl leading-relaxed">
                    23+ products across software, AI, fintech and enterprise solutions designed for uncompromising scalability.
                </p>
            </div>
        </section>
    );
}

export default ProductsHero;
