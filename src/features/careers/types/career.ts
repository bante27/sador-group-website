export interface JobOpening {
    id: string;
    title: string;
    department: string;
    location: string;
    employmentType: string;
    description: string;
    skills: string[];
    applicationUrl?: string;
    isOpen: boolean;
}

export interface CulturePrinciple {
    id: string;
    title: string;
    description: string;
    iconName: string;
}

export interface CareerBenefit {
    id: string;
    title: string;
    description: string;
}
