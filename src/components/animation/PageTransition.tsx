import React from 'react';

export function PageTransition({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <div className={`animate-fade-in ${className}`}>{children}</div>;
}

export default PageTransition;
