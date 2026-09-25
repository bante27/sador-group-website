import React from 'react';
import { Solution } from '../types/solution.types';

interface SolutionItemProps {
    solution: Solution;
}

export function SolutionItem({ solution }: SolutionItemProps) {
    return (
        <div className="border-b border-slate-200 py-10 transition-colors duration-300">
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
