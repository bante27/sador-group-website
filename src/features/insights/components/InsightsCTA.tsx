import React from 'react';
import { useNavigate } from 'react-router-dom';

export const InsightsCTA: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="py-4 px-6 md:px-12 bg-[#FAF9F6] text-[#111318] mt-16 ">
            <div className="max-w-4xl mx-auto text-center">
                <span className="text-xs uppercase font-mono tracking-[0.2em] text-emerald-700 block mb-4 font-semibold">
                    STAY CONNECTED
                </span>

                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
                    Stay connected with what we're building.
                </h2>

                <p className="text-zinc-600 text-lg max-w-xl mx-auto mb-10 font-normal leading-relaxed">
                    Explore our latest updates, technology perspectives, and company news.
                </p>

                <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#111318] text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors shadow-md"
                >
                    Start a Conversation →
                </button>
            </div>
        </section>
    );
};

export default InsightsCTA;
