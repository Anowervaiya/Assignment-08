import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavbarWithMegaMenu } from './components/Navbar';





const router = createBrowserRouter([
  {
    path: '/',
    element:<NavbarWithMegaMenu></NavbarWithMegaMenu>
  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




