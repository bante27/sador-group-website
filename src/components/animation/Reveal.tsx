import React from 'react';

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <div className={`transition-all duration-700 ${className}`}>{children}</div>;
}

export default Reveal;
