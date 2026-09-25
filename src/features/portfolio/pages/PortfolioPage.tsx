import React from 'react';
import PortfolioSection from '../components/PortfolioSection';
import PageTransition from '../../../components/animation/PageTransition';

export const PortfolioPage: React.FC = () => {
    return (
        <PageTransition>
            <main className="min-h-screen bg-[#FAF9F6]">
                <PortfolioSection />
            </main>
        </PageTransition>
    );
};

export default PortfolioPage;
