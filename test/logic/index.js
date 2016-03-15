/* @flow */

import test from 'tape';
import { generateRow } from '../../src/logic';

test('logic/index', (t) => {
  t.test('generateRow', (q) => {
    const row = generateRow(5);

    q.equal(row.length, 5);

    row.forEach((element) => {
      const { value } = element;
      q.equal(typeof value, 'string');
      q.equal(value.length, 1);
    });

    q.end();
  });

  t.end();
});
