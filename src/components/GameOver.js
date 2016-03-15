import React from 'react';

export default class GameOver extends React.Component {
  render() {
    const { score, restart } = this.props;

    return (
      <div>
        <h1>Game Over!</h1>
        <div>Score: {score}</div>
        <button onClick={restart}>Restart</button>
      </div>
    );
  }
}

GameOver.propTypes = {
  score: React.PropTypes.number,
  restart: React.PropTypes.func,
};
