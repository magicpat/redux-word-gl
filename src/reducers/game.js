/* @flow */

import { Map, fromJS, List } from 'immutable';

import {
  START_GAME,
  END_GAME,
  ADD_ROW,
  ADD_INPUT,
  POP_INPUT,
  ENTER_INPUT,
} from '../constants';

import type { Action, GameState } from '../types';

export const GAME_STATE: GameState = {
  board: {
    // [0] = [ [ el1, el2, el3 ] ]
    rows: [],
    width: 10,
    height: 10,
  },
  input: {
    values: [],
    max: 5,
  },
  score: 0,
  paused: false,
  started: false,
  finished: false,
  speed: 5000,
  dict: [],
};

export default function game(state: Map = fromJS(GAME_STATE), action: Action): Map {
  switch (action.type) {
    case START_GAME: {
      const board = fromJS(action.board);
      const input = fromJS({
        values: [],
        max: 5,
      });
      return state
        .set('board', board)
        .set('score', 0)
        .set('input', input)
        .set('started', true)
        .set('paused', false)
        .set('finished', false);
    }
    case 'SET_ROWS': {
      const rows = fromJS(action.rows);
      return state.setIn(['board', 'rows'], rows);
    }
    case END_GAME: {
      return state
        .set('paused', false)
        .set('finished', true);
    }
    case ADD_ROW: {
      const row = fromJS(action.row);
      const rows = state.getIn(['board', 'rows']).push(row);

      return state.setIn(['board', 'rows'], rows);
    }
    case ADD_INPUT: {
      const { value } = action;

      const values = state.getIn(['input', 'values']).push(value);
      return state.setIn(['input', 'values'], values);
    }
    case POP_INPUT: {
      const values = state.getIn(['input', 'values']).pop();
      return state.setIn(['input', 'values'], values);
    }
    case 'CLEAR_INPUT': {
      return state.setIn(['input', 'values'], List());
    }
    case ENTER_INPUT: {
      const word = state.getIn(['input', 'values']).join('');
      return state;
    }
    default: {
      return state;
    }
  }
}
