import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function ProductsHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const tunnelLayerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'power3.out' },
            });

            tl.fromTo(
                tunnelLayerRef.current,
                {
                    width: '60vw',
                    height: '65vh',
                    borderRadius: '2.5rem',
                    scale: 0.8,
                    y: 40,
                },
                {
                    width: '100vw',
                    height: '100vh',
                    borderRadius: '0rem',
                    scale: 1,
                    y: 0,
                    duration: 1.2,
                }
            );

            if (contentRef.current) {
                tl.fromTo(
                    contentRef.current,
                    { opacity: 0, y: 30, filter: 'blur(6px)' },
                    { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7 },
                    '-=0.5'
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen w-full bg-[#18181B] flex items-center justify-center overflow-hidden relative">
            <div
                ref={tunnelLayerRef}
                className="bg-[#FAF9F6] text-[#18181B] flex flex-col justify-center px-8 md:px-20 lg:px-28 shadow-2xl relative overflow-hidden w-[60vw] h-[65vh] rounded-[2.5rem]"
            >
                <div ref={contentRef} className="max-w-5xl mx-auto w-full z-10 will-change-transform opacity-0">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 tracking-tight max-w-4xl leading-[1.08] mb-8">
                        Technology built for real-world business impact.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 font-normal max-w-2xl leading-relaxed mb-10">
                        23+ enterprise solutions spanning software engineering, artificial intelligence, financial clearing, and secure infrastructure.
                    </p>

                    <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-zinc-300 font-mono text-xs uppercase tracking-widest text-zinc-500">
                        <div className="flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                            <span className="text-slate-900 font-medium">Active Ecosystem</span>
                        </div>
                        <div>/ 23+ Verified Solutions</div>
                        <div className="text-emerald-700 ml-auto font-semibold">Explore the Ecosystem →</div>
                    </div>
                </div>

                <div className="absolute right-[-10%] top-[-10%] w-[45vw] h-[45vw] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
            </div>
        </section>
    );
}

export default ProductsHero;
