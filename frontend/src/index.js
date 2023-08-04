import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from "./context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    <ToastContainer />
    </ContextProvider>
  </React.StrictMode>
);


