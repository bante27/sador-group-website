import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { revealOnScroll } from '@/components/animation/scrollAnimations';

interface CompanyNode {
    id: string;
    name: string;
    category: string;
    description: string;
}

const defaultCompanies: CompanyNode[] = [
    {
        id: '01',
        name: 'Sador Technologies',
        category: 'Enterprise Software & AI',
        description: 'Next-generation artificial intelligence frameworks and cloud infrastructure.'
    },
    {
        id: '02',
        name: 'Sador Energy',
        category: 'Sustainable Infrastructure',
        description: 'Smart grid solutions and renewable energy monitoring systems.'
    },
    {
        id: '03',
        name: 'Sador Capital',
        category: 'Financial Technologies',
        description: 'Decentralized financial ledgers and automated settlement rails.'
    }
];

interface CompaniesHeroProps {
    companies?: CompanyNode[];
    onSelectCompany?: (id: string) => void;
}

export function CompaniesHero({ companies = defaultCompanies, onSelectCompany }: CompaniesHeroProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const ecosystemRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

            if (overlayRef.current) {
                tl.to(overlayRef.current, {
                    scaleY: 0,
                    transformOrigin: 'top',
                    duration: 1.2,
                    ease: 'power4.inOut',
                });
            }

            tl.fromTo(
                '.hero-eyebrow',
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.4'
            )
                .fromTo(
                    '.hero-title-line-1',
                    { opacity: 0, y: '50%' },
                    { opacity: 1, y: '0%', duration: 1.0 },
                    '-=0.5'
                )
                .fromTo(
                    '.hero-title-line-2',
                    { opacity: 0, y: '50%' },
                    { opacity: 1, y: '0%', duration: 1.0 },
                    '-=0.8'
                )
                .fromTo(
                    '.hero-desc',
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    '-=0.6'
                )
                .fromTo(
                    '.hero-cta',
                    { opacity: 0, y: 16 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    '-=0.6'
                )
                .fromTo(
                    '.eco-group-identity',
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    '-=0.8'
                )
                .fromTo(
                    '.eco-company-item',
                    { opacity: 0, y: 16 },
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
                    '-=0.5'
                );

            revealOnScroll(
                sectionRef.current,
                '.hero-parallax-container',
                { y: 0, opacity: 1 },
                { y: -20, opacity: 0.9, ease: 'none' },
                'top top'
            );

            const handleMouseMove = (e: MouseEvent) => {
                if (!ecosystemRef.current || window.innerWidth < 1024) return;
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;
                const xVal = ((clientX / innerWidth) - 0.5) * 6;
                const yVal = ((clientY / innerHeight) - 0.5) * 6;

                gsap.to(ecosystemRef.current, {
                    x: xVal,
                    y: yVal,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleItemClick = (id: string) => {
        if (onSelectCompany) {
            onSelectCompany(id);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#FAF9F6] text-[#18181B] pt-16 pb-16 px-2 sm:px-2 lg:px-12 overflow-hidden border-b border-[#D4D4D8]/40"
            style={{ minHeight: '92vh', display: 'flex', alignItems: 'center' }}
            aria-label="Sador Group Ecosystem Hero"
        >
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-[#09090B] z-30 pointer-events-none"
                style={{ transformOrigin: 'top' }}
            />

            <div className="hero-parallax-container max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">
                <div className="lg:col-span-7 flex flex-col items-start">

                    {/* Main Heading — Smaller, Bold, Clean */}
                    <h1
                        className="font-bold tracking-tight text-[#18181B] mb-8"
                        style={{
                            fontSize: 'clamp(1.8rem, 3.2vw, 3.5rem)',
                            lineHeight: 1.1,
                            letterSpacing: '-0.025em',
                        }}
                    >
                        <div className="overflow-hidden py-1">
                            <div className="hero-title-line-1">Technology Businesses.</div>
                        </div>
                        <div className="overflow-hidden py-1">
                            <div className="hero-title-line-2 text-[#059669]">One Connected Ecosystem.</div>
                        </div>
                    </h1>

                    {/* Description */}
                    <p className="hero-desc text-[#71717A] text-xs sm:text-sm leading-relaxed max-w-[520px] mb-10 font-bold">
                        Sador Group brings together specialized technology businesses that operate independently while contributing to a connected ecosystem of innovation, digital transformation, and long-term growth.
                    </p>

                    {/* Editorial CTA */}
                    <div className="hero-cta">
                        <a
                            href="#companies-grid"
                            className="group inline-flex items-center gap-3 text-[#18181B] hover:text-[#059669] font-medium text-xs sm:text-sm transition-colors duration-300 relative py-2"
                        >
                            <span>Explore Our Companies</span>
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#059669]">
                                ↗
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#18181B]/30 group-hover:bg-[#059669] transition-colors duration-300" />
                        </a>
                    </div>
                </div>

                {/* Right Column: Clean Box-Free, Line-Free, Icon-Free Ecosystem Map */}
                <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
                    <div ref={ecosystemRef} className="w-full max-w-md lg:max-w-sm flex flex-col">

                        {/* Ecosystem Header / Group Identity & Counter */}
                        <div className="eco-group-identity flex items-baseline justify-between border-b border-[#D4D4D8] pb-6 mb-8">

                        </div>

                        {/* Typographic List with Default Open Descriptions */}
                        <div className="space-y-6">
                            {companies.map((company) => {
                                return (
                                    <div
                                        key={company.id}
                                        className="eco-company-item group cursor-pointer pb-5 border-b border-[#D4D4D8]/30 last:border-b-0"
                                        onClick={() => handleItemClick(company.id)}
                                    >
                                        <div className="flex flex-col space-y-1.5">
                                            <div className="flex items-baseline justify-between">
                                                <div className="flex items-center gap-2.5">
                                                    <span className="font-bold text-[12px] font-bold text-[#059669]">
                                                        {company.id}
                                                    </span>
                                                    <h3 className="text-base font-bold text-[#18181B] group-hover:text-[#059669] transition-colors duration-300 tracking-tight">
                                                        {company.name}
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="font-bold text-[12px] uppercase tracking-wider text-[#71717A] pl-5">
                                                {company.category}
                                            </div>

                                            {/* Default open description in small font */}
                                            <div className="pl-5 pt-0.5">
                                                <p className="text-[12px] text-[#71717A] leading-relaxed">
                                                    {company.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default CompaniesHero;
