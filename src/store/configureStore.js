/* @flow */

/* eslint-disable no-console */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

import type { Map } from 'immutable';

const logMiddleware = () => (next) => (action) => {
  console.log('-----------------------');
  console.log(`Action: ${action.type}`);
  console.log(action);
  console.log('-----------------------');

  return next(action);
};

const sagaMiddleware = createSagaMiddleware(rootSaga);

const enhancer = compose(
  applyMiddleware(sagaMiddleware, logMiddleware)
);

export default function configureStore(initialState: Map): any {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.onReload) {
    module.onReload(() => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer.default || nextReducer);

      return true;
    });
  }

  return store;
}
