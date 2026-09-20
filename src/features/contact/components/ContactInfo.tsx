import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CORPORATE_INFO } from './contact.data';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ContactInfo: React.FC = () => {
  const infoSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Timeline for Left Details Column
      gsap.fromTo(
        '.info-element',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoSectionRef.current,
            start: 'top 75%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // Dedicated Smooth Entry Animation for the Map coming from the Left
      gsap.fromTo(
        '.map-element',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoSectionRef.current,
            start: 'top 75%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, infoSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={infoSectionRef} className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details Column (5 Columns) */}
          <div className="lg:col-span-5">
            <span className="info-element text-xs font-mono tracking-widest text-zinc-500 uppercase mb-2 block">
            
            </span>
            <h2 className="info-element text-3xl sm:text-4xl font-light text-zinc-900 tracking-tight mb-8">
              Corporate Directives
            </h2>

            <div className="space-y-8">
              <div className="info-element flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-mono text-zinc-900 uppercase mb-1">{CORPORATE_INFO.officeLocation.name}</h3>
                  <p className="text-zinc-600 font-light text-sm">{CORPORATE_INFO.officeLocation.addressLine1}</p>
                  <p className="text-zinc-600 font-light text-sm">{CORPORATE_INFO.officeLocation.addressLine2}</p>
                  <span className="text-xs text-zinc-500 font-mono mt-1 block">{CORPORATE_INFO.officeLocation.note}</span>
                </div>
              </div>

              <div className="info-element flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-mono text-zinc-900 uppercase mb-1">Electronic Mail</h3>
                  <a href={`mailto:${CORPORATE_INFO.email}`} className="text-zinc-600 font-light text-sm hover:text-zinc-900 transition-colors">
                    {CORPORATE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="info-element flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-mono text-zinc-900 uppercase mb-1">Telephone Switchboard</h3>
                  <a href={`tel:${CORPORATE_INFO.phone}`} className="text-zinc-600 font-light text-sm hover:text-zinc-900 transition-colors">
                    {CORPORATE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="info-element flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 shrink-0 mt-1">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-mono text-zinc-900 uppercase mb-1">Operating Hours</h3>
                  <p className="text-zinc-600 font-light text-sm">{CORPORATE_INFO.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Wide Map Column Sliding In From Left (7 Columns) */}
          <div className="map-element lg:col-span-7 w-full h-[450px] sm:h-[500px] bg-white overflow-hidden flex flex-col">

            
            <div className="w-full flex-1 relative">
              <iframe
                title="INSA Company Map"
                src="https://maps.google.com/maps?q=Information+Network+Security+Agency+Addis+Ababa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-300"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-zinc-500 px-6 py-3 border-t border-zinc-200 bg-zinc-50">
              <span>LAT: 9.0300° N</span>
              <span>LONG: 38.7400° E</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;