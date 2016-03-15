/* @flow */

import 'babel-polyfill';
import configureStore from './store/configureStore';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';

const store = configureStore();

// store.dispatch({
  // type: 'START_GAME',
  // board: {
    // rows: [
      // [// Row 1
      // [],
    // ],
    // width: 10,
    // height: 10,
    // finished: false,
    // score: 0,
  // },
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
