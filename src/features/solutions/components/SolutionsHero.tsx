import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function SolutionsHero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.solutions-hero-anim',
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-12 text-center">
            <h1 className="solutions-hero-anim text-3xl sm:text-5xl font-bold tracking-tight text-[#12143F] mb-6">
                Technology designed around business challenges.
            </h1>
            <p className="solutions-hero-anim text-base sm:text-lg text-[#475569] font-normal leading-relaxed max-w-2xl mx-auto">
                Sador group approaches technology from the perspective of business needs. By connecting specialized capabilities with real operational and strategic challenges, we develop practical solutions that help businesses adapt, improve, and create sustainable long-term value.
            </p>
        </div>
    );
}

export default SolutionsHero;
