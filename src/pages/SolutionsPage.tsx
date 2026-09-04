import React from 'react';
import ChallengeSection from '../features/solutions/components/ChallengeSection';

export function SolutionsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-black mb-4 text-white">Business Solutions & Challenges</h1>
            <p className="text-slate-300 mb-12">How Sador Group solves real-world enterprise challenges through innovative technology ecosystems.</p>
            <ChallengeSection />
        </div>
    );
}

export default SolutionsPage;