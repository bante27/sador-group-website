import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import contactButtonAnimation from '@/assets/animations/Contact Button.json';

export function ServiceCTA() {
    const ctaRef = useRef<HTMLDivElement>(null);

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

    return (
        <div ref={ctaRef} className="pt-16 pb-12  mt-12 text-center flex flex-col items-center">
            <div className="cta-anim text-[14px] font-mono tracking-widest text-[#71717A] uppercase mb-3">
                INQUIRY & COLLABORATION
            </div>
            <h2 className="cta-anim text-2xl sm:text-3xl font-medium text-[#18181B] tracking-tight mb-2">
                Have a technology challenge?
            </h2>
            <p className="cta-anim text-base text-[#71717A] font-light mb-6 max-w-xl mx-auto">
                Let's discuss what Sador Group can build or support for your enterprise ecosystem.
            </p>
            <div className="cta-anim">
                <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-56 h-20 focus:outline-none focus:ring-2 focus:ring-[#059669] focus:ring-offset-2 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
                    aria-label="Start a Conversation"
                >
                    <DotLottieReact
                        data={contactButtonAnimation as unknown as Record<string, unknown>}
                        loop
                        autoplay
                        className="w-full h-full object-contain"
                    />
                </Link>
            </div>
        </div>
    );
}

export default ServiceCTA;
