import React from 'react';
import CareerHero from '../features/careers/components/CareerHero';
import CultureSection from '../features/careers/components/CultureSection';
import OpenPositions from '../features/careers/components/OpenPositions';
import InternshipCTA from '../features/careers/components/InternshipCTA';
import SEO from '../components/SEO';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schema.utils';

export function CareersPage() {
    const schemas = [
        generateWebPageSchema(
            'Careers & Opportunities | Sador Group',
            'Explore career opportunities, company culture, and open positions at Sador Group.',
            '/careers'
        ),
        generateBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Careers', path: '/careers' },
        ]),
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#18181B] text-[#FAF9F6]">
            <SEO
                title="Careers & Opportunities | Sador Group"
                description="Explore career opportunities, company culture, and open positions at Sador Group."
                path="/careers"
                schema={schemas}
            />
            <CareerHero />
            <CultureSection />
            <OpenPositions />
            <InternshipCTA />
        </div>
    );
}

export default CareersPage;
