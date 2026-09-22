import React from 'react';
import CompanyDetails from './CompanyDetails';
import CompanyProducts from './CompanyProducts';

export function CompanyDetailsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <CompanyDetails />
            <CompanyProducts />
        </div>
    );
}

export default CompanyDetailsPage;
