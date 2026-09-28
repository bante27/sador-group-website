import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DotLottieReact, DotLottie } from '@lottiefiles/dotlottie-react';
import businessmanAnimation from '../../../assets/animations/businessman-balancing.json';

gsap.registerPlugin(ScrollTrigger);

export function CareerHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<HTMLDivElement>(null);
    const dotLottieRef = useRef<DotLottie | null>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            if (contentRef.current && animationRef.current) {
                gsap.fromTo(
                    contentRef.current,
                    { opacity: 0, x: -30, filter: 'blur(6px)' },
                    { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
                );

                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    onUpdate: (self) => {
                        if (dotLottieRef.current) {
                            const totalFrames = dotLottieRef.current.totalFrames || 100;
                            const currentFrame = self.progress * totalFrames;
                            dotLottieRef.current.setFrame(currentFrame);
                        }
                    },
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[100vh] flex items-center justify-center bg-white text-[#1E3A8A] px-6 lg:px-20 py-20 overflow-hidden">
            <div className="sticky top-0 h-screen max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
                <div ref={contentRef} className="lg:col-span-6 will-change-transform">

                    <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A] mb-6 leading-[1.15]">
                        Build what moves enterprise forward.
                    </h1>

                    <p className="text-base md:text-lg text-slate-700 font-normal leading-relaxed mb-8 max-w-lg">
                        Join Sador Group and work alongside people building technology, businesses, and solutions designed to create lasting real-world impact with zero friction and highest velocity.
                    </p>

                    <div>
                        <a
                            href="#positions"
                            className="inline-block px-7 py-3.5 bg-[#0F172A] text-white font-medium text-sm rounded-xl hover:bg-slate-800 transition-colors shadow-md"
                        >
                            View Open Positions
                        </a>
                    </div>
                </div>

                <div ref={animationRef} className="lg:col-span-6 flex items-center justify-center will-change-transform">
                    <div className="w-full max-w-[520px] h-[380px] md:h-[440px] flex items-center justify-center relative bg-transparent">
                        <DotLottieReact
                            data={businessmanAnimation as unknown as Record<string, unknown>}
                            dotLottieRefCallback={(dotLottie: DotLottie) => {
                                dotLottieRef.current = dotLottie;
                                dotLottie.stop();
                            }}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CareerHero;
