/* @flow */

import test from 'tape';
import findWord from '../../src/logic/findWord';

test('logic/findWord', (t) => {
  t.test('should return true if all letters are found in rows', (q) => {
    const rows = [
      [{ value: 't' }, { value: 'e' }, { value: 's' }],
      [{ value: 't' }, { value: 'x' }, { value: 'x' }],
      [{ value: 'a' }, { value: 'x' }, { value: 'x' }],
    ];

    const word = 'test';

    const ret = findWord(rows, word);

    q.ok(ret);

    q.end();
  });

  t.end();
});
