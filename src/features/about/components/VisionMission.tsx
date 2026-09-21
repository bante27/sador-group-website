import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';
import { Target, Compass } from 'lucide-react';

export const VisionMission: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            revealOnScroll(
                containerRef.current,
                '.vision-card',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-16 sm:py-24 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="vision-card bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 mb-6">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-light text-zinc-900 mb-4 tracking-tight">Our Vision</h3>
                            <p className="text-zinc-600 font-light text-base leading-relaxed">
                                To be a premier global enterprise transforming industries through cutting-edge technology ecosystems, sustainable innovation, and exceptional value creation.
                            </p>
                        </div>
                        <div className="pt-8 mt-8 border-t border-zinc-100 flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            Strategic Outlook 2030+
                        </div>
                    </div>

                    <div className="vision-card bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 mb-6">
                                <Compass className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-light text-zinc-900 mb-4 tracking-tight">Our Mission</h3>
                            <p className="text-zinc-600 font-light text-base leading-relaxed">
                                To engineer resilient digital solutions, empower businesses across diverse markets, and foster high-impact technological growth that shapes a better future.
                            </p>
                        </div>
                        <div className="pt-8 mt-8 border-t border-zinc-100 flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            Operational Execution
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisionMission;
