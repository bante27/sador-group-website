import React from 'react';
import { CORPORATE_INFO } from './contact.data';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <section className="py-24 border-b border-white/10 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Details Column */}
          <div>
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2 block">
              // DIRECT CHANNELS
            </span>
            <h2 className="text-3xl font-light text-white tracking-tight mb-8">Corporate Directives</h2>

            <div className="space-y-8">
              {/* Office Location */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-mono text-zinc-300 uppercase mb-1">{CORPORATE_INFO.officeLocation.name}</h3>
                  <p className="text-zinc-400 font-light text-sm">{CORPORATE_INFO.officeLocation.addressLine1}</p>
                  <p className="text-zinc-400 font-light text-sm">{CORPORATE_INFO.officeLocation.addressLine2}</p>
                  <span className="text-xs text-zinc-500 font-mono mt-1 block">{CORPORATE_INFO.officeLocation.note}</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-mono text-zinc-300 uppercase mb-1">Electronic Mail</h3>
                  <a href={`mailto:${CORPORATE_INFO.email}`} className="text-zinc-400 font-light text-sm hover:text-white transition-colors">
                    {CORPORATE_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-mono text-zinc-300 uppercase mb-1">Telephone Switchboard</h3>
                  <a href={`tel:${CORPORATE_INFO.phone}`} className="text-zinc-400 font-light text-sm hover:text-white transition-colors">
                    {CORPORATE_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 mt-1">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-mono text-zinc-300 uppercase mb-1">Operating Hours</h3>
                  <p className="text-zinc-400 font-light text-sm">{CORPORATE_INFO.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map/Placeholder Component */}
          <div className="w-full h-full min-h-[380px] rounded-xl border border-white/10 bg-zinc-900/30 p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
            
            <div className="flex justify-between items-center text-xs font-mono text-zinc-400 z-10 border-b border-white/10 pb-4">
              <span>LOCATION MATRIX // GLOBAL</span>
              <span className="w-2 h-2 rounded-full bg-white/50" />
            </div>

            <div className="text-center py-12 z-10">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-white">
                <MapPin className="w-6 h-6 animate-bounce" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Global Presence</h3>
              <p className="text-sm text-zinc-400 font-light max-w-xs mx-auto">
                Official geographical coordinates and interactive mapping modules activate upon final facility deployment confirmation.
              </p>
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-zinc-400 z-10 border-t border-white/10 pt-4">
              <span>LAT: [PENDING]</span>
              <span>LONG: [PENDING]</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};