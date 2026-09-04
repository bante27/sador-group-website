import React from 'react';

export function ProductsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-black mb-4 text-white">Sador Group Product Ecosystem (23+ Products)</h1>
            <p className="text-slate-300 mb-12">Explore our cutting-edge software solutions, FinTech apps, AI systems, and enterprise platforms.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Sador Enterprise Suite</h3>
                    <p className="text-slate-300 text-sm mb-4">Scalable enterprise resource planning and management software.</p>
                    <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full">Enterprise</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Sador FinTech Pay</h3>
                    <p className="text-slate-300 text-sm mb-4">Secure digital payment gateway and transaction processing system.</p>
                    <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full">FinTech</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Sador AI Assistant</h3>
                    <p className="text-slate-300 text-sm mb-4">Artificial intelligence automation for business operations.</p>
                    <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-full">AI / ML</span>
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;