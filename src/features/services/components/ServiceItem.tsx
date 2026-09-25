import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Service } from '../types/service.types';

interface ServiceItemProps {
    service: Service;
    index: number;
    onSelect?: (service: Service) => void;
    isExpanded?: boolean;
}

export function ServiceItem({ service, index, onSelect, isExpanded = false }: ServiceItemProps) {
    const expandRef = useRef<HTMLDivElement>(null);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!expandRef.current) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(expandRef.current, { height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 });
            return;
        }

        if (isExpanded) {
            gsap.fromTo(
                expandRef.current,
                { height: 0, opacity: 0, y: -4 },
                { height: 'auto', opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
            );
        } else {
            gsap.to(expandRef.current, {
                height: 0,
                opacity: 0,
                y: -4,
                duration: 0.3,
                ease: 'power3.inOut',
            });
        }
    }, [isExpanded]);

    const descriptionAndCaps = [
        service.description,
        ...(service.capabilities || [])
    ].filter(Boolean).join('. ').toLowerCase();

    return (
        <div ref={itemRef} className="transition-colors duration-500 my-4">
            <div
                onClick={() => onSelect?.(service)}
                className="w-full max-w-2xl mx-auto text-center py-4 px-4 cursor-pointer group"
            >
                {/* Single Title */}
                <h3 className="text-xl sm:text-2xl font-semibold tracking-normal mb-2 text-[#12143F]">
                    {service.title.toLowerCase()}
                </h3>

                {/* Continuous Paragraph */}
                <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
                    {descriptionAndCaps}.
                </p>
            </div>
        </div>
    );
}

export default ServiceItem;
