import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import rocketAnimation from '@/assets/animations/Businessman rocket.json';

export const PortfolioCTA: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="py-4 pb-20 px-6 md:px-12 bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0B132B] text-white my-16 relative overflow-hidden rounded-2xl max-w-5xl mx-auto shadow-xl border border-white/10">
            {/* Background glowing effects */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mb-3 flex items-center justify-center">
                    <DotLottieReact
                        data={rocketAnimation as unknown as Record<string, unknown>}
                        loop
                        autoplay
                        className="w-full h-full object-contain filter drop-shadow-lg"
                    />
                </div>

                <span className="text-[11px] uppercase font-mono tracking-[0.2em] text-emerald-400 block mb-2 font-semibold">
                    INITIATE COLLABORATION
                </span>

                <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3 text-white">
                    Have a project in mind?
                </h2>

                <p className="text-slate-300 text-base max-w-lg mx-auto mb-6 font-medium leading-relaxed">
                    Let's discuss how technology can support your next stage of growth.
                </p>

                <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-500 transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-emerald-600/30 text-sm"
                >
                    <span>Start a Conversation</span>
                    <span className="text-base">→</span>
                </button>
            </div>
        </section>
    );
};

export default PortfolioCTA;
