import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export const PortfolioHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const eyebrowRef = useRef<HTMLSpanElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const dividerRef = useRef<HTMLHRElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (prefersReducedMotion) {
                gsap.set([lineRef.current, eyebrowRef.current, headingRef.current, descRef.current, dividerRef.current], {
                    opacity: 1,
                    y: 0,
                    scaleY: 1,
                    scaleX: 1,
                });
                return;
            }

            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(
                lineRef.current,
                { scaleY: 0, transformOrigin: 'top' },
                { scaleY: 1, duration: 0.6 }
            )
            .fromTo(
                eyebrowRef.current,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.5 },
                '-=0.4'
            )
            .fromTo(
                headingRef.current,
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.7 },
                '-=0.3'
            )
            .fromTo(
                descRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                '-=0.4'
            )
            .fromTo(
                dividerRef.current,
                { scaleX: 0, transformOrigin: 'left' },
                { scaleX: 1, duration: 0.8, ease: 'power4.out' },
                '-=0.2'
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
                <div ref={lineRef} className="w-[2px] h-6 bg-emerald-600 mt-1" />
                <span
                    ref={eyebrowRef}
                    className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-700 font-mono"
                >
                    SELECTED PROJECTS
                </span>
            </div>

            <h1
                ref={headingRef}
                className="text-4xl md:text-6xl font-light text-slate-900 tracking-tight max-w-4xl mb-6 leading-[1.1]"
            >
                Technology built for real-world impact.
            </h1>

            <p
                ref={descRef}
                className="text-lg md:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mb-12"
            >
                Sador Group's portfolio represents selected projects demonstrating core technology capabilities, rigorous engineering innovation, and practical corporate business applications.
            </p>

            <hr
                ref={dividerRef}
                className="border-t border-zinc-300 w-full"
            />
        </div>
    );
};

export default PortfolioHero;
