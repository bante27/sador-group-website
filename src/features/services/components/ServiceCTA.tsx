import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export function ServiceCTA() {
    const ctaRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLSpanElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.cta-anim',
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 85%',
                        once: true,
                    },
                }
            );
        }, ctaRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.to(arrowRef.current, {
            x: 6,
            y: -2,
            rotation: -8,
            duration: 0.3,
            ease: 'power3.out',
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.to(arrowRef.current, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.3,
            ease: 'power3.out',
        });
    };

    return (
        <div ref={ctaRef} className="pt-24 pb-16 border-t border-[#D4D4D8] mt-16">
            <div className="cta-anim text-[11px] font-mono tracking-widest text-[#71717A] uppercase mb-4">
                INQUIRY & COLLABORATION
            </div>
            <h2 className="cta-anim text-2xl sm:text-3xl font-medium text-[#18181B] tracking-tight mb-3">
                Have a technology challenge?
            </h2>
            <p className="cta-anim text-base sm:text-lg text-[#71717A] font-light mb-8 max-w-xl">
                Let's discuss what Sador Group can build or support for your enterprise ecosystem.
            </p>
            <div className="cta-anim">
                <Link
                    to="/contact"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="inline-flex items-center gap-2 text-base font-medium text-[#18181B] hover:text-[#059669] transition-colors focus:outline-none focus:ring-2 focus:ring-[#059669] focus:ring-offset-2 py-2"
                >
                    <span>Start a Conversation</span>
                    <span ref={arrowRef} className="inline-block transition-transform">
                        ↗
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default ServiceCTA;
