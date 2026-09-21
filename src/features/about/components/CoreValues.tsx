import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const coreValuesParagraphs = [
    'We adhere to the highest standards of engineering and corporate governance in every solution we deploy, ensuring absolute reliability and excellence.',
    'Pioneering next-generation AI and enterprise frameworks to stay ahead of dynamic market demands and continuously drive technological innovation.',
    'Long-term value creation prioritizing scalability, sustainability, and technological leadership across all our business ecosystems.',
    'Empowering cross-functional synergies across our subsidiary companies to deliver holistic, collaborative value to our global clients.',
    'Designing robust solutions that scale effortlessly across international markets, diverse industries, and rapidly evolving economic landscapes.',
    'Maintaining rigorous data integrity and enterprise-grade security protocols across all operations to safeguard digital trust.'
];

export const CoreValues: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const curtainRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: 'play reverse play reverse',
                },
            });

            tl.fromTo(
                curtainRef.current,
                { scaleY: 1, transformOrigin: 'bottom center' },
                { scaleY: 0, duration: 2.0, ease: 'power3.inOut' }
            )
                // 2. Then display content smoothly
                .fromTo(
                    contentRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
                    '-=0.6'
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-20 sm:py-28 bg-[#FAF9F6] overflow-hidden">
            {/* Topground black curtain animation layer */}
            <div
                ref={curtainRef}
                className="absolute inset-0 bg-[#09090B] z-20 pointer-events-none will-change-transform flex items-center justify-center"
            >
                <div className="text-zinc-400 font-mono text-xs uppercase tracking-[0.3em] animate-pulse">
                    SADOR GROUP — CORE VALUES
                </div>
            </div>

            {/* Main Content without titles or boxes, compact spacing, bold black text */}
            <div ref={contentRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 opacity-0 will-change-transform">
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">

                    <h2 className="text-3xl sm:text-4xl font-light text-[#18181B] tracking-tight mb-3">
                        Core Values
                    </h2>
                </div>

                <div className="space-y-6 sm:space-y-8">
                    {coreValuesParagraphs.map((paragraph, idx) => (
                        <div key={idx} className="flex gap-4 sm:gap-6 items-baseline border-b border-zinc-200 pb-6 last:border-b-0">
                            <span className="font-mono text-sm text-[#059669] font-bold tracking-wider shrink-0">
                                0{idx + 1}
                            </span>
                            <p className="text-base sm:text-lg text-[#09090B] font-semibold leading-relaxed">
                                {paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
