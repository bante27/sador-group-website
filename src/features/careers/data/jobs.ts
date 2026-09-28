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

export const sampleJobs: JobOpening[] = [];
