import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';
import { Target, Compass } from 'lucide-react';

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
        <div ref={heroRef} className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-zinc-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="about-hero-element inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 uppercase mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Corporate Profile & Ecosystem
                    </div>
                    <h1 className="about-hero-element text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-[1.1]">
                        Engineering the <span className="font-normal italic text-emerald-400">Future</span> of Enterprise.
                    </h1>
                    <p className="about-hero-element text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                        Sador Group is a multi-disciplinary technology conglomerate dedicated to building high-impact enterprise solutions, AI innovations, and sustainable business ecosystems.
                    </p>
                </div>

                {/* Two side-by-side smart executive cards connected with the dark theme */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="about-hero-element bg-zinc-900/90 border border-zinc-800/80 p-8 rounded-2xl shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-emerald-400 mb-6">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Precision Vision</h3>
                            <p className="text-zinc-400 font-light text-sm leading-relaxed">
                                Architecting scalable ecosystems engineered for next-generation market dominance.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
                            <span>PILLAR 01</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        </div>
                    </div>

                    <div className="about-hero-element bg-zinc-900/90 border border-zinc-800/80 p-8 rounded-2xl shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-emerald-400 mb-6">
                                <Compass className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Global Strategy</h3>
                            <p className="text-zinc-400 font-light text-sm leading-relaxed">
                                Expanding horizons through sustainable, data-driven business frameworks.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
                            <span>PILLAR 02</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutHero;
