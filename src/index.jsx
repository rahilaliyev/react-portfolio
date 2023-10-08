import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app.jsx';

import './index.css';


function initialize() {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(<App />);
}
initialize();
