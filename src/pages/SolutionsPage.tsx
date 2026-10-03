import React from 'react';
import SolutionsSection from '../features/solutions/components/SolutionsSection';
import SEO from '../components/SEO';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schema.utils';

export function SolutionsPage() {
    const schemas = [
        generateWebPageSchema(
            'Solutions & Business Challenges | Sador Group',
            'Explore documented business challenges, technology solutions, and proven outcomes delivered by Sador Group.',
            '/solutions'
        ),
        generateBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Solutions', path: '/solutions' },
        ]),
    ];

    return (
        <div className="pt-24">
            <SEO
                title="Solutions & Business Challenges | Sador Group"
                description="Explore documented business challenges, technology solutions, and proven outcomes delivered by Sador Group."
                path="/solutions"
                schema={schemas}
            />
            <SolutionsSection />
        </div>
    );
}

export default SolutionsPage;
