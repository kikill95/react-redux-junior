import React, { Component } from 'react';

export default class Element1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 onClick={() => this.props.onClick(1)}>Element1</h2>
        Variable A: {this.props.variableA}
      </div>
    );
  }
}
