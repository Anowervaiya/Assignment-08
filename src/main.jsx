import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home';
import Root from './Root';
import Details from './pages/Details/Details';
import Error from './components/Error';
import ListedBooks from './pages/ListedBooks/ListedBooks';
import PagesToRead from './pages/PagesToRead/PagesToRead';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/details/:bookId',
        element:<Details></Details>
      },
      {
        path: '/ListedBooks',
        element:<ListedBooks></ListedBooks>,
        
      },


      {
        path: '/PagesToRead',
        element:<PagesToRead></PagesToRead>
      }
    ]
     
    
  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




