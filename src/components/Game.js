/* @flow */

import React from 'react';

import Board from './Board';
import Input from './Input';

export default class Game extends React.Component {
  render() {
    const {
      board,
      input,
      score,
      paused,
    } = this.props;

    return (
      <div>
        { paused ? <div>PAUSED</div> : null }
        <div>Score: {score}</div>
        <Board {...board} />
        <Input {...input} />
      </div>
    );
  }
}

Game.propTypes = {
  board: React.PropTypes.object,
  input: React.PropTypes.object,
  paused: React.PropTypes.bool,
  score: React.PropTypes.number,
};
