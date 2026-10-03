import React from 'react';
import CompaniesHero from '@/features/companies/components/CompaniesHero';
import CompanyEcosystemPreview from '@/features/companies/components/CompanyEcosystemPreview';
import CompanyDetails from '@/features/companies/components/CompanyDetails';
import CompanyCard from '@/features/companies/components/CompanyCard';
import SEO from '../components/SEO';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schema.utils';

export function CompaniesPage() {
    const schemas = [
        generateWebPageSchema(
            'Companies & Ecosystem | Sador Group',
            'Explore verified businesses and ecosystem entities within the Sador Group network.',
            '/companies'
        ),
        generateBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Companies', path: '/companies' },
        ]),
    ];

    return (
        <div className="min-h-screen bg-[#FAF9F6]">
            <SEO
                title="Companies & Ecosystem | Sador Group"
                description="Explore verified businesses and ecosystem entities within the Sador Group network."
                path="/companies"
                schema={schemas}
            />
            <CompaniesHero />
            <CompanyEcosystemPreview />
            <CompanyDetails />
            <CompanyCard />
        </div>
    );
}

export default CompaniesPage;
