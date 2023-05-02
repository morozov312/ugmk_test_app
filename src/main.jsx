import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './nav/AppRouter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
