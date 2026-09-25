import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { solutions } from '../data/solutions';
import SolutionItem from './SolutionItem';

export function SolutionList() {
    const [expandedId, setExpandedId] = useState<string | null>(solutions[0]?.id || null);
    const listRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.solution-item-anim',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, listRef);

        return () => ctx.revert();
    }, []);

    const handleToggle = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <div ref={listRef} className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
            <div className="divide-y divide-slate-200">
                {solutions.map((solution) => (
                    <div key={solution.id} className="solution-item-anim">
                        <SolutionItem
                            solution={solution}
                            isExpanded={expandedId === solution.id}
                            onToggle={() => handleToggle(solution.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SolutionList;
