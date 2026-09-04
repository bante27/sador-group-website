import React from 'react';
import CompanyDetails from '../components/CompanyDetails';
import CompanyProducts from '../components/CompanyProducts';

export function CompanyDetailsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <CompanyDetails />
            <CompanyProducts />
        </div>
    );
}

export default CompanyDetailsPage;
