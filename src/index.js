import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from './GlobalContext/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalContextProvider>
    <App />
    </GlobalContextProvider>
    </BrowserRouter>
);

reportWebVitals();
