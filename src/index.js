import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './state/store';
import App from './App';

import 'react-app-polyfill/stable';

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
