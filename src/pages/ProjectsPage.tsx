import React from 'react';
import PortfolioSection from '../features/portfolio/components/PortfolioSection';
import PageTransition from '../components/animation/PageTransition';

export const ProjectsPage: React.FC = () => {
    return (
        <PageTransition>
            <main className="min-h-screen bg-[#FAF9F6]">
                <PortfolioSection />
            </main>
        </PageTransition>
    );
};

export default ProjectsPage;
