import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe2, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const GrowthInnovation: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                containerRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 sm:py-32 bg-[#FAF9F6] text-[#09090B] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                <div ref={containerRef} className="opacity-0 will-change-transform">

                    {/* Section Header */}
                    <div className="max-w-3xl mb-16 sm:mb-20">
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#059669] block font-semibold mb-3">
                            Future Outlook & Strategy
                        </span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#09090B] leading-[1.1] mb-6">
                            Growth & <span className="font-normal italic">Innovation</span>
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
                            Sador Group is driven by continuous technological modernization, cross-functional ecosystem synergies, and unwavering corporate governance.
                        </p>
                    </div>

                    {/* Three Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                        {/* Pillar 1 */}
                        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] border border-zinc-200 flex items-center justify-center text-[#059669] mb-6">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold tracking-tight text-[#09090B] mb-3">
                                    Pioneering R&D
                                </h3>
                                <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                                    Investing heavily in next-generation artificial intelligence frameworks, automated decision engines, and scalable enterprise utilities.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between font-mono text-xs text-zinc-400">
                                <span>STRATEGY 01</span>
                                <ArrowUpRight className="w-4 h-4 text-[#059669]" />
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] border border-zinc-200 flex items-center justify-center text-[#059669] mb-6">
                                    <Globe2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold tracking-tight text-[#09090B] mb-3">
                                    Global Ecosystem
                                </h3>
                                <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                                    Expanding our multi-subsidiary network internationally, empowering cross-industry collaboration and seamless digital transformation.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between font-mono text-xs text-zinc-400">
                                <span>STRATEGY 02</span>
                                <ArrowUpRight className="w-4 h-4 text-[#059669]" />
                            </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] border border-zinc-200 flex items-center justify-center text-[#059669] mb-6">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold tracking-tight text-[#09090B] mb-3">
                                    Sustainable Governance
                                </h3>
                                <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                                    Upholding rigorous military-grade security compliance, absolute data integrity, and long-term economic sustainability.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between font-mono text-xs text-zinc-400">
                                <span>STRATEGY 03</span>
                                <ArrowUpRight className="w-4 h-4 text-[#059669]" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default GrowthInnovation;
