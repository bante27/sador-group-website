import React from 'react';

export interface Service {
    id: string;
    number: string;
    title: string;
    description: string;
    category?: string;
    capabilities?: string[];
    icon?: React.ReactNode;
}
