import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Service } from '../types/service.types';
import ServiceItem from './ServiceItem';
import ServiceVideoLayer from './ServiceVideoLayer';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ServiceListProps {
    services: Service[];
}

export function ServiceList({ services }: ServiceListProps) {
    const [selectedId, setSelectedId] = React.useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            gsap.set('.service-row-anim', { opacity: 1, y: 0, clearProps: 'all' });
            return;
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.service-row-anim',
                {
                    opacity: 0,
                    y: 32,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [services]);

    const handleToggle = (id: string) => {
        setSelectedId((prev) => (prev === id ? null : id));
    };

    return (
        <div ref={containerRef} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white text-slate-900 overflow-hidden">
            {/* Dual Side Cinematic Videos Layer - Fully responsive scroll-driven appearance */}
            <ServiceVideoLayer />

            {/* Service List Rows */}
            <div ref={listRef} className="relative z-10" role="list">
                {services.map((service, index) => (
                    <div key={service.id} className="service-row-anim will-change-[transform,opacity]">
                        <ServiceItem
                            service={service}
                            index={index}
                            isExpanded={selectedId === service.id}
                            onSelect={() => handleToggle(service.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServiceList;
