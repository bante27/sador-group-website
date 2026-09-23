import React from 'react';
import CompaniesHero from '@/features/companies/components/CompaniesHero';
import CompanyEcosystemPreview from '@/features/companies/components/CompanyEcosystemPreview';
import CompanyDetails from '@/features/companies/components/CompanyDetails';
import CompanyCard from '@/features/companies/components/CompanyCard';
export function CompaniesPage() {
    return (
        <div className="min-h-screen bg-[#FAF9F6]">
            <CompaniesHero />
            <CompanyEcosystemPreview />
            <CompanyDetails />
            <CompanyCard />
        </div>
    );
}

export default CompaniesPage;
