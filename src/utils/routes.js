import { lazy } from 'react';

export const routes = {
  home: {
    path: '/',
    routePath: () => '/',
    component: lazy(() => import('../pages/Home/Home')),
    exact: true,
  },
  dogDetails: {
    path: '/dog-details',
    routePath: () => '/dog-details',
    component: lazy(() => import('../pages/DogDetails/DogDetails')),
    exact: true,
  },
  settings: {
    path: '/settings',
    routePath: () => '/settings',
    component: lazy(() => import('../pages/Settings/Settings')),
    exact: true,
  },
};

export const renderRoutes = Object.entries(routes);
