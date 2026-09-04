import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navigationConfig } from '../../config/navigation.config';

export function MobileMenu() {
    const location = useLocation();

    return (
        <div className="w-full bg-unicef-darkBlue text-slate-900 px-6 py-4 flex flex-col xl:hidden border-t border-unicef-blue/30 relative z-50">
            <nav className="flex flex-col gap-2 py-2">
                {navigationConfig.mainNav.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            className={`text-base font-medium transition-colors py-2.5 px-3 rounded-lg block ${isActive
                                ? 'bg-unicef-cyan text-unicef-darkBlue font-semibold'
                                : 'text-slate-200 hover:text-white hover:bg-unicef-blue/40'
                                }`}
                        >
                            <span>{item.title}</span>
                        </NavLink>
                    );
                })}
            </nav>
        </div>
    );
}

export default MobileMenu;