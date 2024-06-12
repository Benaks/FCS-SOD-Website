import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import './index.css'; 
import Layout from './Components/Layout.jsx';
import About from './Components/About/About.jsx';
import Form from './Components/Registration/Form.jsx';
import Home from './Components/Home/Home.jsx';
import Departments from './Components/Departments/Departments.jsx';

// Define your routing configuration
const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/departments' element={<Departments />} />
      <Route path='/about' element={<About />} />
      <Route path='/register' element={<Form />} />
    </Route>
  </Routes>
);

// Wrap your AppRoutes with KindeProvider
const AppWithAuth = () => (
  <KindeProvider
    clientId="64f09e67efd347bca5a554fd63b53446"
    domain="https://sodwebsite.kinde.com"
    redirectUri="http://localhost:5173/departments"
    logoutUri="http://localhost:5173"
  >
    <AppRoutes />
  </KindeProvider>
);

// Render the app
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <AppWithAuth />
    </Router>
  </React.StrictMode>
);
