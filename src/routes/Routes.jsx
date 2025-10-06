import { createBrowserRouter } from 'react-router';

import MainLayout from '../layouts/MainLayout/MainLayout';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';

import HomePage from '../pages/Home/HomePage';
import ProductsPage from '../pages/Products/ProductsPage';
import ProductDetails from '../pages/Products/components/ProductDetails/ProductDetails';
import AboutPage from '../pages/About/AboutPage';
import ContactPage from '../pages/Contact/ContactPage';

import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';

import ErrorPage from '../pages/Error/ErrorPage';

export const router = createBrowserRouter([
  {
    // Public Routes with Main Layout
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: HomePage },
      { path: 'products', Component: ProductsPage },
      { path: 'products/:id', Component: ProductDetails },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
  {
    // Auth Routes with Auth Layout
    path: 'auth',
    Component: AuthLayout,
    errorElement: <ErrorPage />,
    children: [
      { path: 'login', Component: LoginPage },
      { path: 'register', Component: RegisterPage },
    ],
  },
]);
