import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceVideoLayerProps {
    isActive: boolean;
}

export function ServiceVideoLayer({ isActive }: ServiceVideoLayerProps) {
    const leftVideoRef = useRef<HTMLVideoElement>(null);
    const rightVideoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const leftEl = leftVideoRef.current;
        const rightEl = rightVideoRef.current;

        if (!leftEl || !rightEl) return;

        if (isActive) {
            leftEl.play().catch(() => { });
            rightEl.play().catch(() => { });

            gsap.to([leftEl, rightEl], {
                opacity: (i) => (i === 0 ? 0.85 : 0.75),
                scale: 1,
                x: 0,
                filter: 'blur(0px)',
                duration: 0.8,
                ease: 'power3.out',
                overwrite: 'auto',
            });
        } else {
            gsap.to(leftEl, {
                opacity: 0,
                scale: 0.88,
                x: -40,
                filter: 'blur(8px)',
                duration: 0.6,
                ease: 'power3.out',
                overwrite: 'auto',
                onComplete: () => {
                    leftEl.pause();
                },
            });

            gsap.to(rightEl, {
                opacity: 0,
                scale: 0.88,
                x: 40,
                filter: 'blur(8px)',
                duration: 0.6,
                ease: 'power3.out',
                overwrite: 'auto',
                onComplete: () => {
                    rightEl.pause();
                },
            });
        }
    }, [isActive]);

    useEffect(() => {
        const leftEl = leftVideoRef.current;
        const rightEl = rightVideoRef.current;
        if (!leftEl || !rightEl) return;

        gsap.set(leftEl, { opacity: 0, scale: 0.88, x: -40, filter: 'blur(8px)' });
        gsap.set(rightEl, { opacity: 0, scale: 0.88, x: 40, filter: 'blur(8px)' });
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-visible z-20 hidden lg:block">
            {/* Left Video Frame */}
            <div className="absolute -left-36 top-1/2 -translate-y-1/2 w-64 h-80 overflow-hidden rounded-xl shadow-2xl border border-white/20 bg-black">
                <video
                    ref={leftVideoRef}
                    src="/Support Service.mp4"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Video Frame */}
            <div className="absolute -right-36 top-1/2 -translate-y-1/2 w-64 h-80 overflow-hidden rounded-xl shadow-2xl border border-white/20 bg-black">
                <video
                    ref={rightVideoRef}
                    src="/Support Service.mp4"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default ServiceVideoLayer;
