export interface Product {
    id: string;
    slug: string;
    name: string;
    logo?: string;
    description: string;
    category: string;
    image?: string;
    features: string[];
    status?: 'Active' | 'Coming Soon' | 'Beta' | 'Archived';
    overview: string;
    problem: string;
    benefits: string[];
    screenshots?: string[];
    technologies?: string[];
    targetUsers?: string[];
    website?: string;
    relatedProducts?: string[]; // IDs or slugs of related products
}

export type ProductCategory =
    | 'Software'
    | 'AI'
    | 'FinTech'
    | 'Business Solutions'
    | 'Mobile'
    | 'Enterprise'
    | 'Other';
