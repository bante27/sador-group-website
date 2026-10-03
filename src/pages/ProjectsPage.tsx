import React from 'react';
import PortfolioSection from '../features/portfolio/components/PortfolioSection';
import PageTransition from '../components/animation/PageTransition';
import SEO from '../components/SEO';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schema.utils';

export const ProjectsPage: React.FC = () => {
    const schemas = [
        generateWebPageSchema(
            'Projects & Case Studies | Sador Group',
            'Explore officially published projects, digital initiatives, and enterprise case studies from Sador Group.',
            '/projects'
        ),
        generateBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
        ]),
    ];

    return (
        <PageTransition>
            <SEO
                title="Projects & Case Studies | Sador Group"
                description="Explore officially published projects, digital initiatives, and enterprise case studies from Sador Group."
                path="/projects"
                schema={schemas}
            />
            <main className="min-h-screen bg-[#FAF9F6]">
                <PortfolioSection />
            </main>
        </PageTransition>
    );
};

export default ProjectsPage;
