import React from 'react';
import { ServicesSection } from '../features/services/components/ServicesSection';
import SEO from '../components/SEO';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schema.utils';

export function ServicesPage() {
    const schemas = [
        generateWebPageSchema(
            'Services & Digital Capabilities | Sador Group',
            'Explore verified technology services, digital transformation consulting, and enterprise solutions provided by Sador Group.',
            '/services'
        ),
        generateBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
        ]),
    ];

    return (
        <>
            <SEO
                title="Services & Digital Capabilities | Sador Group"
                description="Explore verified technology services, digital transformation consulting, and enterprise solutions provided by Sador Group."
                path="/services"
                schema={schemas}
            />
            <ServicesSection />
        </>
    );
}

export default ServicesPage;
