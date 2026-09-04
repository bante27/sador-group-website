import React from 'react';

export function NewsCard() {
    return (
        <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-2">News Headline</h3>
            <p className="text-gray-600">Short excerpt of the news article.</p>
        </div>
    );
}

export default NewsCard;
