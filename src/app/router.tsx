import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorLayout from '../layouts/ErrorLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import CompaniesMainPage from '../pages/CompaniesPage';
import ProductsPage from '../pages/ProductsPage';
import ServicesPage from '../pages/ServicesPage';
import SolutionsPage from '../pages/SolutionsPage';
import ProjectsPage from '../pages/ProjectsPage';
import NewsMainPage from '../pages/NewsMainPage';
import ArticlePage from '../pages/ArticlePage';
import CareersPage from '../pages/CareersPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout />,
            errorElement: <ErrorLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: 'about',
                    element: <AboutPage />,
                },
                {
                    path: 'companies',
                    element: <CompaniesMainPage />,
                },
                {
                    path: 'products',
                    element: <ProductsPage />,
                },
                {
                    path: 'services',
                    element: <ServicesPage />,
                },
                {
                    path: 'solutions',
                    element: <SolutionsPage />,
                },
                {
                    path: 'projects',
                    element: <ProjectsPage />,
                },
                {
                    path: 'news',
                    element: <NewsMainPage />,
                },
                {
                    path: 'news/:id',
                    element: <ArticlePage />,
                },
                {
                    path: 'careers',
                    element: <CareersPage />,
                },
                {
                    path: 'contact',
                    element: <ContactPage />,
                },
            ],
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
        {
            path: 'error',
            element: <ErrorPage />,
        },
    ],
    {
        // future flags removed for react-router-dom version compatibility
    }
);