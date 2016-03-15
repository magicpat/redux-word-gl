import React from 'react';

export default class Cube extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <span>{ value }</span>
    );
  }
}

Cube.propTypes = {
  value: React.PropTypes.string,
};
