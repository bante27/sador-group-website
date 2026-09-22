import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe2, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface StrategyItem {
    number: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

const strategies: StrategyItem[] = [
    {
        number: '01',
        title: 'Pioneering R&D',
        description: 'Investing heavily in next-generation artificial intelligence frameworks, automated decision engines, and scalable enterprise utilities.',
        icon: Zap,
    },
    {
        number: '02',
        title: 'Global Ecosystem',
        description: 'Expanding our multi-subsidiary network internationally, empowering cross-industry collaboration and seamless digital transformation.',
        icon: Globe2,
    },
    {
        number: '03',
        title: 'Sustainable Governance',
        description: 'Upholding rigorous security compliance, absolute data integrity, and long-term economic sustainability.',
        icon: ShieldCheck,
    },
];

export const GrowthInnovation: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);
    const columnsRef = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            // Header animation timeline
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
                headerTl.fromTo(eyebrow, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' });
            }
            if (heading) {
                headerTl.fromTo(heading, { y: 45, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4');
            }
            if (desc) {
                headerTl.fromTo(desc, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5');
            }
            if (dividerRef.current) {
                headerTl.fromTo(
                    dividerRef.current,
                    { scaleX: 0, transformOrigin: 'left' },
                    { scaleX: 1, duration: 1, ease: 'power3.out' },
                    '-=0.4'
                );
            }

            // Strategy items independent reveal timeline
            columnsRef.current.forEach((col, index) => {
                if (!col) return;
                const numEl = col.querySelector('.strategy-number');
                const titleEl = col.querySelector('.strategy-title');
                const textEl = col.querySelector('.strategy-text');
                const iconEl = col.querySelector('.strategy-icon');
                const lineEl = col.querySelector('.strategy-line');

                const itemTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: col,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                });

                itemTl.fromTo(
                    col,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: index * 0.15 }
                );

                if (numEl) {
                    itemTl.fromTo(numEl, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '<');
                }
                if (titleEl) {
                    itemTl.fromTo(titleEl, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '<0.1');
                }
                if (textEl) {
                    itemTl.fromTo(textEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '<0.1');
                }
                if (iconEl) {
                    itemTl.fromTo(iconEl, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: 'power3.out' }, '<0.1');
                }
                if (lineEl) {
                    itemTl.fromTo(
                        lineEl,
                        { scaleX: 0, transformOrigin: 'left' },
                        { scaleX: 1, duration: 0.8, ease: 'power3.out' },
                        '<'
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const col = e.currentTarget;
        const number = col.querySelector('.strategy-number');
        const title = col.querySelector('.strategy-title');
        const icon = col.querySelector('.strategy-icon');
        const arrow = col.querySelector('.strategy-arrow');
        const underline = col.querySelector('.strategy-underline');
        const text = col.querySelector('.strategy-text');

        gsap.to(number, { color: '#059669', duration: 0.35, ease: 'power3.out' });
        gsap.to(title, { x: 5, duration: 0.35, ease: 'power3.out' });
        gsap.to(text, { color: '#27272a', duration: 0.35, ease: 'power3.out' });
        gsap.to(icon, { color: '#059669', rotation: 8, duration: 0.35, ease: 'power3.out' });
        gsap.to(arrow, { x: 5, y: -5, color: '#059669', duration: 0.35, ease: 'power3.out' });
        if (underline) {
            gsap.to(underline, { scaleX: 1, duration: 0.35, ease: 'power3.out' });
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const col = e.currentTarget;
        const number = col.querySelector('.strategy-number');
        const title = col.querySelector('.strategy-title');
        const icon = col.querySelector('.strategy-icon');
        const arrow = col.querySelector('.strategy-arrow');
        const underline = col.querySelector('.strategy-underline');
        const text = col.querySelector('.strategy-text');

        gsap.to(number, { color: '#a1a1aa', duration: 0.35, ease: 'power3.out' });
        gsap.to(title, { x: 0, duration: 0.35, ease: 'power3.out' });
        gsap.to(text, { color: '#71717a', duration: 0.35, ease: 'power3.out' });
        gsap.to(icon, { color: '#71717a', rotation: 0, duration: 0.35, ease: 'power3.out' });
        gsap.to(arrow, { x: 0, y: 0, color: '#a1a1aa', duration: 0.35, ease: 'power3.out' });
        if (underline) {
            gsap.to(underline, { scaleX: 0, duration: 0.35, ease: 'power3.out' });
        }
    };

    return (
        <section ref={sectionRef} className="py-24 sm:py-32 bg-[#FAF9F6] text-[#09090B] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                {/* Header */}
                <div ref={headerRef} className="max-w-3xl mb-16 sm:mb-24">
                    <span className="section-eyebrow font-mono text-xs uppercase tracking-[0.2em] text-[#059669] block font-semibold mb-3 opacity-0 will-change-transform">
                        Future Outlook & Strategy
                    </span>
                    <h2 className="section-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#09090B] leading-[1.1] mb-6 opacity-0 will-change-transform">
                        Growth & <span className="font-normal italic">Innovation</span>
                    </h2>
                    <p className="section-desc text-base sm:text-lg text-[#71717A] font-light leading-relaxed opacity-0 will-change-transform">
                        Sador Group is driven by continuous technological modernization, cross-functional ecosystem synergies, and unwavering governance.
                    </p>
                </div>

                {/* Main Horizontal Divider */}
                <div
                    ref={dividerRef}
                    className="w-full h-[1px] bg-[#D4D4D8] mb-12 sm:mb-16 origin-left will-change-transform"
                />

                {/* Strategy Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[#D4D4D8]">
                    {strategies.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={item.number}
                                ref={(el) => {
                                    columnsRef.current[index] = el;
                                }}
                                className={`group flex flex-col justify-between py-4 md:py-0 opacity-0 will-change-transform ${index === 0 ? 'md:pr-10 lg:pr-16' : index === 1 ? 'md:px-10 lg:px-16' : 'md:pl-10 lg:pl-16'
                                    }`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div>
                                    {/* Number & Arrow */}
                                    <div className="flex items-center justify-between mb-8 sm:mb-12">
                                        <span className="strategy-number font-mono text-xs tracking-[0.2em] text-zinc-400 font-medium">
                                            {item.number}
                                        </span>
                                        <div className="strategy-arrow text-zinc-400 transition-colors">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Title & Underline */}
                                    <div className="relative inline-block mb-4">
                                        <h3 className="strategy-title text-xl sm:text-2xl font-normal tracking-tight text-[#09090B] will-change-transform">
                                            {item.title}
                                        </h3>
                                        <div className="strategy-underline absolute bottom-[-4px] left-0 w-full h-[1px] bg-[#059669] scale-x-0 origin-left will-change-transform" />
                                    </div>

                                    {/* Description */}
                                    <p className="strategy-text text-sm sm:text-base text-[#71717A] font-light leading-relaxed mb-12 sm:mb-16">
                                        {item.description}
                                    </p>
                                </div>

                                <div>
                                    {/* Horizontal Item Divider */}
                                    <div className="strategy-line w-full h-[1px] bg-[#D4D4D8] mb-8 origin-left will-change-transform" />

                                    {/* Icon */}
                                    <div className="strategy-icon text-[#71717A] will-change-transform inline-block">
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GrowthInnovation;
