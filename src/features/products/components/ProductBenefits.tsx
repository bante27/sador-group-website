import React from 'react';

interface ProductBenefitsProps {
    benefits?: string[];
}

export function ProductBenefits({ benefits }: ProductBenefitsProps) {
    if (!benefits || benefits.length === 0) {
        return null;
    }

    return (
        <section className="mb-16 py-12 border-t border-zinc-200">
            <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-[#71717A] mb-8">Strategic Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, idx) => (
                    <div key={idx} className="p-6 bg-white border border-zinc-200 flex flex-col justify-between">
                        <span className="font-mono text-xs text-[#059669] mb-4 tracking-widest">
                            BENEFIT {String(idx + 1).padStart(2, '0')}
                        </span>
                        <p className="text-sm font-light text-[#18181B] leading-relaxed">
                            {benefit}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductBenefits;
