import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';
import { Target, Compass, Layers, ShieldCheck, Cpu, TrendingUp } from 'lucide-react';

export const AboutHero: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            revealOnScroll(
                heroRef.current,
                '.about-hero-element',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out' }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-[#FAF9F6] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="about-hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/60 border border-zinc-300 text-xs font-mono text-zinc-700 uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                        Corporate Profile & Ecosystem
                    </div>
                    <h1 className="about-hero-element text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                        Engineering the <span className="font-normal italic">Future</span> of Enterprise.
                    </h1>
                    <p className="about-hero-element text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
                        Sador Group is a multi-disciplinary technology conglomerate dedicated to building high-impact enterprise solutions, AI innovations, and sustainable business ecosystems.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
