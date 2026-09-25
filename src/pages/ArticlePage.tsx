import React from 'react';
import { useParams } from 'react-router-dom';
import InsightsSection from '../features/insights/components/InsightsSection';
import PageTransition from '../components/animation/PageTransition';

export const ArticlePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <PageTransition>
            <main className="min-h-screen bg-[#FAF9F6]">
                <InsightsSection initialSlug={id} />
            </main>
        </PageTransition>
    );
};

export default ArticlePage;
