import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ServiceVideoLayer() {
    const leftVideoRef = useRef<HTMLVideoElement>(null);
    const rightVideoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const leftEl = leftVideoRef.current;
        const rightEl = rightVideoRef.current;
        const containerEl = containerRef.current;

        if (!leftEl || !rightEl || !containerEl) return;

        leftEl.play().catch(() => { });
        rightEl.play().catch(() => { });

        // ScrollTrigger to smoothly scale and reveal videos as the user scrolls into the section
        ScrollTrigger.create({
            trigger: containerEl,
            start: 'top 90%',
            end: 'bottom 10%',
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                gsap.to([leftEl, rightEl], {
                    opacity: 1,
                    scale: 1,
                    filter: 'none',
                    overwrite: 'auto',
                    duration: 0.1,
                });
            },
        });
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-visible z-20 hidden lg:block">
            {/* Left Video Frame (Fully clear, no blur, no shadow, no line box) */}
            <div className="absolute -left-36 top-1/2 -translate-y-1/2 w-56 h-72 overflow-hidden bg-transparent">
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

            {/* Right Video Frame (Fully clear, no blur, no shadow, no line box) */}
            <div className="absolute -right-36 top-1/2 -translate-y-1/2 w-56 h-72 overflow-hidden bg-transparent">
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
