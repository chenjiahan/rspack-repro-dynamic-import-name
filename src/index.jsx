import React from 'react';
import ReactDOM from 'react-dom/client';

import('./App').then((Modules) => {
// import(/* webpackChunkName: "bar" */'./App').then((Modules) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Modules.default />
    </React.StrictMode>,
  );
});
