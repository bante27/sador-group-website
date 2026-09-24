import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { revealOnScroll } from '@/components/animation/scrollAnimations';

gsap.registerPlugin(ScrollTrigger);

export function ServicesHero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const accentRef = useRef<HTMLDivElement>(null);
    const eyebrowRef = useRef<HTMLDivElement>(null);
    const titleLine1Ref = useRef<HTMLDivElement>(null);
    const titleLine2Ref = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const capabilityRef = useRef<HTMLDivElement>(null);
    const capabilityNumberRef = useRef<HTMLDivElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            gsap.set(
                [
                    accentRef.current,
                    eyebrowRef.current,
                    titleLine1Ref.current,
                    titleLine2Ref.current,
                    descriptionRef.current,
                    capabilityRef.current,
                    capabilityNumberRef.current,
                    dividerRef.current,
                ],
                { clearProps: 'all' }
            );
            return;
        }

        const ctx = gsap.context(() => {
            gsap.set(accentRef.current, { scaleY: 0, transformOrigin: 'top' });
            gsap.set(eyebrowRef.current, { opacity: 0, y: 14 });
            gsap.set([titleLine1Ref.current, titleLine2Ref.current], { yPercent: 105 });
            gsap.set(descriptionRef.current, { opacity: 0, y: 18 });
            gsap.set(capabilityRef.current, { opacity: 0, x: 20 });
            gsap.set(capabilityNumberRef.current, { opacity: 0, y: 10 });
            gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: 'left center' });

            const tl = gsap.timeline({
                defaults: { ease: 'power3.out' },
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play reverse play reverse',
                },
            });

            tl.to(accentRef.current, {
                scaleY: 1,
                duration: 0.6,
                ease: 'power3.out',
            })
                .to(
                    eyebrowRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.55,
                        ease: 'power3.out',
                    },
                    0.15
                )
                .to(
                    [titleLine1Ref.current, titleLine2Ref.current],
                    {
                        yPercent: 0,
                        duration: 0.85,
                        stagger: 0.08,
                        ease: 'power4.out',
                    },
                    0.30
                )
                .to(
                    descriptionRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.65,
                        ease: 'power3.out',
                    },
                    0.75
                )
                .to(
                    [capabilityRef.current, capabilityNumberRef.current],
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        duration: 0.75,
                        ease: 'power3.out',
                    },
                    0.85
                )
                .to(
                    dividerRef.current,
                    {
                        scaleX: 1,
                        duration: 0.9,
                        ease: 'power2.out',
                    },
                    1.05
                );

            gsap.to(heroRef.current, {
                yPercent: -6,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });

            gsap.to(capabilityRef.current, {
                yPercent: -10,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="w-full bg-[#030B1E] text-white pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    {/* Left Main Content */}
                    <div className="lg:col-span-8">
                        {/* Eyebrow */}



                        {/* Heading */}
                        <h1
                            className="font-normal tracking-tight text-white mb-6 max-w-4xl"
                            style={{ fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', lineHeight: 1.08 }}
                        >
                            <div className="overflow-hidden py-1">
                                <div ref={titleLine1Ref} className="will-change-transform">
                                    Technology capabilities
                                </div>
                            </div>
                            <div className="overflow-hidden py-1">
                                <div ref={titleLine2Ref} className="will-change-transform text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                                    built around business needs.
                                </div>
                            </div>
                        </h1>

                        {/* Paragraph matching exact dark navy style & copy */}
                        <p
                            ref={descriptionRef}
                            className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-slate-300 max-w-3xl will-change-transform"
                        >
                            Sador Group brings together specialized technology businesses focused on
                            innovation, digital transformation, and long-term business growth.
                            Through a connected ecosystem of capabilities and expertise, we develop
                            practical technology solutions that respond to evolving business needs.
                            Our approach connects innovation with sustainable value creation,
                            enabling businesses to grow, adapt, and compete in a changing digital world.
                        </p>
                    </div>

                    {/* Right-Side Capability Block */}
                    <div className="lg:col-span-4 lg:pb-2">
                        <div
                            ref={capabilityRef}
                            className="p-8 border border-slate-800 bg-slate-900/80 backdrop-blur-md will-change-transform rounded-2xl shadow-2xl"
                        >
                            <div
                                ref={capabilityNumberRef}
                                className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-2 will-change-transform"
                            >
                                Sador Group
                            </div>
                            <div className="text-xs font-mono tracking-widest uppercase text-slate-400">
                                Connected technology businesses serving    evolving business needs
                            </div>
                        </div>
                    </div>
                </div>

                {/* Horizontal Divider */}
                <div className="mt-16 pt-4">
                    <div
                        ref={dividerRef}
                        className="w-full h-[1px] bg-slate-800 will-change-transform"
                    />
                </div>
            </div>
        </div>
    );
}

export default ServicesHero;
