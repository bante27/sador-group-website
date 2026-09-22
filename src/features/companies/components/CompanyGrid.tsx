import React, { useState } from 'react';
import { companies, Company } from '../data/companies';
import CompanyCard from './CompanyCard';
import { X, ExternalLink, ShieldCheck, Layers } from 'lucide-react';

export function CompanyGrid() {
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

    return (
        <div className="relative">
            {/* Grid of subsidiaries */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {companies.map((company) => (
                    <CompanyCard
                        key={company.id}
                        company={company}
                        onSelect={(comp) => setSelectedCompany(comp)}
                    />
                ))}
            </div>

            {/* Interactive Modal / Detailed View to prevent confusion with Sador Group */}
            {selectedCompany && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white w-full max-w-2xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-zinc-200 relative overflow-hidden">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedCompany(null)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Sador Group Subsidiary Relationship Notice */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full font-bold">
                                Sador Group Subsidiary Unit
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-[#09090B] mb-3">
                            {selectedCompany.name}
                        </h2>

                        <p className="text-zinc-900 font-bold text-base leading-relaxed mb-6">
                            {selectedCompany.description}
                        </p>

                        <div className="space-y-6 mb-8">
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3 flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-[#059669]" />
                                    Core Products & Services
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {selectedCompany.products.map((prod, idx) => (
                                        <div key={idx} className="bg-zinc-50 border border-zinc-200/80 p-3 rounded-xl font-bold text-sm text-zinc-900">
                                            {prod}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-emerald-50/60 border border-emerald-500/20 p-4 rounded-2xl flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                                <p className="text-xs text-zinc-900 font-bold leading-relaxed">
                                    Operated under strict governance and centralized technological standards established by <strong className="text-zinc-900 font-bold">Sador Group</strong>.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                            <button
                                onClick={() => setSelectedCompany(null)}
                                className="px-6 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-sm transition-colors"
                            >
                                Close Overview
                            </button>

                            {selectedCompany.website && (
                                <a
                                    href={selectedCompany.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-sm flex items-center gap-2 transition-colors shadow-sm"
                                >
                                    <span>Visit Subsidiary Portal</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CompanyGrid;
