import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Yeh import karein
import App from './App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Puri App ko yahan wrap karein */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);