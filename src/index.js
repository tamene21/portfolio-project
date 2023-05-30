import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderComponet from './Header';
import MainComponent from './MainComponent';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderComponet />
    <MainComponent />
  </React.StrictMode>
);

