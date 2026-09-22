import React from 'react';
import CompanyHero from '@/features/companies/components/CompanyHero';
import CompanyGrid from '@/features/companies/components/CompanyGrid';
import CompanyDetails from '@/features/companies/components/CompanyDetails';

export function CompaniesPage() {
    return (
        <div className="min-h-screen bg-[#FAF9F6]">
            <CompanyHero />
            <CompanyGrid />
            <CompanyDetails />
        </div>
    );
}

export default CompaniesPage;