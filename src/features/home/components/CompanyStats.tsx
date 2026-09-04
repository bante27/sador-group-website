import React, { useEffect, useState, useRef } from 'react';
import { fetchCompanyStats, CompanyStatItem } from '../data/homeContent';

function StatCounter({ value }: { value: string }) {
    const [displayCount, setDisplayCount] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const numericMatch = value.match(/[\d.]+/);
        if (!numericMatch) return;

        const target = parseFloat(numericMatch[0]);
        let start = 0;
        const duration = 600;
        const steps = 20;
        const increment = target / steps;
        const stepTime = duration / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setDisplayCount(target);
                clearInterval(timer);
            } else {
                setDisplayCount(Number(start.toFixed(target % 1 !== 0 ? 1 : 0)));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [isVisible, value]);

    const numericMatch = value.match(/[\d.]+/);
    const suffix = numericMatch ? value.replace(numericMatch[0], '') : value;

    return (
        <div ref={counterRef}>
            {displayCount}{suffix}
        </div>
    );
}

export function CompanyStats() {
    const [stats, setStats] = useState<CompanyStatItem[]>([
        { value: '10+', label: 'Global Sectors' },
        { value: '50M+', label: 'Users Reached' },
        { value: '100%', label: 'Commitment' },
    ]);

    useEffect(() => {
        const loadStats = async () => {
            try {
                const data = await fetchCompanyStats();
                if (data && data.length > 0) {
                    setStats(data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        loadStats();
    }, []);

    return (
        <div className="bg-slate-50 py-10 sm:py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 text-center">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden p-6 sm:p-8 bg-white text-slate-900 rounded-2xl shadow-lg sm:shadow-xl border border-slate-100 transition-all duration-500 cursor-pointer active:scale-95"
                    >
                        <div className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 group-active:translate-x-0 transition-transform duration-500 ease-in-out z-0"></div>
                        <div className="relative z-10">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold group-hover:text-white group-active:text-white transition-colors duration-300">
                                <StatCounter value={stat.value} />
                            </div>
                            <div className="text-xs sm:text-sm lg:text-base text-slate-600 group-hover:text-slate-100 group-active:text-slate-100 mt-2 font-medium transition-colors duration-300">
                                {stat.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompanyStats;