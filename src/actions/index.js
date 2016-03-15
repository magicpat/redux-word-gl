/* @flow */

import {
  ADD_ROW,
  SET_WORDS,
  SET_BOARD,
  START_GAME,
  END_GAME,
  TICK,
  ADD_INPUT,
  POP_INPUT,
  ENTER_INPUT,
  RECEIVE_KEYCODE,
} from '../constants';

import type { Action, Element } from '../types';

export function startGame(board: {
  rows: Array<Element>,
  width: number,
  height: number
}): Action {
  return {
    type: START_GAME,
    board,
  };
}

export function endGame(): Action {
  return {
    type: END_GAME,
  };
}

export function tick(): Action {
  return {
    type: TICK,
  };
}

export function setBoard(board: Array<string>): Action {
  return {
    type: SET_BOARD,
    board,
  };
}

export function setWords(words: Array<string>): Action {
  return {
    type: SET_WORDS,
    words,
  };
}

export function addRow(row: Array<Element>): Action {
  return {
    type: ADD_ROW,
    row,
  };
}

export function addInput(value: string): Action {
  return {
    type: ADD_INPUT,
    value,
  };
}

export function popInput(): Action {
  return {
    type: POP_INPUT,
  };
}

export function enterInput(): Action {
  return {
    type: ENTER_INPUT,
  };
}

export function receiveKeycode(keyCode: number): Action {
  return {
    type: RECEIVE_KEYCODE,
    keyCode,
  };
}
