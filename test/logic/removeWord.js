/* @flow */

import test from 'tape';

import removeWord from '../../src/logic/removeWord';

test('logic/removeWord', (t) => {
  t.test('should replace row values with null', (q) => {
    const rows = [
      [{ value: 'a' }, { value: 'b' }, { value: 'c' }],
      [{ value: 'd' }, { value: 'g' }, { value: 'f' }],
      [{ value: 'a' }, { value: 'h' }, { value: 'i' }],
    ];

    const word = 'ah';

    const ret = removeWord(rows, 3, word);

    q.deepEqual(ret, [
      [{ value: 'a' }, { value: 'b' }, { value: 'c' }],
      [{ value: 'd' }, { value: 'g' }, { value: 'f' }],
      [{ value: null }, { value: null }, { value: 'i' }],
    ]);

    q.end();
  });

  t.test('should additionally strip last row, if it is empty', (q) => {
    const rows = [
      [{ value: 'd' }, { value: 'g' }, { value: 'f' }],
      [{ value: 'x' }, { value: 'x' }, { value: 'x' }],
    ];

    const word = 'xxx';

    const ret = removeWord(rows, 3, word);
    console.log(ret);

    q.deepEqual(ret, [
      [{ value: 'd' }, { value: 'g' }, { value: 'f' }],
    ]);
  });

  t.end();
});
