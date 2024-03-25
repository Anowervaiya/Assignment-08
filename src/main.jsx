import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AvatarDefault } from './components/AvatarDefault';




const router = createBrowserRouter([
  {
    path: '/',
    element:<AvatarDefault></AvatarDefault>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




