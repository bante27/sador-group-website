import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { companies, Company } from '../data/companies';
import { createTunnelZoomEffect } from '@/components/animation/scrollAnimations';

interface CompanyDetailsProps {
    companyId?: string;
    onCapabilitySelect?: (capability: string) => void;
}

export function CompanyDetails({ companyId, onCapabilitySelect }: CompanyDetailsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const tunnelLayerRef = useRef<HTMLDivElement>(null);
    const bgImageRef = useRef<HTMLImageElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const company: Company | undefined = companyId
        ? companies.find((c) => c.id === companyId) || companies[0]
        : companies[0];

    const companyIndex = companies.findIndex((c) => c.id === company?.id);
    const formattedIndex = companyIndex >= 0 ? `0${companyIndex + 1}` : '01';

    const companyImages: Record<string, string> = {
        'sador-tech': '/image.png',
        'sador-energy': '/image1.png',
        'sador-finance': '/image.png',
    };

    const currentBgImage = company ? (companyImages[company.id] || '/image.png') : '/image.png';

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (bgImageRef.current) {
                gsap.fromTo(
                    bgImageRef.current,
                    { opacity: 0, scale: 0.95 },
                    { opacity: 1, scale: 1, duration: 1.0, ease: 'power2.out' }
                );
            }

            createTunnelZoomEffect(
                containerRef.current,
                tunnelLayerRef.current,
                contentRef.current
            );
        }, containerRef);

        return () => ctx.revert();
    }, [companyId]);

    if (!company) {
        return (
            <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black text-white text-center">
                <p className="text-sm tracking-wide font-bold text-zinc-400">
                    Select a business to explore its capabilities.
                </p>
            </section>
        );
    }

    return (
        <div
            ref={containerRef}
            className="relative bg-black text-white w-full overflow-hidden border-b border-zinc-800/80"
            style={{ minHeight: '100vh' }}
        >
            <div
                ref={pinRef}
                className="relative w-full h-screen flex items-center justify-center overflow-hidden"
                style={{ perspective: '1400px' }}
            >
                <div
                    ref={tunnelLayerRef}
                    className="absolute z-0 overflow-hidden pointer-events-none transform-gpu will-change-transform shadow-2xl border border-white/10"
                    style={{
                        transformStyle: 'preserve-3d',
                        width: '75vw',
                        height: '70vh',
                        borderRadius: '2rem',
                    }}
                >
                    <img
                        ref={bgImageRef}
                        key={currentBgImage}
                        src={currentBgImage}
                        alt={`${company.name} corporate background environment`}
                        className="w-full h-full object-cover object-center"
                        style={{ filter: 'brightness(0.75) contrast(1.1)' }}
                    />
                    <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
                </div>

                <div
                    ref={contentRef}
                    className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10 py-12"
                >
                    <div className="company-details-eyebrow mb-6">
                        <span className="text-xs uppercase tracking-[0.2em] text-zinc-300 font-bold">
                            Sador Group / Business Unit
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-7 flex flex-col items-start">
                            <span className="font-mono text-xs text-zinc-400 font-bold mb-3 block tracking-widest">
                                {formattedIndex} / COMPANY PROFILE
                            </span>

                            <div className="overflow-hidden py-1 mb-4 w-full">
                                <h2
                                    className="company-details-title font-bold tracking-tight text-white"
                                    style={{
                                        fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
                                        lineHeight: 1.05,
                                    }}
                                >
                                    {company.name}
                                </h2>
                            </div>

                            <div className="company-details-category mb-6">
                                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                                    {company.category}
                                </span>
                            </div>

                            <p className="company-details-desc text-zinc-200 text-sm sm:text-base leading-relaxed max-w-[580px] mb-8 font-bold">
                                {company.description}
                            </p>

                            {company.website && (
                                <div className="company-details-website">
                                    <a
                                        href={company.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-block text-white hover:text-emerald-400 font-bold text-sm transition-colors duration-300 relative py-1"
                                    >
                                        <span>Visit Company Website</span>
                                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/40 group-hover:bg-emerald-400 transition-colors duration-300" />
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-5 flex flex-col space-y-8">
                            <div className="border-t border-white/20 pt-6 space-y-4">
                                <div className="company-details-meta flex justify-between items-baseline">
                                    <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold">
                                        Industry
                                    </span>
                                    <span className="text-sm font-bold text-white">Enterprise Technology</span>
                                </div>
                                <div className="company-details-meta flex justify-between items-baseline">
                                    <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold">
                                        Focus
                                    </span>
                                    <span className="text-sm font-bold text-white">{company.category}</span>
                                </div>
                                <div className="company-details-meta flex justify-between items-baseline">
                                    <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold">
                                        Position
                                    </span>
                                    <span className="text-sm font-bold text-emerald-400">
                                        Sador Group Business Unit
                                    </span>
                                </div>
                            </div>

                            <div className="border-t border-white/20 pt-6">
                                <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-4">
                                    Core Capabilities
                                </h3>
                                <div className="space-y-3">
                                    {company.products.map((product, idx) => {
                                        const prodIndex = `0${idx + 1}`;
                                        return (
                                            <div
                                                key={product}
                                                onClick={() => onCapabilitySelect && onCapabilitySelect(product)}
                                                className="company-details-capability group flex items-center justify-between py-2.5 border-b border-white/10 cursor-pointer transition-colors hover:border-emerald-400/50"
                                                role="button"
                                                tabIndex={0}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="font-mono text-xs text-zinc-400 font-bold group-hover:text-emerald-400 transition-colors">
                                                        {prodIndex}
                                                    </span>
                                                    <span className="text-sm font-bold text-white group-hover:translate-x-1.5 transition-transform duration-300">
                                                        {product}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyDetails;
