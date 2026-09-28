import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import RouteScrollToTop from '../components/layout/RouteScrollToTop';

export function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
            <RouteScrollToTop />
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;
