import React from 'react';
import CareerHero from '../features/careers/components/CareerHero';
import CultureSection from '../features/careers/components/CultureSection';

export function CareersPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
            <CareerHero />
            <CultureSection />
        </div>
    );
}

export default CareersPage;