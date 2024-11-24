import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Import your main App component
import './index.css'; // Ensure the default styles are applied

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* Wrap App in BrowserRouter */}
    <App />
  </BrowserRouter>
);
