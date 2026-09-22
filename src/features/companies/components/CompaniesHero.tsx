import React, { useLayoutEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronRight, Network, Layers, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { companies } from '../data/companies';

interface CompaniesHeroProps {
    onSelectCompany?: (id: string) => void;
}

export function CompaniesHero({ onSelectCompany }: CompaniesHeroProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeCompanyId, setActiveCompanyId] = useState<string | null>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(
                '.hero-eyebrow',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8 }
            )
                .fromTo(
                    '.hero-title-line',
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.9, stagger: 0.15 },
                    '-=0.4'
                )
                .fromTo(
                    '.hero-desc',
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    '-=0.5'
                )
                .fromTo(
                    '.hero-cta',
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    '-=0.5'
                )
                .fromTo(
                    '.ecosystem-node-main',
                    { opacity: 0, scale: 0.95 },
                    { opacity: 1, scale: 1, duration: 0.8 },
                    '-=0.6'
                )
                .fromTo(
                    '.ecosystem-branch',
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
                    '-=0.4'
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleCompanyClick = (id: string) => {
        setActiveCompanyId(id);
        if (onSelectCompany) {
            onSelectCompany(id);
        }
        // Smooth scroll to companies grid if needed
        const gridElement = document.getElementById('companies-grid');
        if (gridElement) {
            gridElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#FAF9F6] text-[#18181B] pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#D4D4D8]/40"
            style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}
            aria-label="Sador Group Business Ecosystem Hero"
        >
            {/* Background subtle architectural grid lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#18181B_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

                {/* Left Side: Hero Content */}
                <div className="lg:col-span-7 flex flex-col items-start">

                    {/* Eyebrow */}
                    <div className="hero-eyebrow flex items-center gap-3 mb-6">
                        <span className="h-[2px] w-8 bg-[#059669] inline-block" />
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717A] font-semibold">
                            Sador Group / Business Ecosystem
                        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        className="font-semibold tracking-tight text-[#18181B] mb-6"
                        style={{
                            fontSize: 'clamp(2.75rem, 5.5vw, 5.5rem)',
                            lineHeight: 0.95,
                            letterSpacing: '-0.045em',
                        }}
                    >
                        <div className="hero-title-line overflow-hidden pb-1">
                            Technology Businesses.
                        </div>
                        <div className="hero-title-line overflow-hidden text-[#059669] pb-1">
                            One Connected Ecosystem.
                        </div>
                    </h1>

                    {/* Description */}
                    <p className="hero-desc text-[#71717A] text-base sm:text-lg leading-relaxed max-w-[560px] mb-8 font-normal">
                        Sador Group brings together specialized technology businesses that operate independently while contributing to a connected ecosystem of innovation, digital transformation, and sustainable growth.
                    </p>

                    {/* CTAs */}
                    <div className="hero-cta flex flex-wrap items-center gap-4">
                        <a
                            href="#companies-grid"
                            className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white font-medium px-6 py-3.5 rounded-lg transition-all duration-200 shadow-sm group"
                        >
                            <span>Explore Our Companies</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        <a
                            href="/about"
                            className="inline-flex items-center gap-2 text-[#18181B] hover:text-[#059669] font-medium px-4 py-3.5 transition-colors duration-200 group"
                        >
                            <span>About Sador Group</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-12 pt-8 border-t border-[#D4D4D8]/60 flex items-center gap-6 text-xs font-mono text-[#71717A]">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#059669]" />
                            <span>Centralized Governance</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-[#059669]" />
                            <span>Multi-Industry Synergy</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Architectural Ecosystem Visualization */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
                    <div className="w-full max-w-md bg-white border border-[#D4D4D8] rounded-xl p-6 shadow-sm relative">

                        {/* Parent Node */}
                        <div className="ecosystem-node-main bg-[#FAF9F6] border border-[#D4D4D8] rounded-lg p-4 text-center relative z-10 shadow-xs mb-6">
                            <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-[#71717A] mb-1">
                                <Network className="w-3.5 h-3.5 text-[#059669]" />
                                <span>Parent Organization</span>
                            </div>
                            <div className="text-lg font-bold text-[#18181B] tracking-tight">
                                Sador Group
                            </div>
                        </div>

                        {/* Connecting Line Vertical for hierarchy */}
                        <div className="w-px h-6 bg-[#D4D4D8] mx-auto mb-2" />

                        {/* Branches Container */}
                        <div className="space-y-3 relative">
                            {/* Vertical trunk line behind nodes */}
                            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#D4D4D8] lg:hidden" />

                            {companies.map((company, index) => {
                                const isActive = activeCompanyId === company.id;
                                return (
                                    <button
                                        key={company.id}
                                        onClick={() => handleCompanyClick(company.id)}
                                        className={`ecosystem-branch w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center justify-between group cursor-pointer ${isActive
                                                ? 'bg-white border-[#059669] shadow-sm ring-1 ring-[#059669]/20'
                                                : 'bg-[#FAF9F6]/60 hover:bg-white border-[#D4D4D8]/80 hover:border-[#059669]/50'
                                            }`}
                                        aria-label={`Select ${company.name}`}
                                        aria-selected={isActive}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`mt-0.5 w-2 h-2 rounded-full transition-colors ${isActive ? 'bg-[#059669]' : 'bg-[#D4D4D8] group-hover:bg-[#059669]'}`} />
                                            <div>
                                                <div className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-0.5">
                                                    {company.category}
                                                </div>
                                                <div className="text-sm font-semibold text-[#18181B] group-hover:text-[#059669] transition-colors">
                                                    {company.name}
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-[#059669] text-white' : 'bg-[#D4D4D8]/30 text-[#71717A] group-hover:bg-[#059669] group-hover:text-white'
                                            }`}>
                                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Footer indicator inside card */}
                        <div className="mt-6 pt-4 border-t border-[#D4D4D8]/60 flex items-center justify-between text-xs text-[#71717A]">
                            <span>Ecosystem Status: <strong className="text-[#059669] font-medium">Operational</strong></span>
                            <span className="font-mono">3 Active Ventures</span>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default CompaniesHero;
