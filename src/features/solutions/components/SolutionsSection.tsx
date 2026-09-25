import React from 'react';
import SolutionsHero from './SolutionsHero';
import SolutionList from './SolutionList';

export function SolutionsSection() {
    return (
        <section className="relative w-full bg-white py-20 overflow-hidden">
            <SolutionsHero />
            <SolutionList />
        </section>
    );
}

export default SolutionsSection;
