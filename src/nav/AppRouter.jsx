import { ROUTES } from './routes.js';
import DetailDiagram from '/src/components/screens/details/DetailDiagram.jsx';
import Home from '/src/components/screens/home/Home.jsx';
import NotFound from '/src/components/screens/notFound/NotFound.jsx';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

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
