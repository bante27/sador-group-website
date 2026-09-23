import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function ServicesHero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.hero-anim',
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top 85%',
                        once: true,
                    },
                }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="pt-12 pb-16 border-b border-[#D4D4D8]">
            <div className="hero-anim text-[11px] font-mono tracking-widest text-[#71717A] uppercase mb-4">
                SADOR GROUP / SERVICES
            </div>
            <h1
                className="hero-anim font-medium tracking-tight text-[#18181B] mb-6 max-w-3xl"
                style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', lineHeight: 1.1 }}
            >
                Technology capabilities built around business needs.
            </h1>
            <p className="hero-anim text-base sm:text-lg text-[#71717A] max-w-2xl font-light leading-relaxed">
                Sador Group provides core strategic capabilities, multi-entity ecosystem coordination, and robust infrastructure advisory tailored to complex enterprise requirements.
            </p>
        </div>
    );
}

export default ServicesHero;
