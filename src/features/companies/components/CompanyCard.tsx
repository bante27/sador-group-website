import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Company } from '../data/companies';

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
            gsap.fromTo(
                '.editorial-company-row',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 78%',
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
            className="bg-[#FAF9F6] text-[#18181B] py-24 px-4 sm:px-6 lg:px-12 border-b border-[#D4D4D8]/40 overflow-hidden"
            aria-label="Editorial Company Directory"
        >
            <div className="max-w-7xl mx-auto w-full">
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
                                className="editorial-company-row group relative py-10 cursor-pointer border-t border-[#D4D4D8] last:border-b transition-colors outline-none focus:ring-1 focus:ring-[#059669]"
                            >
                                {/* Subtle active vertical indicator */}
                                {isSelected && (
                                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#059669] transform origin-top transition-transform duration-300" />
                                )}

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 sm:px-8">
                                    {/* Number & Name Column */}
                                    <div className="lg:col-span-5 flex items-baseline gap-6">
                                        <span className="font-mono text-xs font-medium text-[#71717A] group-hover:text-[#059669] transition-colors duration-300">
                                            {rowNumber}
                                        </span>
                                        <div>
                                            <h3
                                                className="font-semibold text-[#18181B] group-hover:translate-x-2 transition-transform duration-300 tracking-tight"
                                                style={{
                                                    fontSize: 'clamp(1.5rem, 2.4vw, 2.4rem)',
                                                    letterSpacing: '-0.03em',
                                                }}
                                            >
                                                {company.name}
                                            </h3>
                                            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#71717A] mt-1 block">
                                                {company.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description Column */}
                                    <div className="lg:col-span-5">
                                        <p
                                            className="text-sm sm:text-base text-[#71717A] group-hover:text-[#18181B] transition-colors duration-300 font-normal leading-relaxed"
                                            style={{ maxWidth: '480px' }}
                                        >
                                            {company.description}
                                        </p>
                                    </div>

                                    {/* Explore Action Column */}
                                    <div className="lg:col-span-2 flex justify-start lg:justify-end items-center">
                                        <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#18181B] group-hover:text-[#059669] transition-colors duration-300">
                                            <span>Explore</span>
                                            <span
                                                className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1 group-hover:-rotate-12 text-[#059669]"
                                            >
                                                ↗
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                {/* Animated thin emerald hover divider */}
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-transparent group-hover:bg-[#059669] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default CompanyCard;
