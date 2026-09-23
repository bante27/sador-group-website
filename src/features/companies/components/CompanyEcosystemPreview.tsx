import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { companies } from '../data/companies';

gsap.registerPlugin(ScrollTrigger);

interface CompanyEcosystemPreviewProps {
    onSelectCompany?: (id: string) => void;
}

export function CompanyEcosystemPreview({ onSelectCompany }: CompanyEcosystemPreviewProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    once: true,
                },
                defaults: { ease: 'power3.out' }
            });

            tl.fromTo(
                '.eco-preview-label',
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.8 }
            )
            .fromTo(
                '.eco-preview-parent',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.9 },
                '-=0.5'
            )
            .fromTo(
                '.eco-preview-line-main',
                { scaleY: 0, transformOrigin: 'top' },
                { scaleY: 1, duration: 0.8 },
                '-=0.5'
            )
            .fromTo(
                '.eco-preview-row',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
                '-=0.4'
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleRowClick = (id: string) => {
        setSelectedId(selectedId === id ? null : id);
        if (onSelectCompany) {
            onSelectCompany(id);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#FAF9F6] text-[#18181B] py-24 px-4 sm:px-6 lg:px-12 border-b border-[#D4D4D8]/40 overflow-hidden"
            aria-label="Sador Group Business Ecosystem Preview"
        >
            <div className="max-w-7xl mx-auto w-full">
                
                {/* Section Eyebrow */}
                <div className="eco-preview-label flex items-center gap-3 mb-12">
                    <span className="h-3 w-[2px] bg-[#059669] inline-block" />
                    <span 
                        className="font-mono uppercase text-[#71717A] font-medium"
                        style={{ fontSize: '11px', letterSpacing: '0.18em' }}
                    >
                        Architectural Structure / Group Holdings
                    </span>
                </div>

                {/* Parent Holding Node */}
                <div className="eco-preview-parent flex flex-col items-center text-center mb-16 relative">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#71717A] mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                        Parent Holding Organization
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#18181B]">
                        SADOR GROUP
                    </h2>
                    
                    {/* Vertical connecting line down to ecosystem */}
                    <div className="eco-preview-line-main w-[1px] h-12 bg-[#D4D4D8] mt-6" />
                </div>

                {/* Companies Architectural Rows */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {companies.map((company, index) => {
                        const isSelected = selectedId === company.id;
                        const companyNumber = `0${index + 1}`;

                        return (
                            <div
                                key={company.id}
                                onClick={() => handleRowClick(company.id)}
                                className={`eco-preview-row group cursor-pointer border-t border-[#D4D4D8] pt-6 pb-6 transition-all duration-300 ${
                                    isSelected ? 'bg-white/60 px-4 rounded-lg shadow-xs' : ''
                                }`}
                                role="button"
                                tabIndex={0}
                                aria-selected={isSelected}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    
                                    {/* Left: Number & Name */}
                                    <div className="flex items-baseline gap-6">
                                        <span className={`font-mono text-sm font-bold transition-colors duration-300 ${
                                            isSelected ? 'text-[#059669]' : 'text-[#71717A] group-hover:text-[#059669]'
                                        }`}>
                                            {companyNumber}
                                        </span>
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] group-hover:translate-x-2 transition-transform duration-300 tracking-tight">
                                                {company.name}
                                            </h3>
                                            <span className="block font-mono text-[10px] uppercase tracking-wider text-[#71717A] mt-1">
                                                {company.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Right: Description & Explore Arrow */}
                                    <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto">
                                        <p className="text-xs sm:text-sm text-[#71717A] max-w-xs sm:text-right hidden sm:block">
                                            {company.description}
                                        </p>
                                        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#18181B] group-hover:text-[#059669] transition-colors duration-300">
                                            <span>Explore</span>
                                            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#059669]">
                                                ↗
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                {/* Mobile description display */}
                                <div className="mt-3 sm:hidden text-xs text-[#71717A]">
                                    {company.description}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom status note */}
                <div className="mt-16 text-center font-mono text-xs text-[#71717A]">
                    Integrated Corporate Ecosystem &bull; Governed under Sador Holdings
                </div>

            </div>
        </section>
    );
}

export default CompanyEcosystemPreview;
