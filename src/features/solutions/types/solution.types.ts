export interface Solution {
    id: string;
    number: string;
    title: string;
    challenge: string;
    solution: string;
    result: string;
    capabilities: string[];
    category?: string;
    featured?: boolean;
}
