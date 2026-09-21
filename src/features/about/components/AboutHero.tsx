import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Target, Compass } from 'lucide-react';

export const AboutHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const rightPanelRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            gsap.set([leftPanelRef.current, rightPanelRef.current], { display: 'none' });
            gsap.set([titleRef.current, descriptionRef.current, ctaRef.current, cardsRef.current], { opacity: 1, y: 0 });
            return;
        }

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'power3.inOut' }
            });

            // Initial setup - panels are solid white initially covering the hero
            gsap.set(leftPanelRef.current, { xPercent: 0 });
            gsap.set(rightPanelRef.current, { xPercent: 0 });
            gsap.set([titleRef.current, descriptionRef.current, ctaRef.current, cardsRef.current], {
                opacity: 0,
                y: 35
            });

            // Split screen hold and smooth panel slide away
            tl.to({}, { duration: 0.25 }) // hold moment
                .to(leftPanelRef.current, {
                    xPercent: -100,
                    duration: 1.0,
                    ease: 'power3.inOut'
                }, '+=0.1')
                .to(rightPanelRef.current, {
                    xPercent: 100,
                    duration: 1.0,
                    ease: 'power3.inOut'
                }, '<') // Run concurrently
                // Reveal content underneath smoothly
                .to(titleRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                }, '-=0.6')
                .to(descriptionRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power3.out'
                }, '-=0.5')
                .to(ctaRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                }, '-=0.4')
                .to(cardsRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.15
                }, '-=0.5');

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-zinc-950 text-white overflow-hidden min-h-[85vh] flex items-center">

            {/* Cinematic Split-Screen Overlay Panels in Solid White */}
            <div className="absolute inset-0 z-30 pointer-events-none flex overflow-hidden">
                <div
                    ref={leftPanelRef}
                    className="w-1/2 h-full bg-white border-r border-zinc-200 will-change-transform shadow-2xl"
                />
                <div
                    ref={rightPanelRef}
                    className="w-1/2 h-full bg-white border-l border-zinc-200 will-change-transform shadow-2xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 uppercase mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Corporate Profile & Ecosystem
                    </div>

                    <h1
                        ref={titleRef}
                        className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-[1.1] opacity-0 will-change-transform"
                    >
                        Engineering the <span className="font-normal italic text-emerald-400">Future</span> of Enterprise.
                    </h1>

                    <p
                        ref={descriptionRef}
                        className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto opacity-0 will-change-transform"
                    >
                        Sador Group is a multi-disciplinary technology conglomerate dedicated to building high-impact enterprise solutions, AI innovations, and sustainable business ecosystems.
                    </p>

                    <div ref={ctaRef} className="mt-8 flex items-center justify-center gap-4 opacity-0 will-change-transform">
                        <a
                            href="#ecosystem"
                            className="px-8 py-3.5 rounded-xl bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-500 transition-colors shadow-sm"
                        >
                            Explore Ecosystem
                        </a>
                        <a
                            href="/contact"
                            className="px-8 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-medium text-sm hover:bg-zinc-800 transition-colors shadow-sm"
                        >
                            Contact Leadership
                        </a>
                    </div>
                </div>

                {/* Two side-by-side smart executive cards */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto opacity-0 will-change-transform">
                    <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 mb-6 shadow-xs">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">Precision Vision</h3>
                            <p className="text-zinc-600 font-light text-sm leading-relaxed">
                                Architecting scalable ecosystems engineered for next-generation market dominance.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500">
                            <span>PILLAR 01</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        </div>
                    </div>

                    <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 mb-6 shadow-xs">
                                <Compass className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">Global Strategy</h3>
                            <p className="text-zinc-600 font-light text-sm leading-relaxed">
                                Expanding horizons through sustainable, data-driven business frameworks.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500">
                            <span>PILLAR 02</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutHero;
