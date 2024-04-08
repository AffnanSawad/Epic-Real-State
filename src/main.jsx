import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Contact from './components/Contact/Contact';
import Stat from './components/Stat/Stat';
import Login from './components/login/Login';
import Register from './components/register/Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <Error> </Error>,

    children: [

   
   {
    path: '/',
    element: <Home></Home>
   },
   {
    path: '/contact',
    element: <Contact></Contact>
   },
   {
    path: '/stat',
    element: <Stat> </Stat>
   },
   {
    path: '/login',
    element: <Login></Login>
   },
   {
    path: '/signup',
    element: <Register></Register>
   },
  
  



    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
