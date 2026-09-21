import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';
import { Target, Compass } from 'lucide-react';

interface InteractiveCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    details: string[];
    footerText: string;
    isLeft: boolean;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
    title,
    description,
    icon,
    details,
    footerText,
    isLeft,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);
    const detailsRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const rotateXTo = gsap.quickTo(card, 'rotationX', { duration: 0.4, ease: 'power2.out' });
        const rotateYTo = gsap.quickTo(card, 'rotationY', { duration: 0.4, ease: 'power2.out' });

        const handlePointerMove = (e: PointerEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = -((y - centerY) / centerY) * 3;
            const rotateY = ((x - centerX) / centerX) * (isLeft ? 5 : -5); // Cone/Opposite side tilt effect

            rotateXTo(rotateX);
            rotateYTo(rotateY);
        };

        const handlePointerEnter = () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                z: 25,
                boxShadow: '0 25px 35px -10px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(16, 185, 129, 0.3)',
                borderColor: 'rgba(16, 185, 129, 0.5)',
                duration: 0.5,
                ease: 'power3.out',
            });

            if (iconRef.current) {
                gsap.to(iconRef.current, {
                    rotation: isLeft ? 12 : -12,
                    scale: 1.1,
                    duration: 0.4,
                    ease: 'power3.out',
                });
            }

            if (detailsRef.current) {
                gsap.to(detailsRef.current, {
                    opacity: 1,
                    y: 0,
                    height: 'auto',
                    duration: 0.45,
                    ease: 'power3.out',
                });
            }
        };

        const handlePointerLeave = () => {
            rotateXTo(0);
            rotateYTo(0);

            gsap.to(card, {
                y: 0,
                scale: 1,
                z: 0,
                rotationX: 0,
                rotationY: 0,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                borderColor: 'rgba(228, 228, 231, 0.8)',
                duration: 0.6,
                ease: 'power3.out',
            });

            if (iconRef.current) {
                gsap.to(iconRef.current, {
                    rotation: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: 'power3.out',
                });
            }

            if (detailsRef.current) {
                gsap.to(detailsRef.current, {
                    opacity: 0,
                    y: 15,
                    height: 0,
                    duration: 0.3,
                    ease: 'power3.in',
                });
            }
        };

        card.addEventListener('pointermove', handlePointerMove);
        card.addEventListener('pointerenter', handlePointerEnter);
        card.addEventListener('pointerleave', handlePointerLeave);

        return () => {
            card.removeEventListener('pointermove', handlePointerMove);
            card.removeEventListener('pointerenter', handlePointerEnter);
            card.removeEventListener('pointerleave', handlePointerLeave);
        };
    }, [isLeft]);

    return (
        <div
            ref={cardRef}
            className="vision-mission-card bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between cursor-pointer will-change-transform"
            style={{
                perspective: '1200px',
                transformStyle: 'preserve-3d',
            }}
        >
            <div>
                <div
                    ref={iconRef}
                    className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-6 will-change-transform"
                >
                    {icon}
                </div>
                <h3 className="text-2xl font-light text-zinc-900 mb-4 tracking-tight">{title}</h3>
                <p className="text-zinc-600 font-light text-base leading-relaxed mb-6">{description}</p>

                {/* Strategic Focus Details Revealed on Hover */}
                <div
                    ref={detailsRef}
                    className="overflow-hidden opacity-0 translate-y-[15px]"
                    style={{ height: 0 }}
                >
                    <div className="pt-4 pb-2 border-t border-zinc-100">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600 mb-3 font-medium">
                            Strategic Focus
                        </h4>
                        <ul className="space-y-2">
                            {details.map((detail, idx) => (
                                <li key={idx} className="text-sm text-zinc-600 flex items-center gap-2 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500 uppercase">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    {footerText}
                </div>
                <span className="text-[10px] text-zinc-400 normal-case italic">Hover to explore</span>
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
            // Using standard project revealOnScroll utility with opposing entry transforms
            revealOnScroll(
                containerRef.current,
                '.vision-mission-card',
                { xPercent: (i: number) => (i === 0 ? -35 : 35), y: 30, rotationY: (i: number) => (i === 0 ? -8 : 8), opacity: 0 },
                { xPercent: 0, y: 0, rotationY: 0, opacity: 1, duration: 1.0, stagger: 0.2, ease: 'power3.out' },
                'top 75%'
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-16 sm:py-24 bg-[#FAF9F6] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: '1200px' }}>
                    <InteractiveCard
                        title="Our Vision"
                        description="To be a premier global enterprise transforming industries through cutting-edge technology ecosystems, sustainable innovation, and exceptional value creation."
                        icon={<Target className="w-6 h-6" />}
                        details={['Innovation Leadership', 'Global Expansion', 'Sustainable Growth', 'Technology Mastery']}
                        footerText="Strategic Outlook 2030+"
                        isLeft={true}
                    />

                    <InteractiveCard
                        title="Our Mission"
                        description="To engineer resilient digital solutions, empower businesses across diverse markets, and foster high-impact technological growth that shapes a better future."
                        icon={<Compass className="w-6 h-6" />}
                        details={['Digital Transformation', 'Business Enablement', 'Resilient Systems', 'Ecosystem Scaling']}
                        footerText="Operational Execution"
                        isLeft={false}
                    />
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
