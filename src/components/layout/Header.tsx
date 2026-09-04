import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationConfig } from '../../config/navigation.config';

export function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                } shadow-sm`}
        >
            <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-slate-800">
                <div className="max-w-[1600px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:inline text-slate-400">Enterprise Digital Ecosystem</span>
                        <span className="hidden sm:inline text-slate-600">|</span>
                        <a href="mailto:contact@sadorgroup.com" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            contact@sadorgroup.com
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-slate-400 mr-1 hidden md:inline">Follow Us:</span>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-amber-400 transition-colors p-1"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-amber-400 transition-colors p-1"
                            aria-label="Twitter"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-[#fafbfc] border-b border-slate-200/80 backdrop-blur-md">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-3.5 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-amber-500 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                            <span className="text-slate-950 font-black text-xl tracking-wider">S</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-slate-900 font-extrabold text-base sm:text-lg lg:text-xl tracking-tight">
                                SG
                            </span>
                        </div>
                    </Link>
                    <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-200 shadow-inner">
                        {navigationConfig.mainNav.map((item) => {
                            const isActive = location.pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${isActive
                                        ? 'bg-amber-500 text-slate-950 shadow-sm'
                                        : 'text-slate-600 hover:text-amber-600 hover:bg-white/60'
                                        }`}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="hidden sm:flex items-center gap-3">
                        <Link
                            to="/products"
                            className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
                        >
                            <span className="absolute inset-0 bg-amber-500 rounded-xl transition-all duration-300"></span>
                            <span className="relative px-4 py-2 rounded-[11px] bg-[#fafbfc] text-slate-900 font-bold text-sm flex items-center gap-2 transition-all group-hover:bg-amber-500 group-hover:text-slate-950 shadow-sm">
                                Explore Products
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                    <div className="xl:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg bg-slate-100 text-slate-900 focus:outline-none shadow-sm"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="xl:hidden bg-[#fafbfc] border-t border-slate-200 px-4 py-4 flex flex-col gap-2 shadow-lg transition-all">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 pb-1">Navigation</div>
                    {navigationConfig.mainNav.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                to={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-sm font-semibold py-2.5 px-3 rounded-lg transition-all block ${isActive
                                    ? 'bg-amber-500 text-slate-950'
                                    : 'text-slate-700 hover:bg-slate-100'
                                    }`}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                    <div className="pt-3 border-t border-slate-200 mt-2 flex flex-col gap-3">
                        <Link
                            to="/products"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full text-center py-2.5 px-4 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm block shadow-sm"
                        >
                            Explore Products
                        </Link>
                        <div className="flex items-center justify-center gap-4 pt-2 text-slate-600">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-100 hover:text-amber-600">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-100 hover:text-amber-600">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;