export interface Project {
    id: string;
    slug: string;
    number: string;
    name: string;
    client?: string;
    clientConfidential?: boolean;
    industry: string;
    description: string;
    technologies: string[];
    screenshots?: string[];
    results?: string[];
    projectUrl?: string;
    year?: string;
    featured?: boolean;
    category?: string;
}
