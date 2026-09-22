import React from 'react';

export function CompanyHero() {
    return (
        <div className="py-20 text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#059669] block font-bold mb-3">
                Global Ecosystem & Ventures
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#09090B] mb-6">
                Our Subsidiary <span className="font-bold italic text-[#059669]">Companies</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-900 font-bold leading-relaxed">
                Explore the diverse technology enterprises powering the Sador Group ecosystem under centralized governance and rigorous standards.
            </p>
        </div>
    );
}

export default CompanyHero;
