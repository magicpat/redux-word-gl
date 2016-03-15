/* @flow */

import test from 'tape';
import game from '../../src/reducers/game';
import { fromJS, Map } from 'immutable';

test('reducer/game', (t) => {
  t.test('START_GAME should set board and game state', (q) => {
    const state = Map({});
    const action = {
      type: 'START_GAME',
      board: {
        rows: [
          [{ value: 'a' }, { value: 'b' }, { value: 'c' }],
        ],
        width: 5,
        height: 5,
      },
    };

    const result = game(state, action);

    q.deepEqual(result.toJS(), {
      board: {
        rows: [
          [{ value: 'a' }, { value: 'b' }, { value: 'c' }],
        ],
        width: 5,
        height: 5,
      },
      score: 0,
      started: true,
      paused: false,
      finished: false,
    });

    q.end();
  });

  t.test('STOP_GAME should set stop game logic', (q) => {
    const state = Map({});

    const action = {
      type: 'END_GAME',
    };

    const result = game(state, action);

    q.notOk(result.get('paused'));
    q.ok(result.get('finished'));

    q.end();
  });

  t.test('ADD_ROW should append a new row', (q) => {
    const state = fromJS({
      board: {
        rows: [
          [{ value: 'a' }, { value: 'b' }, { value: 'c' }],
        ],
      },
    });

    const action = {
      type: 'ADD_ROW',
      row: [{ value: 'd' }, { value: 'e' }, { value: 'f' }],
    };

    const result = game(state, action).getIn(['board', 'rows']).toJS();


    const exp = [
      [{ value: 'a' }, { value: 'b' }, { value: 'c' }],
      [{ value: 'd' }, { value: 'e' }, { value: 'f' }],
    ];

    q.deepEqual(result[0], exp[0]);
    q.deepEqual(result[1], exp[1]);

    q.end();
  });

  t.end();
});
