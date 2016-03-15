/* @flow */

import React from 'react';
import Cube from './Cube';
import { generateEmptyRow } from '../logic';
import { times } from '../utils';

import type { Element } from '../types';

export default class Board extends React.Component {
  render() {
    const { rows, height, width } = this.props;

    const filledUpRows = times(height - rows.length, () => generateEmptyRow(width));
    const allRows = rows.concat(filledUpRows);

    return (
      <div>
        { allRows.map((row, rowNum) => this._renderRow(row, rowNum)) }
      </div>
    );
  }

  _renderRow(row: Array<Element>, rowNum: number): Object {
    return (
      <div key={rowNum}>
        {
          row.map((element: Element, i: number) => <Cube key={i} value={element.value || '\u00a0'} />)
        }
      </div>
    );
  }
}

Board.propTypes = {
  rows: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.shape({
        value: React.PropTypes.string,
      })
    )
  ),
  width: React.PropTypes.number,
  height: React.PropTypes.number,
};
