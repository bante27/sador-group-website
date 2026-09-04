import React from 'react';

export function ArticleContent() {
  return (
    <article className="py-12 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Article Title</h1>
      <p className="text-gray-600 mb-8">Published on September 2, 2026</p>
      <div className="prose">Full body content of the article goes here.</div>
    </article>
  );
}

export default ArticleContent;
