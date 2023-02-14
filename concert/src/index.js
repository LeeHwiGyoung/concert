//import { Calendar } from '@fullcalendar/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <Provider store = {store}>
    <CookiesProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
    </CookiesProvider>
  </Provider>
  //</React.StrictMode>
);
