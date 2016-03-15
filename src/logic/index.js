/* @flow */

import { times } from '../utils';
import type { Element } from '../types';

const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function pickRandomChar(selection: string): string {
  const charValue = Math.floor(Math.random() * selection.length);
  return selection.charAt(charValue);
}

export function generateRow(width: number, createChar: ((s: string) => ?string) = pickRandomChar): Array<Element> {
  if (width <= 0) {
    return [];
  }

  return times(width, () => ({ value: createChar(possible) }));
}

export function generateEmptyRow(width: number): Array<Element> {
  return generateRow(width, () => null);
}

export function delay(timeout: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export { default as rowsToString } from './rowsToString';
export { default as stringToRows } from './stringToRows';
export { default as removeWord } from './removeWord';
export { default as findWord } from './findWord';
