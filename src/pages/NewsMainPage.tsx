import React from 'react';
import InsightsSection from '../features/insights/components/InsightsSection';
import PageTransition from '../components/animation/PageTransition';
import SEO from '../components/SEO';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schema.utils';

export const InsightsPage: React.FC = () => {
    const schemas = [
        generateWebPageSchema(
            'Insights & News | Sador Group',
            'Official Sador Group news, technology perspectives, product updates, and industry publications.',
            '/news'
        ),
        generateBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/news' },
        ]),
    ];

    return (
        <PageTransition>
            <SEO
                title="Insights & News | Sador Group"
                description="Official Sador Group news, technology perspectives, product updates, and industry publications."
                path="/news"
                schema={schemas}
            />
            <main className="min-h-screen bg-[#FAF9F6]">
                <InsightsSection />
            </main>
        </PageTransition>
    );
};

export default InsightsPage;
