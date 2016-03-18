/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.js';

import Game from '../components/Game';
import GameOver from '../components/GameOver';
import Menu from '../components/Menu';

function suppressBackspace(evt) {
  const e = evt || window.event;
  const target = e.target || e.srcElement;

  if (e.keyCode === 8 && !/input|textarea/i.test(target.nodeName)) {
    return false;
  }
  return true;
}

class App extends React.Component {
  componentDidMount() {
    const { receiveKeycode } = this.props.actions;

    const handleKeyPress = (e) => {
      if (e.keyCode) {
        receiveKeycode(e.keyCode);
      }

      return suppressBackspace(e);
    };

    // $FlowFixMe: suppress this, until I find a way to declare onkeydown on Document
    document.onkeydown = handleKeyPress;
  }

  render() {
    const {
      score,
      finished,
      started,
      actions,
    } = this.props;

    const { startGame } = actions;

    if (started && !finished) {
      return (
        <Game {...this.props} />
      );
    }

    // Show Game-Over screen
    if (started && finished) {
      return (<GameOver score={score} restart={startGame} />);
    }

    return (<Menu startGame={startGame} />);
  }
}

const PT = React.PropTypes;

App.propTypes = {
  board: PT.object,
  input: PT.object,
  finished: PT.bool,
  started: PT.bool,
  paused: PT.bool,
  score: PT.number,
  actions: PT.object,
};

function mapStateToProps(state) {
  const game = state.get('game').toJS();
  return { ...game };
}

function mapDispatchToProps(dispatch) {
  const startGameWithRandomBoard = () => {
    dispatch(actionCreators.startGame({
      rows: [],
      width: 5,
      height: 5,
    }));
  };

  return {
    dispatch,
    actions: {
      ...bindActionCreators(actionCreators, dispatch),
      startGame: startGameWithRandomBoard,
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
