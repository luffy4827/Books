import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='dark:bg-slate-900 dark:text-white'>
    <App />
    </div>
  </React.StrictMode>
);

