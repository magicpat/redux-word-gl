/* @flow */

import test from 'tape';
import { times } from '../../src/utils';

test('utils/index', (t) => {
  t.test('times', (q) => {
    const result = times(5, (i) => `${i}t`);
    q.deepEqual(result, ['1t', '2t', '3t', '4t', '5t']);
    q.end();
  });

  t.end();
});
