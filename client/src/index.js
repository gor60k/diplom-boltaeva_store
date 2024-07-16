import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/index.scss';
// import { BrowserRouter } from 'react-router-dom';
// import AppRouter from './components/AppRouter';
import UserStore from './store/UserStore';
import ProductStore from './store/ProductStore';

// console.log(process.env.REACT_APP_API_URL);

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    product: new ProductStore()
  }}>
    <App />
  </Context.Provider>
);
