import { Map } from 'immutable';

export type Element = {
  kind?: 'letter',
  value: string,
};

export type Board = {
  rows: Array<Element>,
  width: number,
  height: number,
};

export type GameState = {
  board: Board,
  score: number,
  running: boolean,
  finished: boolean,
  words: Array<string>,
};

export type Action = {
  type: string
}

export type GetState = () => Map;
export type GenerateRow = (width: number) => Array<Element>;
