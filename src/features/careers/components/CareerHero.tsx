import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export function CareerHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            if (contentRef.current) {
                gsap.fromTo(
                    contentRef.current,
                    { opacity: 0, y: 30, filter: 'blur(6px)' },
                    { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[85vh] flex items-center justify-center bg-[#18181B] text-[#FAF9F6] px-6 py-24 overflow-hidden">
            <div ref={contentRef} className="max-w-5xl mx-auto w-full text-center z-10 will-change-transform">
                <span className="inline-block font-mono text-xs uppercase tracking-widest text-emerald-500 mb-4 px-3 py-1 bg-emerald-950/40 border border-emerald-800/40 rounded-full">
                    Careers at Sador Group
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-[1.08]">
                    Build What Moves Business Forward.
                </h1>

                <p className="text-lg md:text-xl text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed mb-12">
                    Join Sador Group and work alongside people building technology, businesses, and solutions designed to create lasting real-world impact.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#positions"
                        className="px-8 py-4 bg-[#FAF9F6] text-[#18181B] font-medium rounded-xl hover:bg-zinc-200 transition-colors"
                    >
                        View Open Positions
                    </a>
                    <Link
                        to="/about"
                        className="px-8 py-4 bg-zinc-900 text-[#FAF9F6] border border-zinc-800 font-medium rounded-xl hover:bg-zinc-800 transition-colors"
                    >
                        Explore Sador Group
                    </Link>
                </div>
            </div>

            <div className="absolute right-[-10%] top-[-10%] w-[45vw] h-[45vw] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
            <div className="absolute left-[-10%] bottom-[-10%] w-[45vw] h-[45vw] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
        </section>
    );
}

export default CareerHero;
