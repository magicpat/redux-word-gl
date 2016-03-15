/* @flow */

import { chain } from 'lodash';
import type { Element } from '../types';

export default function rowsToString(rows: Array<Array<Element>>): string {
  return chain(rows)
    .flatMap()
    .reduce((ret, element) => {
      const val = element.value;
      return ret + (val == null ? '-' : val);
    }, '')
    .value();
}
