import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import rocketAnimation from '@/assets/animations/Businessman rocket.json';

export const PortfolioCTA: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0B132B] text-white mt-16 relative overflow-hidden rounded-3xl max-w-7xl mx-auto shadow-2xl border border-white/10">
            {/* Background glowing effects */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                <div className="w-48 h-48 sm:w-60 sm:h-60 mb-6 flex items-center justify-center">
                    <DotLottieReact
                        data={rocketAnimation as unknown as Record<string, unknown>}
                        loop
                        autoplay
                        className="w-full h-full object-contain filter drop-shadow-lg"
                    />
                </div>

                <span className="text-xs uppercase font-mono tracking-[0.25em] text-emerald-400 block mb-3 font-semibold">
                    INITIATE COLLABORATION
                </span>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                    Have a project in mind?
                </h2>

                <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8 font-medium leading-relaxed">
                    Let's discuss how technology can support your next stage of growth.
                </p>

                <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-500 transition-all duration-300 shadow-xl hover:scale-105 hover:shadow-emerald-600/30"
                >
                    <span>Start a Conversation</span>
                    <span className="text-lg">→</span>
                </button>
            </div>
        </section>
    );
};

export default PortfolioCTA;
