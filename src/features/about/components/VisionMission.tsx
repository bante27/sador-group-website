import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

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

        // Perfectly flat at rest, flipping 180deg on Y-axis during hover
        const handlePointerEnter = () => {
            gsap.to(inner, {
                rotateY: 180,
                duration: 0.2,
                ease: 'power3.inOut',
            });
        };

        const handlePointerLeave = () => {
            gsap.to(inner, {
                rotateY: 0,
                duration: 0.2,
                ease: 'power3.inOut',
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
                style={{ transformStyle: 'preserve-3d', transform: 'rotateY(0deg)' }}
            >
                {/* Front Side - Perfectly flat and aligned at rest */}
                <div
                    className="absolute inset-0 bg-[#FFFFFF] p-8 sm:p-10 rounded-2xl border border-[#E4E4E7] shadow-sm flex flex-col justify-between"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)', zIndex: 2 }}
                >
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] border border-[#E4E4E7] flex items-center justify-center text-[#18181B] mb-6">
                            {icon}
                        </div>
                        <h3 className="text-2xl font-light text-[#18181B] mb-4 tracking-tight">{title}</h3>
                        <p className="text-[#09090B] font-semibold text-base leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E4E4E7] flex items-center justify-between text-xs font-mono text-[#71717A] uppercase">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                            {footerText}
                        </div>
                    </div>
                </div>

                {/* Back Side - Deep Dive information */}
                <div
                    className="absolute inset-0 bg-[#18181B] text-[#FFFFFF] p-8 sm:p-10 rounded-2xl border border-[#27272A] shadow-xl flex flex-col justify-between"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', zIndex: 1 }}
                >
                    <div>
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#27272A]">
                            <h3 className="text-xl font-medium text-[#FFFFFF] tracking-tight">{title} — Deep Dive</h3>
                            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
                        </div>
                        <ul className="space-y-3 mt-4">
                            {details.map((detail, idx) => (
                                <li key={idx} className="text-sm text-[#A1A1AA] flex items-start gap-3 font-light leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#27272A] flex items-center justify-between text-xs font-mono text-[#71717A] uppercase">
                        <span>SADOR GROUP CORP</span>
                        <span className="text-[#059669]">ENTERPRISE ECOSYSTEM</span>
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

            revealOnScroll(
                containerRef.current,
                '.vision-mission-card',
                { xPercent: (i: number) => (i === 0 ? -30 : 30), y: 30, opacity: 0 },
                { xPercent: 0, y: 0, opacity: 1, duration: 1.0, stagger: 0.2, ease: 'power3.out' },
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
