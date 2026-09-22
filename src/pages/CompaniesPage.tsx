import React from 'react';
import CompanyHero from '@/features/companies/components/CompanyHero';
import Companyproduct from '@/features/companies/components/CompanyCard';
import CompanyDetails from '@/features/companies/components/CompanyDetails';

export function CompaniesMainPage() {
    return (
        <div className="min-h-screen bg-[#FAF9F6]">
            <CompanyHero />
            <Companyproduct />
            <CompanyDetails />
        </div>
    );
}

export default CompaniesMainPage;