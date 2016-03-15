import React from 'react';

export default class Input extends React.Component {
  render() {
    const { values } = this.props;

    const str = values.reduce((s, val) => (s + val), '');
    return (
      <div>
      { str }
      </div>
    );
  }
}

Input.propTypes = {
  values: React.PropTypes.arrayOf(React.PropTypes.string),
  max: React.PropTypes.number,
};
