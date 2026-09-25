import { Project } from '../types/project.types';

export const projects: Project[] = [
    {
        id: 'proj-01',
        slug: 'global-smart-grid-telemetry',
        number: '01',
        name: 'Enterprise Smart Grid Telemetry Platform',
        client: 'Confidential Energy Provider',
        clientConfidential: true,
        industry: 'Energy & Utilities',
        description: 'Real-time telemetry and predictive grid load management architecture built for high-throughput IoT ingestion and low-latency decision making.',
        technologies: ['TypeScript', 'React', 'Node.js', 'Apache Kafka', 'TimescaleDB', 'GSAP'],
        screenshots: [
            '/public/image.png',
            '/public/image1.png'
        ],
        results: [
            'Project impact information available upon request.',
            'Successfully processed over 4.2 million telemetry events per minute.'
        ],
        projectUrl: 'https://example.com/grid-telemetry',
        year: '2026',
        featured: true,
        category: 'Energy',
    },
    {
        id: 'proj-02',
        slug: 'autonomous-logistics-core',
        number: '02',
        name: 'Autonomous Supply Chain Routing Engine',
        client: 'Global Freight Partner',
        clientConfidential: true,
        industry: 'Enterprise Logistics',
        description: 'Algorithmic route optimization and multi-modal freight tracking interface designed for high-precision global supply chain coordination.',
        technologies: ['React', 'TypeScript', 'GraphQL', 'Docker', 'Tailwind CSS'],
        screenshots: [
            '/public/image1.png'
        ],
        results: [
            'Project impact information available upon request.'
        ],
        projectUrl: 'https://example.com/logistics-core',
        year: '2025',
        featured: true,
        category: 'Enterprise',
    },
    {
        id: 'proj-03',
        slug: 'secure-financial-ledger',
        number: '03',
        name: 'Distributed High-Frequency Settlement Ledger',
        industry: 'Finance',
        description: 'Ultra-secure cryptographic financial transaction ledger providing immutable audit trails and multi-currency institutional clearing.',
        technologies: ['Node.js', 'PostgreSQL', 'Redis', 'TypeScript', 'Docker'],
        screenshots: [
            '/public/image.png'
        ],
        year: '2025',
        featured: false,
        category: 'Finance',
    },
    {
        id: 'proj-04',
        slug: 'precision-agritech-iot',
        number: '04',
        name: 'Precision Crop Yield & Irrigation Analytics',
        industry: 'Agriculture',
        description: 'Integrated IoT sensor dashboard monitoring soil moisture metrics, automated irrigation gates, and predictive harvest timelines.',
        technologies: ['React', 'Python', 'MQTT', 'Tailwind CSS', 'TimescaleDB'],
        screenshots: [
            '/public/image1.png'
        ],
        results: [
            'Project impact information available upon request.'
        ],
        year: '2024',
        featured: false,
        category: 'Agriculture',
    },
    {
        id: 'proj-05',
        slug: 'core-technology-infrastructure',
        number: '05',
        name: 'Distributed Microservices Control Plane',
        client: 'Confidential Enterprise',
        clientConfidential: true,
        industry: 'Technology',
        description: 'Unified management interface and service mesh orchestrator for mission-critical multi-cloud corporate workloads.',
        technologies: ['Kubernetes', 'Go', 'React', 'TypeScript', 'GraphQL'],
        screenshots: [
            '/public/image.png'
        ],
        year: '2026',
        featured: true,
        category: 'Technology',
    }
];
