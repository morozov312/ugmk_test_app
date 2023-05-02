import { createBrowserRouter } from 'react-router-dom';
import React, { lazy } from 'react';
import { ROUTES } from './routes.js';
const App = lazy(() => import('/src/components/screens/home/Home.jsx'));
const DetailDiagram = lazy(() =>
  import(
    '/src/components/screens/details/components/detailDiagram/DetailDiagram.jsx'
  ),
);

export const router = createBrowserRouter([
  {
    path: ROUTES.base,
    element: <App />,
  },
  {
    path: `${ROUTES.details}/:factoryId/:month`,
    element: <DetailDiagram />,
  },
]);
