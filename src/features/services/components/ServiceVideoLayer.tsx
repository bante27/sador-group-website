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

        // ScrollTrigger to smoothly fade and slide in videos from left and right sides without any shadow, border, or fade
        ScrollTrigger.create({
            trigger: containerEl,
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                // Instant solid appearance once triggered
                const xOffset = (1 - progress) * 80;
                gsap.to(leftEl, {
                    x: -xOffset,
                    opacity: 1,
                    overwrite: 'auto',
                    duration: 0.05,
                });
                gsap.to(rightEl, {
                    x: xOffset,
                    opacity: 1,
                    overwrite: 'auto',
                    duration: 0.05,
                });
            },
        });
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-visible z-20 hidden lg:block">
            {/* Left Video Frame (Larger, full, crystal clear, borderless, shadowless) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-80 overflow-hidden bg-transparent">
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

            {/* Right Video Frame (Larger, full, crystal clear, borderless, shadowless) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-80 overflow-hidden bg-transparent">
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
