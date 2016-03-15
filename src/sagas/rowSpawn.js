/* @flow */

/* eslint-disable no-constant-condition */

import { call, take, put } from 'redux-saga/effects';

import { endGame, addRow } from '../actions';
import { TICK } from '../constants';

import type { GetState, GenerateRow } from '../types';

export default function* rowSpawn(getState: GetState, generateRow: GenerateRow) : Generator {
  while (true) {
    yield take(TICK);

    const rows = getState().getIn(['game', 'board', 'rows']);
    const boardHeight = getState().getIn(['game', 'board', 'height']);
    const boardWidth = getState().getIn(['game', 'board', 'width']);

    if (rows.count() === boardHeight) {
      yield put(endGame());
    }

    const row = yield call(generateRow, boardWidth);

    if (row == null) {
      continue;
    }

    yield put(addRow(row));
  }
}
