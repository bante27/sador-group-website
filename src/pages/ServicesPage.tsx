import React from 'react';
import ServicesGrid from '../features/services/components/ServicesGrid';

export function ServicesPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-black mb-4 text-white">Our Technology Services</h1>
            <p className="text-slate-300 mb-12">Explore the comprehensive software, web, and enterprise technology services offered by Sador Group.</p>
            <ServicesGrid />
        </div>
    );
}

export default ServicesPage;