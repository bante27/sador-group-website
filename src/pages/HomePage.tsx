import React from 'react';
import Hero from '../features/home/components/Hero';
import CompanyStats from '../features/home/components/CompanyStats';
import Companytech from '../features/home/components/Companytech';
import BusinessEcosystem from '../features/home/components/BusinessEcosystem';
import FeaturedProducts from '../features/home/components/FeaturedProducts';
import HomeCTA from '../features/home/components/HomeCTA';
import SEO from '../components/SEO';
import { generateOrganizationSchema, generateWebSiteSchema, generateBreadcrumbSchema } from '../utils/schema.utils';

export function HomePage() {
    const schemas = [
        generateOrganizationSchema(),
        generateWebSiteSchema(),
        generateBreadcrumbSchema([
            { name: 'Home', path: '/' }
        ])
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
            <SEO
                title="Sador Group | Technology, Innovation & Digital Transformation"
                description="Official website of Sador Group — exploring digital transformation, technology innovation, ecosystem companies, products, and enterprise solutions."
                path="/"
                schema={schemas}
            />
            <Hero />
            <CompanyStats />
            <Companytech />
            <BusinessEcosystem />
            <FeaturedProducts />
            <HomeCTA />
        </div>
    );
}

export default HomePage;
