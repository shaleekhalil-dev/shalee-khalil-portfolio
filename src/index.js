import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // المحرك الذي سيربط مؤلفاتك كأديب بمهاراتك كمطور

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);