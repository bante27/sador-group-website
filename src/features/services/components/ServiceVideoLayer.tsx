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
                opacity: (i) => (i === 0 ? 0.35 : 0.28),
                scale: 1,
                x: (i) => (i === 0 ? 0 : 0),
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

    // Initial state set
    useEffect(() => {
        const leftEl = leftVideoRef.current;
        const rightEl = rightVideoRef.current;
        if (!leftEl || !rightEl) return;

        gsap.set(leftEl, { opacity: 0, scale: 0.88, x: -40, filter: 'blur(8px)' });
        gsap.set(rightEl, { opacity: 0, scale: 0.88, x: 40, filter: 'blur(8px)' });
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden lg:block">
            {/* Left Video Frame */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-[14vw] h-[450px] overflow-hidden rounded-[2px]">
                <video
                    ref={leftVideoRef}
                    src="/Support Service.mp4"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover transform scale-105"
                />
            </div>

            {/* Right Video Frame */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[14vw] h-[450px] overflow-hidden rounded-[2px]">
                <video
                    ref={rightVideoRef}
                    src="/Support Service.mp4"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover transform scale-105"
                />
            </div>
        </div>
    );
}

export default ServiceVideoLayer;
