import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';
import { Target, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FlipCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    details: string[];
    footerText: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
    title,
    description,
    icon,
    details,
    footerText,
}) => {
    const cardInnerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const inner = cardInnerRef.current;
        if (!inner) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const parent = inner.parentElement;
        if (!parent) return;

        // Ultra-fast responsive hover timing
        const handlePointerEnter = () => {
            gsap.to(inner, {
                rotateY: 180,
                duration: 0.15,
                ease: 'power1.out',
            });
        };

        const handlePointerLeave = () => {
            gsap.to(inner, {
                rotateY: 0,
                duration: 0.15,
                ease: 'power1.out',
            });
        };

        parent.addEventListener('pointerenter', handlePointerEnter);
        parent.addEventListener('pointerleave', handlePointerLeave);

        return () => {
            parent.removeEventListener('pointerenter', handlePointerEnter);
            parent.removeEventListener('pointerleave', handlePointerLeave);
        };
    }, []);

    return (
        <div
            className="vision-mission-card w-full h-[400px] cursor-pointer will-change-transform"
            style={{ perspective: '1400px' }}
        >
            <div
                ref={cardInnerRef}
                className="relative w-full h-full rounded-2xl transition-all duration-700"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/90 shadow-sm flex flex-col justify-between"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)', zIndex: 2 }}
                >
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-6">
                            {icon}
                        </div>
                        <h3 className="text-2xl font-light text-zinc-900 mb-4 tracking-tight">{title}</h3>
                        <p className="text-zinc-600 font-light text-base leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500 uppercase">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            {footerText}
                        </div>
                        <span className="text-[11px] text-emerald-600 font-medium normal-case inline-flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-full">
                            Hover to explore <ArrowRight className="w-3 h-3" />
                        </span>
                    </div>
                </div>

                {/* Back Side with expanded information */}
                <div
                    className="absolute inset-0 bg-zinc-900 text-white p-8 sm:p-10 rounded-2xl border border-zinc-800 shadow-xl flex flex-col justify-between"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', zIndex: 1 }}
                >
                    <div>
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                            <h3 className="text-xl font-medium text-white tracking-tight">{title} — Deep Dive</h3>
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        </div>
                        <ul className="space-y-3 mt-4">
                            {details.map((detail, idx) => (
                                <li key={idx} className="text-sm text-zinc-300 flex items-start gap-3 font-light leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400 uppercase">
                        <span>SADOR GROUP CORP</span>
                        <span className="text-emerald-400">ENTERPRISE ECOSYSTEM</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const VisionMission: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            // Cards enter from opposite sides (left & right) with revealOnScroll supporting full reverse on scroll back
            revealOnScroll(
                containerRef.current,
                '.vision-mission-card',
                { xPercent: (i: number) => (i === 0 ? -40 : 40), y: 40, rotationY: (i: number) => (i === 0 ? -12 : 12), opacity: 0 },
                { xPercent: 0, y: 0, rotationY: 0, opacity: 1, duration: 1.2, stagger: 0.25, ease: 'power3.out' },
                'top 75%'
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-16 sm:py-24 bg-[#FAF9F6] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FlipCard
                        title="Our Vision"
                        description="To be a premier global enterprise transforming industries through cutting-edge technology ecosystems, sustainable innovation, and exceptional value creation."
                        icon={<Target className="w-6 h-6" />}
                        details={[
                            'Global Market Leadership & Multi-Industry Expansion across continents.',
                            'Pioneering Next-Generation AI, Cloud, and Software Ecosystems.',
                            'Driving Sustainable Corporate Value Creation for long-term stakeholders.',
                            'Establishing uncompromising Enterprise Standards & Digital Trust.'
                        ]}
                        footerText="Strategic Outlook 2030+"
                    />

                    <FlipCard
                        title="Our Mission"
                        description="To engineer resilient digital solutions, empower businesses across diverse markets, and foster high-impact technological growth that shapes a better future."
                        icon={<Compass className="w-6 h-6" />}
                        details={[
                            'Engineering Resilient, Fault-Tolerant, and High-Performance Digital Solutions.',
                            'Empowering Enterprises across diverse global markets with scalable tools.',
                            'Fostering High-Impact Technological Growth that reshapes modern business.',
                            'Unwavering Commitment to Rigorous Corporate Governance & Execution.'
                        ]}
                        footerText="Operational Execution"
                    />
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
