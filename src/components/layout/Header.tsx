import React, { useState, useEffect } from 'react';
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
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-200 ease-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                } bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA8C2C] shadow-2xl border-b-2 border-black`}
        >
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-3 lg:py-4 flex items-center justify-between">
                {/* Branding / Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-black flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <span className="text-[#D4AF37] font-black text-xl tracking-wider">S</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-black font-extrabold text-base sm:text-lg lg:text-xl tracking-tight">
                            SG
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center gap-1.5 bg-black/20 px-4 py-1.5 rounded-full border border-black/30 shadow-inner">
                    {navigationConfig.mainNav.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={`px-4 py-2 rounded-full text-sm lg:text-base font-semibold transition-all ${isActive
                                        ? 'bg-black text-[#D4AF37] shadow-md'
                                        : 'text-black hover:text-white hover:bg-black/30'
                                    }`}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Action CTA (Desktop) */}
                <div className="hidden sm:flex items-center gap-3">
                    <Link
                        to="/products"
                        className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
                    >
                        <span className="absolute inset-0 bg-black rounded-xl transition-all duration-300"></span>
                        <span className="relative px-5 py-2.5 rounded-[11px] bg-black text-[#D4AF37] font-bold text-sm lg:text-base flex items-center gap-2 transition-all group-hover:bg-black/90 group-hover:text-white shadow-md">
                            Explore Products
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="xl:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-lg bg-black text-[#D4AF37] focus:outline-none shadow-md"
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

            {/* Mobile Collapsible Navigation Menu */}
            {mobileMenuOpen && (
                <div className="xl:hidden bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA8C2C] border-t-2 border-black px-4 py-4 flex flex-col gap-2 shadow-xl transition-all">
                    <div className="text-[11px] font-bold text-black uppercase tracking-wider px-2 pb-1">Navigation</div>
                    {navigationConfig.mainNav.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                to={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-sm font-semibold py-2.5 px-3 rounded-lg transition-all block ${isActive
                                        ? 'bg-black text-[#D4AF37]'
                                        : 'text-black hover:bg-black/20'
                                    }`}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                    <div className="pt-2 border-t border-black/20 mt-2">
                        <Link
                            to="/products"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full text-center py-2.5 px-4 rounded-lg bg-black text-[#D4AF37] font-bold text-sm block shadow-md"
                        >
                            Explore Products
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;