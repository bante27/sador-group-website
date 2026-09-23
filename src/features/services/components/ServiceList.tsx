import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Service } from '../types/service.types';
import ServiceItem from './ServiceItem';

interface ServiceListProps {
    services: Service[];
}

export function ServiceList({ services }: ServiceListProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.service-row-anim',
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: 'top 78%',
                        once: true,
                    },
                }
            );
        }, listRef);

        return () => ctx.revert();
    }, []);

    const handleSelect = (service: Service) => {
        setSelectedId((prev) => (prev === service.id ? null : service.id));
    };

    return (
        <div ref={listRef} className="w-full border-t border-[#D4D4D8]">
            {services.map((service, index) => (
                <div key={service.id} className="service-row-anim">
                    <ServiceItem
                        service={service}
                        index={index}
                        onSelect={handleSelect}
                        isExpanded={selectedId === service.id}
                    />
                </div>
            ))}
        </div>
    );
}

export default ServiceList;
