
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const TermsPage = lazy(() => import('../pages/legal/terms/page'));
const PrivacyPage = lazy(() => import('../pages/legal/privacy/page'));
const CookiesPage = lazy(() => import('../pages/legal/cookies/page'));
const GDPRPage = lazy(() => import('../pages/legal/gdpr/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/termeni-si-conditii',
    element: <TermsPage />,
  },
  {
    path: '/politica-confidentialitate',
    element: <PrivacyPage />,
  },
  {
    path: '/politica-cookies',
    element: <CookiesPage />,
  },
  {
    path: '/gdpr',
    element: <GDPRPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
