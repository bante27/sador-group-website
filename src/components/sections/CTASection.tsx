import React from 'react';

export function CTASection({ title, subtitle, buttonText, onButtonClick }: { title: string; subtitle: string; buttonText: string; onButtonClick?: () => void }) {
    return (
        <section className="bg-blue-900 text-white py-16 px-6 text-center rounded-2xl my-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4">{title}</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">{subtitle}</p>
            <button onClick={onButtonClick} className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                {buttonText}
            </button>
        </section>
    );
}

export default CTASection;
