import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

// ROOT ES LA RAIZ DE LA APLICACION QUE SE MONTA EN EL DIVROOT
const root = createRoot(container);

// REENDERIZA ALGO EN LA RAIZ DE LA APLICACION
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
