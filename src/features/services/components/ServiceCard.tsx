import React from 'react';

export function ServiceCard() {
    return (
        <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-2">Service Title</h3>
            <p className="text-gray-600">Service description goes here.</p>
        </div>
    );
}

export default ServiceCard;

