import React from 'react';
import CompanyHero from '../components/CompanyHero';
import CompanyGrid from '../components/CompanyGrid';

export function CompaniesPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <CompanyHero />
            <CompanyGrid />
        </div>
    );
}

export default CompaniesPage;
