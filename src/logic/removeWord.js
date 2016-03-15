import stringToRows from './stringToRows';
import rowsToString from './rowsToString';
import { every, reduce } from 'lodash';

function removeWordLetters(str: string, word: string): string {
  const reversed = str.split('').reverse().join('');

  const ret = reduce(word, (replaced, letter) => replaced.replace(letter, '-'), reversed);

  return ret.split('').reverse().join('');
}

function stripEmptyBottomRow(str: string, rowLength: number): string {
  const lastRow = str.substr(str.length - rowLength);
  if (every(lastRow, (c) => c === '-')) {
    return str.slice(0, str.length - rowLength);
  }

  return str;
}

export default function removeWord(rows: Array<Array<Element>>, rowLength: number, word: string): Array<Array<Element>> {
  let str = rowsToString(rows);
  str = removeWordLetters(str, word);
  str = stripEmptyBottomRow(str, rowLength);
  console.log(str);

  return stringToRows(str, rowLength);
}
