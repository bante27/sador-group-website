import React from 'react';
import Hero from '../features/home/components/Hero';
import CompanyStats from '../features/home/components/CompanyStats';
import Companytech from '../features/home/components/Companytech';
import BusinessEcosystem from '../features/home/components/BusinessEcosystem';
import FeaturedProducts from '../features/home/components/FeaturedProducts';
import HomeCTA from '../features/home/components/HomeCTA';
export function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
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
