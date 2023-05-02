import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { ROUTES } from './routes.js';

export const router = createBrowserRouter([
  {
    path: ROUTES.base,
    element: <div />,
  },
  {
    path: `${ROUTES.details}/:factoryId/:month`,
    element: <div />,
  },
]);
