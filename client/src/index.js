import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import RouterPage from './RouterPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <RouterPage/>    
  </BrowserRouter>
);





