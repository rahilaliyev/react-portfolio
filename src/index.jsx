import React from 'react';
import ReactDOM from 'react-dom/client';

import { store } from './redux/store.js';
import App from './app.jsx';

import './index.css';

import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

function initialize() {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <App />
      </SnackbarProvider>
    </Provider>,
  );
}
initialize();
