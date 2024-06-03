import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Layout from './Components/Layout.jsx';
import About from './Components/About/About.jsx';
import Form from './Components/Registration/Form.jsx'
import Home from './Components/Home/Home.jsx';
import Departments from './Components/Departments/Departments.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/departments' element={<Departments />} />
      <Route path='/about' element={<About />} />
      <Route path='/register' element={<Form />} />
    </Route>
  ),
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <KindeProvider
      clientId="ede145f016ae49e2b7a1562dcd7d8493"
      domain="https://fcshdpaccount.kinde.com"
      redirectUri="http://localhost:5173/departments"
      logoutUri="http://localhost:5173"
    >
      
      <RouterProvider router={router} />

    </KindeProvider>

   
  </React.StrictMode>
);
