import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Company } from '../data/companies';
import { applyWaveTextSplit } from '@/components/animation/scrollAnimations';

gsap.registerPlugin(ScrollTrigger);

interface CompanyCardProps {
    companies?: Company[];
    selectedCompanyId?: string;
    onSelectCompany?: (company: Company) => void;
}

const defaultCompanies: Company[] = [
    {
        id: 'sador-tech',
        name: 'Sador Technologies',
        category: 'Enterprise Software & AI',
        description: 'Next-generation artificial intelligence frameworks and cloud infrastructure.',
        products: ['Sador AI Engine', 'CloudCore OS', 'Enterprise Security Suite']
    },
    {
        id: 'sador-energy',
        name: 'Sador Energy & Utilities',
        category: 'Sustainable Infrastructure',
        description: 'Smart grid solutions and renewable energy monitoring systems.',
        products: ['GridFlow Smart Monitor', 'EcoPower Grid', 'Industrial Energy Analytics']
    },
    {
        id: 'sador-finance',
        name: 'Sador Capital & Fintech',
        category: 'Financial Technologies',
        description: 'Decentralized financial ledgers and automated settlement rails.',
        products: ['Apex Ledger', 'SecurePay Gateway', 'RiskQuant AI']
    }
];

export function CompanyCard({ companies = defaultCompanies, selectedCompanyId, onSelectCompany }: CompanyCardProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            applyWaveTextSplit(sectionRef.current, '.wave-text-reveal');

            gsap.fromTo(
                '.editorial-company-row',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 40%',
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative z-30 bg-black text-white py-32 px-4 sm:px-6 lg:px-12 shadow-[0_-30px_60px_rgba(0,0,0,0.95)] overflow-hidden"
            aria-label="Editorial Company Directory"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-16">
                    <h2 className="wave-text-reveal text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                        Explore Business Units
                    </h2>
                    <p
                        className="wave-text-reveal text-base sm:text-lg max-w-2xl font-bold leading-relaxed"
                        style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.2)' }}
                    >
                        Seamlessly navigating interconnected technological paradigms under unified governance and advanced architectural standards.
                    </p>
                </div>

                <div className="space-y-0">
                    {companies.map((company, idx) => {
                        const isSelected = selectedCompanyId ? company.id === selectedCompanyId : idx === 0;
                        const rowNumber = `0${idx + 1}`;

                        return (
                            <div
                                key={company.id}
                                onClick={() => onSelectCompany?.(company)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        onSelectCompany?.(company);
                                    }
                                }}
                                role="button"
                                tabIndex={0}
                                aria-selected={isSelected}
                                className="editorial-company-row group relative py-10 cursor-pointer outline-none focus:ring-1 focus:ring-emerald-400"
                            >
                                {isSelected && (
                                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-emerald-400 transform origin-top transition-transform duration-300" />
                                )}

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 sm:px-8">
                                    <div className="lg:col-span-5 flex items-baseline gap-6">
                                        <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-emerald-400 transition-colors duration-300">
                                            {rowNumber}
                                        </span>
                                        <div>
                                            <h3
                                                className="wave-text-reveal font-bold text-white group-hover:translate-x-2 transition-transform duration-300 tracking-tight"
                                                style={{
                                                    fontSize: 'clamp(1.5rem, 2.4vw, 2.4rem)',
                                                    letterSpacing: '-0.03em',
                                                }}
                                            >
                                                {company.name}
                                            </h3>
                                            <span className="font-mono text-xs uppercase tracking-[0.12em] text-zinc-400 mt-1 block font-bold">
                                                {company.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-5">
                                        <p
                                            className="wave-text-reveal text-sm sm:text-base text-zinc-300 group-hover:text-white transition-colors duration-300 font-bold leading-relaxed"
                                            style={{ maxWidth: '480px' }}
                                        >
                                            {company.description}
                                        </p>
                                    </div>

                                    <div className="lg:col-span-2 flex justify-start lg:justify-end items-center">
                                        {/* Clean minimal entry without exploratory action text */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default CompanyCard;
