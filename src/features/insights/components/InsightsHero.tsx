import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import rocketAnimation from '../../../assets/animations/Businessman rocket.json';

export const InsightsHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const dividerRef = useRef<HTMLHRElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReducedMotion) {
                gsap.set([headingRef.current, descRef.current, dividerRef.current], {
                    opacity: 1,
                    y: 0,
                    scaleX: 1,
                });
                return;
            }

            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(
                headingRef.current,
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.7 }
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
        <div ref={containerRef} className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
                <div className="lg:col-span-4 flex items-center justify-center lg:justify-start">
                    <div className="w-full max-w-[320px] h-[260px] flex items-center justify-center">
                        <DotLottieReact
                            data={rocketAnimation as unknown as Record<string, unknown>}
                            loop
                            autoplay
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                <div className="lg:col-span-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <h1
                        ref={headingRef}
                        className="text-4xl md:text-6xl font-light text-slate-900 tracking-tight max-w-4xl mb-6 leading-[1.1]"
                    >
                        Ideas, updates, and perspectives.
                    </h1>

                    <p
                        ref={descRef}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed"
                    >
                        Explore selected news, technology perspectives, product updates, and stories from across the Sador Group ecosystem.
                    </p>
                </div>
            </div>

            <hr
                ref={dividerRef}
                className="border-t border-zinc-300 w-full"
            />
        </div>
    );
};

export default InsightsHero;
