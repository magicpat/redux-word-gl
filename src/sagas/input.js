/* @flow */

/* eslint-disable no-constant-condition */

import { put, take } from 'redux-saga/effects';
import { addInput, popInput, enterInput } from '../actions';
import { RECEIVE_KEYCODE } from '../constants';
import { findWord, removeWord } from '../logic';
import { includes } from 'lodash';

import type { GetState } from '../types';

export default function* inputSaga(getState: GetState) : Generator {
  while (true) {
    const action = yield take(RECEIVE_KEYCODE);

    if (action == null) {
      continue;
    }

    const { keyCode } = action;
    const state = getState();

    // Prevent invalid input
    if (keyCode == null && typeof keyCode !== 'number') {
      continue;
    }

    // backspace || delete
    if (keyCode === 8 || keyCode === 46) {
      yield put(popInput());
    }

    // Enter
    if (keyCode === 13) {
      const word = state.getIn(['game', 'input', 'values']).join('');
      const rows = state.getIn(['game', 'board', 'rows']).toJS();
      const dict = state.getIn(['game', 'dict']);

      if (/*includes(dict, word) &&*/ findWord(rows, word)) {
        const rowLength = state.getIn(['game', 'board', 'width']);
        const newRows = removeWord(rows, rowLength, word);
        yield put({ type: 'SET_ROWS', rows: newRows });
      }

      // yield put(enterInput());
      yield put({ type: 'CLEAR_INPUT' });
    }

    // a-zA-Z
    if (keyCode >= 65 && keyCode <= 90) {
      const charStr = String.fromCharCode(keyCode);
      const value = charStr.toUpperCase();

      const values = state.getIn(['game', 'input', 'values']);
      const maxInput = state.getIn(['game', 'input', 'max']);

      if (values.count() < maxInput) {
        yield put(addInput(value));
      }
    }
  }
}
