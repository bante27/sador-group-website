import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { careerBenefits } from '../data/careerContent';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';

gsap.registerPlugin(ScrollTrigger);

export function CultureSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            revealOnScroll(
                containerRef.current,
                '.benefit-card-left',
                { opacity: 0, x: -120, y: 20, scale: 0.94 },
                { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.5, ease: 'power3.out', stagger: 0.25 },
                'top 75%'
            );

            revealOnScroll(
                containerRef.current,
                '.benefit-card-right',
                { opacity: 0, x: 120, y: 20, scale: 0.94 },
                { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.5, ease: 'power3.out', stagger: 0.25 },
                'top 75%'
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-0 bg-white text-[#0F172A] px-0 lg:px-0 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="font-mono text-xl uppercase tracking-widest text-emerald-600 mb-3 block font-bold">
                        Why Sador Group
                    </span>
                    <h2 className="text-xl md:text-2xl font-normal tracking-tight mb-6 text-[#0F172A]">
                        Work Where Ideas Become Real Products.
                    </h2>
                    <p className="text-slate-700 text-lg leading-relaxed">
                        Join an ecosystem engineered for professional growth, technical excellence, and tangible business impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {careerBenefits.map((benefit, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={benefit.id}
                                className={`${isEven ? 'benefit-card-left' : 'benefit-card-right'} p-8 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between`}
                            >
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-[#0F172A]">{benefit.title}</h3>
                                    <p className="text-slate-700 leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default CultureSection;
