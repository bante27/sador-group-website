import React from 'react';
import CareerHero from '../features/careers/components/CareerHero';
import CultureSection from '../features/careers/components/CultureSection';
import OpenPositions from '../features/careers/components/OpenPositions';
import InternshipCTA from '../features/careers/components/InternshipCTA';

export function CareersPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#18181B] text-[#FAF9F6]">
            <CareerHero />
            <CultureSection />
            <OpenPositions />
            <InternshipCTA />
        </div>
    );
}

export default CareersPage;
