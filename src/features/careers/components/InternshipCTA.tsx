import React from 'react';
import { opportunityAreas, culturePrinciples } from '../data/careerContent';
import { ArrowRight } from 'lucide-react';

export function InternshipCTA() {
  return (
    <section className="py-28 bg-[#121214] text-[#FAF9F6] px-6 border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 mb-3 block">
            Internships & Early Career
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            Start Your Career by Building Real Things.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Emerging professionals gain practical exposure, mentorship, and opportunities to contribute to real-world solutions across our technology ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {opportunityAreas.slice(0, 3).map((area, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-[#18181B] border border-zinc-800">
              <h3 className="text-xl font-medium mb-3 text-white">{area.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-[#FAF9F6] border border-zinc-800 font-medium rounded-xl hover:bg-zinc-800 transition-colors"
          >
            <span>Express Your Interest</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default InternshipCTA;
