import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Solution } from '../types/solution.types';

interface SolutionItemProps {
    solution: Solution;
    isExpanded: boolean;
    onToggle: () => void;
}

export function SolutionItem({ solution, isExpanded, onToggle }: SolutionItemProps) {
    const expandRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!expandRef.current) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(expandRef.current, { height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 });
            return;
        }

        if (isExpanded) {
            gsap.fromTo(
                expandRef.current,
                { height: 0, opacity: 0, y: -6 },
                { height: 'auto', opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
            );
        } else {
            gsap.to(expandRef.current, {
                height: 0,
                opacity: 0,
                y: -6,
                duration: 0.4,
                ease: 'power3.inOut',
            });
        }
    }, [isExpanded]);

    return (
        <div className="border-b border-slate-200 py-8 transition-colors duration-300">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isExpanded}
                className="w-full text-left flex items-center justify-between cursor-pointer group focus:outline-none"
            >
                <div className="flex items-baseline gap-6">
                    <span className="font-mono text-sm tracking-widest text-[#FF7A53] font-semibold">
                        {solution.number}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-medium tracking-tight text-[#12143F]">
                        {solution.title}
                    </h3>
                </div>
                <div className="text-xl text-[#FF7A53] group-hover:text-[#12143F] transition-colors duration-300">
                    {isExpanded ? '−' : '+'}
                </div>
            </button>

            {/* Expandable 3-column business logic layout */}
            <div
                ref={expandRef}
                style={{ height: 0, opacity: 0, overflow: 'hidden' }}
                className="mt-8"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-6 px-2 sm:px-4 bg-[#F4F7F5]/50 rounded-xl">
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
        </div>
    );
}

export default SolutionItem;
