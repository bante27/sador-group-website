import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { careerBenefits } from '../data/careerContent';

gsap.registerPlugin(ScrollTrigger);

export function CultureSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.from('.benefit-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power3.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-28 bg-white text-[#0F172A] px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-3 block">
                        Why Sador Group
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#0F172A]">
                        Work Where Ideas Become Real Products.
                    </h2>
                    <p className="text-slate-700 text-lg leading-relaxed">
                        Join an ecosystem engineered for professional growth, technical excellence, and tangible business impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {careerBenefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="benefit-card p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between shadow-sm"
                        >
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-[#0F172A]">{benefit.title}</h3>
                                <p className="text-slate-700 leading-relaxed">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CultureSection;
