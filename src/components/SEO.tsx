import React, { useEffect } from 'react';
import siteConfig from '../config/site.config';

interface SEOProps {
    title: string;
    description: string;
    path: string;
    image?: string;
    type?: 'website' | 'article' | 'profile';
    publishedTime?: string;
    author?: string;
    schema?: Record<string, any> | Record<string, any>[];
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    path,
    image = '/image.png',
    type = 'website',
    publishedTime,
    author,
    schema,
}) => {
    const fullUrl = `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
    const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image.startsWith('/') ? image : `/${image}`}`;

    useEffect(() => {
        // Document title
        document.title = title;

        // Helper to set or create meta tag
        const setMetaTag = (attrName: 'property' | 'name', attrValue: string, content: string) => {
            let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attrName, attrValue);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Helper to set or create link tag
        const setLinkTag = (rel: string, href: string) => {
            let element = document.querySelector(`link[rel="${rel}"]`);
            if (!element) {
                element = document.createElement('link');
                element.setAttribute('rel', rel);
                document.head.appendChild(element);
            }
            element.setAttribute('href', href);
        };

        // Standard Meta
        setMetaTag('name', 'description', description);
        setLinkTag('canonical', fullUrl);

        // Open Graph
        setMetaTag('property', 'og:title', title);
        setMetaTag('property', 'og:description', description);
        setMetaTag('property', 'og:url', fullUrl);
        setMetaTag('property', 'og:type', type);
        setMetaTag('property', 'og:image', imageUrl);
        setMetaTag('property', 'og:site_name', siteConfig.name);

        // Twitter Card
        setMetaTag('name', 'twitter:card', 'summary_large_image');
        setMetaTag('name', 'twitter:title', title);
        setMetaTag('name', 'twitter:description', description);
        setMetaTag('name', 'twitter:image', imageUrl);

        // Article specific
        if (publishedTime) {
            setMetaTag('property', 'article:published_time', publishedTime);
        }
        if (author) {
            setMetaTag('property', 'article:author', author);
        }

        // JSON-LD Structured Data
        // Remove previous dynamically added JSON-LD
        const existingSchemas = document.querySelectorAll('script[data-seo-schema="true"]');
        existingSchemas.forEach((el) => el.remove());

        if (schema) {
            const schemas = Array.isArray(schema) ? schema : [schema];
            schemas.forEach((sch, index) => {
                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.setAttribute('data-seo-schema', 'true');
                script.textContent = JSON.stringify(sch);
                document.head.appendChild(script);
            });
        }
    }, [title, description, fullUrl, imageUrl, type, publishedTime, author, schema]);

    return null;
};

export default SEO;
