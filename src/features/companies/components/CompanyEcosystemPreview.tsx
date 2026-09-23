import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { revealOnScroll } from '@/components/animation/scrollAnimations';

export function CompanyEcosystemPreview() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            revealOnScroll(
                sectionRef.current,
                '.eco-split-left',
                { x: '-100vw', opacity: 0 },
                { x: '0%', opacity: 1, duration: 1.0, ease: 'power4.out' },
                'top 75%'
            );

            revealOnScroll(
                sectionRef.current,
                '.eco-split-right',
                { x: '100vw', opacity: 0 },
                { x: '0%', opacity: 1, duration: 1.0, ease: 'power4.out' },
                'top 75%'
            );

            revealOnScroll(
                sectionRef.current,
                '.eco-bg-bridge',
                { scaleX: 0, opacity: 0 },
                { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power3.inOut' },
                'top 75%'
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-black text-white py-24 px-6 sm:px-12 lg:px-20 border-b border-[#27272A]/40 overflow-hidden"
            aria-label="Sador Group Ecosystem Overview"
        >
            {/* White background bridge container exclusively for text highlighting */}
            <div className="relative w-full overflow-hidden py-12">
                <div
                    className="eco-bg-bridge absolute inset-0 bg-white z-0 rounded-lg shadow-xl"
                    style={{ transformOrigin: 'center' }}
                />

                {/* Two-side split text content */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-8 sm:px-16 items-center">

                    {/* Left Text Side */}
                    <div className="eco-split-left space-y-6 text-[#18181B]">
                        <p className="text-sm sm:text-base leading-relaxed font-normal">
                            Sador Group operates as an interconnected holding organization, uniting specialized technological enterprises under unified governance. Below is the active architectural hierarchy connecting our core ventures into a single seamless digital ecosystem.
                        </p>
                        <p className="text-sm sm:text-base leading-relaxed font-normal">
                            Under the Architectural Structure of our Group Holdings and Parent Holding Organization, Sador Group oversees key subsidiaries. Sador Technologies (01) specializes in enterprise software and AI, focusing on next-generation artificial intelligence frameworks, cloud infrastructure, and enterprise automation utilities.
                        </p>
                    </div>

                    {/* Right Text Side */}
                    <div className="eco-split-right space-y-6 text-[#18181B]">
                        <p className="text-sm sm:text-base leading-relaxed font-normal">
                            Sador Energy & Utilities (02) drives sustainable infrastructure by pioneering smart grid solutions, renewable energy monitoring, and sustainable industrial power grids.
                        </p>
                        <p className="text-sm sm:text-base leading-relaxed font-normal">
                            Sador Capital & Fintech (03) advances financial technologies by delivering secure decentralized financial ledgers, automated cross-border settlement rails, and high-frequency risk modeling, with full explore capabilities across all divisions.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default CompanyEcosystemPreview;
