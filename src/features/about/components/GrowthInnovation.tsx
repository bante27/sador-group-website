import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StrategyItem {
    title: string;
    description: string;
}

const strategies: StrategyItem[] = [
    {
        title: 'Pioneering R&D',
        description: 'Investing heavily in next-generation artificial intelligence frameworks, automated decision engines, and scalable enterprise utilities.',
    },
    {
        title: 'Global Ecosystem',
        description: 'Expanding our multi-subsidiary network internationally, empowering cross-industry collaboration and seamless digital transformation.',
    },
    {
        title: 'Sustainable Governance',
        description: 'Upholding rigorous security compliance, absolute data integrity, and long-term economic sustainability.',
    },
];

export const GrowthInnovation: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const columnsRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse',
                },
            });

            const eyebrow = headerRef.current?.querySelector('.section-eyebrow');
            const heading = headerRef.current?.querySelector('.section-heading');
            const desc = headerRef.current?.querySelector('.section-desc');

            if (eyebrow) {
                headerTl.fromTo(eyebrow, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
            }
            if (heading) {
                headerTl.fromTo(heading, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 1.0, ease: 'power3.out' }, '-=0.5');
            }
            if (desc) {
                headerTl.fromTo(desc, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.0, ease: 'power3.out' }, '-=0.6');
            }
            if (columnsRef.current) {
                const columnElements = columnsRef.current.querySelectorAll('.strategy-column');

                columnElements.forEach((col, index) => {
                    const blackCurtain = col.querySelector('.black-curtain');
                    const contentWrap = col.querySelector('.content-wrap');

                    const colTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: col,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    });
                    if (blackCurtain) {
                        colTl.fromTo(
                            blackCurtain,
                            { scaleX: 1, transformOrigin: 'left center' },
                            { scaleX: 0, duration: 1.2, ease: 'power3.inOut', delay: index * 0.3 }
                        );
                    }

                    if (contentWrap) {
                        colTl.fromTo(
                            contentWrap,
                            { x: -120, opacity: 0 },
                            { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
                            '-=1.0'
                        );
                    }
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const col = e.currentTarget;
        const title = col.querySelector('.strategy-title');
        const underline = col.querySelector('.strategy-underline');
        const text = col.querySelector('.strategy-text');

        gsap.to(title, { x: 8, color: '#059669', duration: 0.35, ease: 'power3.out' });
        gsap.to(text, { color: '#09090B', duration: 0.35, ease: 'power3.out' });
        if (underline) {
            gsap.to(underline, { scaleX: 1, duration: 0.35, ease: 'power3.out' });
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const col = e.currentTarget;
        const title = col.querySelector('.strategy-title');
        const underline = col.querySelector('.strategy-underline');
        const text = col.querySelector('.strategy-text');

        gsap.to(title, { x: 0, color: '#09090B', duration: 0.35, ease: 'power3.out' });
        gsap.to(text, { color: '#27272A', duration: 0.35, ease: 'power3.out' });
        if (underline) {
            gsap.to(underline, { scaleX: 0, duration: 0.35, ease: 'power3.out' });
        }
    };

    return (
        <section ref={sectionRef} className="py-24 sm:py-32 bg-[#FAF9F6] text-[#09090B] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                {/* Header */}
                <div ref={headerRef} className="max-w-3xl mb-16 sm:mb-24">
                    <h2 className="section-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#09090B] leading-[1.1] mb-6 opacity-0 will-change-transform">
                        Growth & <span className="font-bold italic">Innovation</span>
                    </h2>
                    <p className="section-desc text-base sm:text-lg text-[#27272A] font-medium leading-relaxed opacity-0 will-change-transform">
                        Sador Group is driven by continuous technological modernization, cross-functional ecosystem synergies, and unwavering governance.
                    </p>
                </div>
                <div ref={columnsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {strategies.map((item) => (
                        <div
                            key={item.title}
                            className="strategy-column group relative overflow-hidden py-6 md:py-0"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="black-curtain absolute inset-0 bg-[#09090B] pointer-events-none z-20 will-change-transform" />

                            <div className="content-wrap opacity-0 will-change-transform relative z-10">
                                <div className="relative inline-block mb-6">
                                    <h3 className="strategy-title text-xl sm:text-2xl font-bold tracking-tight text-[#09090B] will-change-transform">
                                        {item.title}
                                    </h3>
                                    <div className="strategy-underline absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#059669] scale-x-0 origin-left will-change-transform" />
                                </div>
                                <p className="strategy-text text-sm sm:text-base text-[#27272A] font-semibold leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GrowthInnovation;
