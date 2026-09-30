import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

export function ErrorLayout() {
    const error = useRouteError();
    let errorMessage = 'An unexpected error occurred. Please try again later.';

    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText || error.data?.message || errorMessage;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#0F172A] p-6">
            <div className="max-w-md w-full text-center">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-semibold mb-3 block">
                    System Exception
                </span>
                <h1 className="text-3xl font-bold tracking-tight mb-4">Application Error</h1>
                <p className="text-slate-600 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm font-mono overflow-auto max-h-40 text-left">
                    {errorMessage}
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-[#0F172A] text-white font-medium text-sm rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}

export default ErrorLayout;
