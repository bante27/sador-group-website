import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Solution } from '../types/solution.types';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface SolutionItemProps {
    solution: Solution;
    index: number;
}

export function SolutionItem({ solution, index }: SolutionItemProps) {
    const itemRef = useRef<HTMLDivElement>(null);
    const isEven = index % 2 === 0;

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion || !itemRef.current) return;

        const el = itemRef.current;
        const xStart = isEven ? -80 : 80;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { opacity: 0, x: xStart },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, itemRef);

        return () => ctx.revert();
    }, [isEven]);

    return (
        <div ref={itemRef} className="py-10 transition-colors duration-300 will-change-[transform,opacity]">
            <div className="flex items-baseline gap-6 mb-6">
                <span className="font-mono text-sm tracking-widest text-[#FF7A53] font-semibold">
                    {solution.number}
                </span>
                <h3 className="text-xl sm:text-3xl font-medium tracking-tight text-[#12143F]">
                    {solution.title}
                </h3>
            </div>

            {/* Always visible 3-column business logic layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-6 px-4 sm:px-6 bg-[#F4F7F5]/50 rounded-xl">
                {/* Business Challenge */}
                <div className="space-y-2">
                    <div className="text-xs font-mono tracking-widest text-[#FF7A53] uppercase font-semibold">
                        BUSINESS CHALLENGE
                    </div>
                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                        {solution.challenge}
                    </p>
                </div>

                {/* Sador Group Solution */}
                <div className="space-y-2">
                    <div className="text-xs font-mono tracking-widest text-[#12143F] uppercase font-semibold">
                        SADOR GROUP SOLUTION
                    </div>
                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                        {solution.solution}
                    </p>
                </div>

                {/* Result */}
                <div className="space-y-2">
                    <div className="text-xs font-mono tracking-widest text-[#059669] uppercase font-semibold">
                        RESULT
                    </div>
                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                        {solution.result}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SolutionItem;
