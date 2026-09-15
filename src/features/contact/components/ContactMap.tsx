import React from 'react';
import { MapPin } from 'lucide-react';

export const ContactMap: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[350px] rounded-xl border border-white/10 bg-zinc-900/30 p-8 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
      
      <div className="flex justify-between items-center text-xs font-mono text-zinc-400 z-10 border-b border-white/10 pb-4">
        <span>FACILITY MAPPING</span>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>

      <div className="text-center py-10 z-10">
        <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 text-white">
          <MapPin className="w-5 h-5" />
        </div>
        <h4 className="text-base font-medium text-white mb-1">Corporate Headquarters</h4>
        <p className="text-xs text-zinc-400 font-light">Map telemetry data pending physical deployment</p>
      </div>

      <div className="flex justify-between items-center text-xs font-mono text-zinc-400 z-10 border-t border-white/10 pt-4">
        <span>STATUS: SECURED</span>
        <span>NODE: ACTIVE</span>
      </div>
    </div>
  );
};