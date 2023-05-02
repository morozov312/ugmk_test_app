import { ROUTES } from './routes.js';
import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const NotFound = lazy(() =>
  import('../components/screens/notFound/NotFound.jsx'),
);
const Home = lazy(() => import('/src/components/screens/home/Home.jsx'));
const DetailDiagram = lazy(() =>
  import(
    '/src/components/screens/details/components/detailDiagram/DetailDiagram.jsx'
  ),
);

export const router = createBrowserRouter([
  {
    path: ROUTES.base,
    element: <Home />,
  },
  {
    path: `${ROUTES.details}/:factoryId/:month`,
    element: <DetailDiagram />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
