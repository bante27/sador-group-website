import React, { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import contactButtonAnimation from '../../../assets/animations/Contact Button.json';

export const InsightsCTA: React.FC = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const prefersReducedMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches;

            if (prefersReducedMotion) {
                gsap.set(contentRef.current, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="py-14 px-6 md:px-12 bg-[#FAF9F6] text-[#111318] mt-16"
        >
            <div
                ref={contentRef}
                className="max-w-4xl mx-auto text-center will-change-transform flex flex-col items-center"
            >
                <span className="text-xs uppercase font-mono tracking-[0.2em] text-emerald-700 block mb-4 font-semibold">
                    STAY CONNECTED
                </span>

                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
                    Stay connected with what we're building.
                </h2>

                <p className="text-zinc-600 text-lg max-w-xl mx-auto mb-10 font-normal leading-relaxed">
                    Explore our latest updates, technology perspectives, and company news.
                </p>

                <div
                    onClick={() => navigate('/contact')}
                    className="cursor-pointer w-72 h-32 flex items-center justify-center bg-transparent"
                >
                    <DotLottieReact
                        data={contactButtonAnimation as unknown as Record<string, unknown>}
                        loop
                        autoplay
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default InsightsCTA;
