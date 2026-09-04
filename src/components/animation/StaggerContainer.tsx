import React from 'react';

export function StaggerContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <div className={`flex flex-col gap-4 ${className}`}>{children}</div>;
}

export default StaggerContainer;
