import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';

export function ProductsHero() {
    const heroRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            revealOnScroll(
                heroRef.current,
                '.hero-animate',
                { opacity: 0, x: -100 },
                { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
                'top 85%'
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={heroRef}
            className="pt-28 pb-16 px-6 md:px-12 lg:px-20 bg-[#FAF9F6] border-b border-zinc-200/60 overflow-hidden text-left"
        >
            <div className="max-w-7xl mx-auto">
                <div className="hero-animate text-xs uppercase tracking-[0.2em] font-mono text-[#059669] mb-4 font-bold">
                    Sador Group / Products
                </div>

                <h1 className="hero-animate text-3xl md:text-5xl font-bold text-[#18181B] tracking-tight leading-[1.15] mb-6 max-w-2xl font-serif">
                    Technology built for real-world business.
                </h1>

                <p className="hero-animate text-base md:text-lg text-[#71717A] font-bold max-w-xl leading-relaxed">
                    23+ products across software, AI, fintech and enterprise solutions designed for uncompromising scalability.
                </p>
            </div>
        </section>
    );
}

export default ProductsHero;
