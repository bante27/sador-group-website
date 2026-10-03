import siteConfig from '../config/site.config';

export const generateOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logos/sador-group.svg`,
    sameAs: [
        siteConfig.url,
    ],
    description: 'Sador Group — technology, digital transformation, innovation, products, services, companies, projects, and insights.',
});

export const generateWebSiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
        '@type': 'SearchAction',
        target: `${siteConfig.url}/products?search={search_term_string}`,
        'query-input': 'required name=search_term_string',
    },
});

export const generateWebPageSchema = (title: string, description: string, path: string) => ({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: `${siteConfig.url}${path}`,
    publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        logo: `${siteConfig.url}/logos/sador-group.svg`,
    },
});

export const generateBreadcrumbSchema = (items: { name: string; path: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${siteConfig.url}${item.path}`,
    })),
});

export const generateArticleSchema = (article: {
    title: string;
    description: string;
    path: string;
    publishedTime: string;
    author?: string;
    image?: string;
}) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image ? (article.image.startsWith('http') ? article.image : `${siteConfig.url}${article.image}`) : `${siteConfig.url}/image.png`,
    datePublished: article.publishedTime,
    author: {
        '@type': 'Organization',
        name: article.author || siteConfig.name,
    },
    publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        logo: {
            '@type': 'ImageObject',
            url: `${siteConfig.url}/logos/sador-group.svg`,
        },
    },
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${siteConfig.url}${article.path}`,
    },
});
