import React from 'react';
import { services } from '../data/services';
import ServicesHero from './ServicesHero';
import ServiceList from './ServiceList';
import ServiceCTA from './ServiceCTA';

export function ServicesSection() {
    return (
        <section className="bg-[#FAF9F6] text-[#18181B] py-16 px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-7xl mx-auto">
                <ServicesHero />
                <ServiceList services={services} />
                <ServiceCTA />
            </div>
        </section>
    );
}

export default ServicesSection;
