import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { ProductsProvider } from './contexts/productsContext';
import { FilterProvider } from './contexts/filterContext';
import { CartProvider } from './contexts/cartContext';
import {Auth0Provider} from '@auth0/auth0-react'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_CLIENT_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
