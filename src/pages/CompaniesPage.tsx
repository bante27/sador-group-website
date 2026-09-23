import React from 'react';
import CompaniesHero from '@/features/companies/components/CompaniesHero';
import CompanyEcosystemPreview from '@/features/companies/components/CompanyEcosystemPreview';
import CompanyGrid from '@/features/companies/components/CompanyGrid';
import CompanyDetails from '@/features/companies/components/CompanyDetails';

export function CompaniesPage() {
    return (
        <div className="min-h-screen bg-[#FAF9F6]">
            <CompaniesHero />
            <CompanyEcosystemPreview />
            <CompanyGrid />
            <CompanyDetails />
        </div>
    );
}

export default CompaniesPage;
