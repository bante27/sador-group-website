import React from 'react';

export function NotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">Page not found.</p>
                <a href="/" className="text-blue-600 hover:underline font-medium">Return Home</a>
            </div>
        </div>
    );
}

export default NotFoundPage;
