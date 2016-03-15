/* @flow */

import { fork } from 'redux-saga/effects';
import rowSpawnSaga from './rowSpawn';
import gameloopSaga from './gameloop';
import inputSaga from './input';

import { generateRow, delay } from '../logic';

import type { GetState } from '../types';

// Snake game
// http://codepen.io/CrocoDillon/pen/pgaRwb

export default function* root(getState: GetState): any {
  yield fork(gameloopSaga, getState, delay);
  yield fork(rowSpawnSaga, getState, generateRow);
  yield fork(inputSaga, getState);
}
