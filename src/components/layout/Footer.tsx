import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-black text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/20">
            <span className="text-black font-black text-lg">S</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">SG</span>
        </div>

        {/* Copyright */}
        <div className="text-xs sm:text-sm text-slate-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Sador Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

