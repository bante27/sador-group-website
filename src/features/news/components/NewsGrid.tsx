import React from 'react';
import NewsCard from './NewsCard';

export function NewsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    );
}

export default NewsGrid;
