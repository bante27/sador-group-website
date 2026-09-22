import React from 'react';
import { Company } from '../data/companies';
import { ArrowUpRight, Building2, Layers } from 'lucide-react';

interface CompanyCardProps {
    company: Company;
    onSelect?: (company: Company) => void;
}

export function CompanyCard({ company, onSelect }: CompanyCardProps) {
    return (
        <div
            onClick={() => onSelect && onSelect(company)}
            className="group relative bg-white p-8 sm:p-10 rounded-2xl border border-zinc-200/80 shadow-xs hover:border-[#059669]/40 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
        >
            <div>
                {/* Category & Icon */}
                <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#059669] bg-emerald-50 px-3 py-1 rounded-full font-bold border border-emerald-500/20">
                        {company.category}
                    </span>
                    <Building2 className="w-5 h-5 text-zinc-400 group-hover:text-[#059669] transition-colors" />
                </div>

                {/* Company Name */}
                <h3 className="text-2xl font-bold tracking-tight text-[#09090B] mb-3 group-hover:text-[#059669] transition-colors">
                    {company.name}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-900 font-bold leading-relaxed mb-6">
                    {company.description}
                </p>

                {/* Main Products */}
                <div className="mb-8">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                        <Layers className="w-3.5 h-3.5 text-[#059669]" />
                        <span>Key Offerings</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {company.products.map((prod, idx) => (
                            <span key={idx} className="text-xs bg-zinc-100 text-zinc-900 font-bold px-2.5 py-1 rounded-md">
                                {prod}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Action Footer */}
            <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#059669] group-hover:underline">
                    View Business Unit
                </span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#059669] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
        </div>
    );
}

export default CompanyCard;
