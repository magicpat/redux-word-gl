/* @flow */

/* eslint-disable no-constant-condition */

import { take, call, put } from 'redux-saga/effects';
import { START_GAME } from '../constants/index';
import { tick } from '../actions';

import type { Map } from 'immutable';

export default function* gameloop(getState: () => Map, delay: Function) : Generator {
  while (yield take(START_GAME)) {
    // Do an inital tick to get the first raw to spawn
    yield put(tick());

    while (true) {
      const speed = getState().getIn(['game', 'speed']);

      yield call(delay, speed);

      const started = getState().getIn(['game', 'started']);
      const finished = getState().getIn(['game', 'finished']);
      const paused = getState().getIn(['game', 'paused']);

      if (paused) {
        continue;
      }

      // Stop this loop and wait for the next START_GAME
      if (started && finished) {
        break;
      }

      // Trigger gameloop logic
      yield put(tick());
    }
  }
}
