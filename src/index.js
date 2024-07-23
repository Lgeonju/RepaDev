import React from 'react';
import ReactDOM from 'react-dom/client';
import NavArea from './fragment/NavArea';
import Main from './fragment/Main';

const root = ReactDOM.createRoot(document.getElementById('wrap'));
root.render(
  <React.StrictMode>
    <NavArea />
  </React.StrictMode>
);