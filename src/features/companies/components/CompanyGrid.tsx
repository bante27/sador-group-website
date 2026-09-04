import React from 'react';
import CompanyCard from './CompanyCard';

export function CompanyGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
        </div>
    );
}

export default CompanyGrid;
