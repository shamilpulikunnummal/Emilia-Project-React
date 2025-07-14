import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';



createRoot(document.getElementById('root')).render(
  
//  <Auth0Provider
//     domain="dev-8wfj1cw58dge1ieb.us.auth0.com"
//     clientId="kkSfY1VOkiQUtprxJHv5DGcjeVrd3GuS"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>,

<BrowserRouter>
    <App />
  </BrowserRouter>
)
