import React from 'react';
import ServiceCard from './ServiceCard';

export function ServicesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
    );
}

export default ServicesGrid;
