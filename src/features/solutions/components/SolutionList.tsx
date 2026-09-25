import React from 'react';
import { solutions } from '../data/solutions';
import SolutionItem from './SolutionItem';

export function SolutionList() {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 overflow-hidden">
            <div className="divide-y divide-slate-200">
                {solutions.map((solution, index) => (
                    <div key={solution.id}>
                        <SolutionItem solution={solution} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SolutionList;
