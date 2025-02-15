import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home';
import Root from './Root';
import Details from './pages/Details/Details';
import Error from './components/Error';
import ListedBooks from './pages/ListedBooks/ListedBooks';
import PagesToRead from './pages/PagesToRead/PagesToRead';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/details/:bookId',
        element: <Details></Details>,
      },
      {
        path: '/ListedBooks',
        element: <ListedBooks></ListedBooks>,
      },

      {
        path: '/PagesToRead',
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>,
      },
      {
        path: '/aboutUs',
        element:<AboutUs></AboutUs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
