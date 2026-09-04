import React from 'react';

export function ProductFilters() {
    return (
        <div className="flex gap-4 mb-6">
            <button className="px-4 py-2 bg-gray-100 rounded font-medium">All</button>
            <button className="px-4 py-2 bg-gray-100 rounded font-medium">Software</button>
            <button className="px-4 py-2 bg-gray-100 rounded font-medium">Hardware</button>
        </div>
    );
}

export default ProductFilters;
