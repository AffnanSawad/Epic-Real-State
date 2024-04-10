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
import AuthProvider from './Providers/AuthProvider';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import UserProfile from './components/UserProfile/UserProfile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CardDetails from './CardDetails/CardDetails';
import {HelmetProvider} from 'react-helmet-async'




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
    element: <PrivateRoute>
      <Stat> </Stat>
    </PrivateRoute>
   },
   {
    path: '/login',
    element: <Login></Login>
   },
   {
    path: '/signup',
    element: <Register></Register>
   },
   {
    path: '/update',
    element: <PrivateRoute>
      <UpdateProfile></UpdateProfile>
    </PrivateRoute>
   },
   {
    path: '/user',
    element: <PrivateRoute>
      <UserProfile> </UserProfile>
    </PrivateRoute>
   },
   {
    path: '/card/:id',
    element: <PrivateRoute>
       <CardDetails></CardDetails>
    </PrivateRoute>,
    loader: ()=> fetch('../public/data.json')
   }

 
  
  



    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      
      <RouterProvider router={router} />

      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
