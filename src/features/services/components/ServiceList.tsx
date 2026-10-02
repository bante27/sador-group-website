import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Service } from '../types/service.types';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import technologyAnimation from '@/assets/animations/TEchnology.json';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ServiceListProps {
    services: Service[];
}

export function ServiceList({ services }: ServiceListProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            gsap.set('.service-row-anim', { opacity: 1, y: 0, clearProps: 'all' });
            return;
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.service-row-anim',
                {
                    opacity: 0,
                    y: 32,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [services]);

    return (
        <div ref={containerRef} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white text-slate-900 overflow-hidden">
            <div ref={listRef} className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-16">
                <div className="flex-1 space-y-6">
                    {services.map((service, index) => (
                        <div key={service.id} className="service-row-anim space-y-1 text-left">
                            <div className="font-mono text-xs uppercase tracking-widest text-emerald-700 font-semibold mb-1">
                                SERVICE {String(index + 1).padStart(2, '0')}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-1">
                                {service.title}
                            </h3>
                            <p className="text-zinc-600 text-base leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Side: Larger Technology Animation (Square Space, No Background, No Shadow) */}
                <div className="w-full lg:w-[500px] h-[600px] bg-transparent flex items-center justify-center shrink-0 sticky top-24">
                    <DotLottieReact
                        data={technologyAnimation as unknown as Record<string, unknown>}
                        loop
                        autoplay
                        className="w-full h-full object-contain scale-125"
                    />
                </div>
            </div>
        </div >
    );
}

export default ServiceList;
