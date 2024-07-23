import React from 'react';
import ReactDOM from 'react-dom/client';
import ScrollWrap from './scrollWrap.js';

const root = ReactDOM.createRoot(document.getElementById('wrap'));
root.render(
  <React.StrictMode>
    <ScrollWrap />
  </React.StrictMode>
);