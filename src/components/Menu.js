import React from 'react';

export default class Menu extends React.Component {
  render() {
    const { startGame } = this.props;

    return (
      <div>
        <h1>WordGL</h1>
        <button onClick={startGame}>Start Game</button>
      </div>
    );
  }
}

const PT = React.PropTypes;
Menu.propTypes = {
  startGame: PT.func,
};
