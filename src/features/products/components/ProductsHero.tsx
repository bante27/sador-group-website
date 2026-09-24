import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ProductsHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const tunnelLayerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=1200',
                    pin: true,
                    scrub: 1.0,
                    anticipatePin: 1,
                },
            });

            tl.fromTo(
                tunnelLayerRef.current,
                {
                    width: '50vw',
                    height: '50vh',
                    borderRadius: '3rem',
                    scale: 0.6,
                    y: 50,
                },
                {
                    width: '100vw',
                    height: '100vh',
                    borderRadius: '0rem',
                    scale: 1,
                    y: 0,
                    ease: 'power2.inOut',
                }
            );

            if (contentRef.current) {
                tl.fromTo(
                    contentRef.current,
                    { opacity: 0, scale: 0.9, filter: 'blur(8px)' },
                    { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' },
                    0.2
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen w-full bg-[#18181B] flex items-center justify-center overflow-hidden relative">
            <div
                ref={tunnelLayerRef}
                className="bg-[#FAF9F6] text-[#18181B] flex flex-col justify-center px-8 md:px-14 lg:px-18 shadow-2xl relative overflow-hidden"
            >
                <div ref={contentRef} className="max-w-4xl mx-auto w-full z-10 will-change-transform">


                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#1a202c] tracking-normal leading-snug mb-6 font-sans">
                        Technology built for real-world business.
                    </h1>

                    <p className="text-base md:text-lg text-[#004B99] font-sans max-w-2xl leading-relaxed mb-8">
                        23+ products across software, AI, fintech and enterprise solutions designed for uncompromising scalability.
                    </p>

                    <div className="flex items-center gap-6 pt-6 border-t border-zinc-200 font-mono text-xs uppercase tracking-widest text-[#71717A]">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
                            <span>Active Ecosystem</span>
                        </div>
                        <div>/ 23+ Solutions</div>
                        <div className="text-[#059669]">Scroll to Expand ↓</div>
                    </div>
                </div>

                <div className="absolute right-[-10%] top-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
            </div>
        </section>
    );
}

export default ProductsHero;
