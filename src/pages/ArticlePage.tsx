import React from 'react';
import { useParams } from 'react-router-dom';
import InsightsSection from '../features/insights/components/InsightsSection';
import PageTransition from '../components/animation/PageTransition';
import SEO from '../components/SEO';
import { insights } from '../features/insights/data/insights';
import { generateArticleSchema, generateBreadcrumbSchema } from '../utils/schema.utils';

export const ArticlePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const article = insights.find((i) => i.slug === id || i.id === id);

    const title = article ? `${article.title} | Sador Group Insights` : 'Article | Sador Group Insights';
    const description = article ? article.excerpt : 'Official insights and articles published by Sador Group.';
    const path = `/news/${id || ''}`;
    const publishedTime = article?.publishedAt;
    const author = article?.author;
    const image = article?.image;

    const schemas = [
        article
            ? generateArticleSchema({
                title: article.title,
                description: article.excerpt,
                path,
                publishedTime: article.publishedAt,
                author: article.author,
                image: article.image,
            })
            : null,
        generateBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/news' },
            { name: article?.title || 'Article', path },
        ]),
    ].filter(Boolean);

    return (
        <PageTransition>
            <SEO
                title={title}
                description={description}
                path={path}
                type="article"
                publishedTime={publishedTime}
                author={author}
                image={image}
                schema={schemas}
            />
            <main className="min-h-screen bg-[#FAF9F6]">
                <InsightsSection initialSlug={id} />
            </main>
        </PageTransition>
    );
};

export default ArticlePage;
