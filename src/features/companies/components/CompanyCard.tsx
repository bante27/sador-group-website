import React from 'react';

export function CompanyCard() {
    return (
        <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-2">Company Name</h3>
            <p className="text-gray-600">Brief overview of the subsidiary company.</p>
        </div>
    );
}

export default CompanyCard;
