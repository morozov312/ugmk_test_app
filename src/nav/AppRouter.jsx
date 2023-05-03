import { ROUTES } from './routes.js';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '/src/components/screens/home/Home.jsx';
import DetailDiagram from '/src/components/screens/details/DetailDiagram.jsx';
import NotFound from '/src/components/screens/notFound/NotFound.jsx';

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
