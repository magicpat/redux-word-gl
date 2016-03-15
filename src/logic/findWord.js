/* @flow */

import { includes, every } from 'lodash';
import rowsToString from './rowsToString';

import type { Element } from '../types';

export default function findWord(rows: Array<Array<Element>>, word: string): boolean {
  const str = rowsToString(rows);

  return every(word, (letter) => includes(str, letter));
}
