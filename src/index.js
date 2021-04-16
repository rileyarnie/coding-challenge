import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { CartProvider } from "./Components/Cart/CartContext";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>
  ,
  document.getElementById('root')
);