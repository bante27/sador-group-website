import { Service } from '../types/service.types';

export const services: Service[] = [
    {
        id: 'enterprise-ecosystem-orchestration',
        number: '01',
        title: 'Enterprise Ecosystem Orchestration',
        category: 'GOVERNANCE & ARCHITECTURE',
        description: 'Coordinating cross-company capabilities, portfolio alignment, and unified operational standards across Sador Group operating entities.',
        capabilities: [
            'Multi-Entity Synergy Mapping',
            'Corporate Governance Alignment',
            'Resource & Capital Allocation Strategy'
        ]
    },
    {
        id: 'strategic-infrastructure-advisory',
        number: '02',
        title: 'Strategic Infrastructure Advisory',
        category: 'STRATEGIC CONSULTING',
        description: 'High-level technical and operational roadmapping designed to support long-term corporate expansion and enterprise resilience.',
        capabilities: [
            'Long-Term Technology Roadmapping',
            'Risk Assessment & Continuity Planning',
            'Enterprise Security Governance'
        ]
    },
    {
        id: 'venture-integration-services',
        number: '03',
        title: 'Venture Integration Services',
        category: 'PORTFOLIO DEVELOPMENT',
        description: 'Structured integration frameworks for newly acquired or incubated ventures to streamline operational readiness and market deployment.',
        capabilities: [
            'Operational Onboarding Frameworks',
            'Shared Services Integration',
            'Performance Metric Standardization'
        ]
    },
    {
        id: 'technology-capability-alignment',
        number: '04',
        title: 'Technology Capability Alignment',
        category: 'CAPABILITY MANAGEMENT',
        description: 'Ensuring that subsidiary technologies and proprietary products align strictly with overarching corporate business objectives and compliance standards.',
        capabilities: [
            'Capability Audit & Review',
            'Compliance & Regulatory Guidance',
            'Cross-Brand Technical Synergy'
        ]
    }
];
