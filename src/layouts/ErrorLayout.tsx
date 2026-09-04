import React from 'react';

export function ErrorLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-2">Application Error</h1>
                <p className="text-gray-600">An unexpected error occurred. Please try again later.</p>
            </div>
        </div>
    );
}

export default ErrorLayout;
