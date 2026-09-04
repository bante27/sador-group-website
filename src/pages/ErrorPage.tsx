import React from 'react';

export function ErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-2">Something Went Wrong</h1>
                <p className="text-gray-600 mb-6">We are experiencing technical issues. Please check back later.</p>
                <a href="/" className="text-blue-600 hover:underline font-medium">Return Home</a>
            </div>
        </div>
    );
}

export default ErrorPage;
