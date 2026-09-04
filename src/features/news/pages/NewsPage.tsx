import React from 'react';
import NewsGrid from '../components/NewsGrid';

export function NewsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8">Latest News & Insights</h1>
            <NewsGrid />
        </div>
    );
}

export default NewsPage;
