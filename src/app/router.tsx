import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorLayout from '../layouts/ErrorLayout';
import Spinner from '../components/ui/Spinner';

// Route-based code splitting using React.lazy & Suspense for enterprise performance
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const CompaniesMainPage = lazy(() => import('../pages/CompaniesPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const SolutionsPage = lazy(() => import('../pages/SolutionsPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const NewsMainPage = lazy(() => import('../pages/NewsMainPage'));
const ArticlePage = lazy(() => import('../pages/ArticlePage'));
const CareersPage = lazy(() => import('../pages/CareersPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-white">
        <Spinner />
    </div>
);

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout />,
            errorElement: <ErrorLayout />,
            children: [
                {
                    index: true,
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <HomePage />
                        </Suspense>
                    ),
                },
                {
                    path: 'about',
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <AboutPage />
                        </Suspense>
                    ),
                },
                {
                    path: 'companies',
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <CompaniesMainPage />
                        </Suspense>
                    ),
                },
                {
                    path: 'products',
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <ProductsPage />
                        </Suspense>
                    ),
                },
                {
                    path: 'services',
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <ServicesPage />
                        </Suspense>
                    ),
                },
                {
                    path: 'solutions',
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <SolutionsPage />
                        </Suspense>
                    ),
                },
                {
                    path: 'projects',
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <ProjectsPage />
                        </Suspense>
                    ),
                },
                {
                    path: 'news',
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <NewsMainPage />
                        </Suspense>
                    ),
                },
                {
                    path: 'news/:id',
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <ArticlePage />
                        </Suspense>
                    ),
                },
                {
                    path: 'careers',
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <CareersPage />
                        </Suspense>
                    ),
                },
                {
                    path: 'contact',
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <ContactPage />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: '*',
            element: (
                <Suspense fallback={<PageLoader />}>
                    <NotFoundPage />
                </Suspense>
            ),
        },
        {
            path: 'error',
            element: (
                <Suspense fallback={<PageLoader />}>
                    <ErrorPage />
                </Suspense>
            ),
        },
    ],
    {
    }
);
