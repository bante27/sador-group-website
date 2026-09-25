import React from 'react';
import InsightsSection from '../features/insights/components/InsightsSection';
import PageTransition from '../components/animation/PageTransition';

export const InsightsPage: React.FC = () => {
    return (
        <PageTransition>
            <main className="min-h-screen bg-[#FAF9F6]">
                <InsightsSection />
            </main>
        </PageTransition>
    );
};

export default InsightsPage;
