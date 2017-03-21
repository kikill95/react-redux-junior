import React, { Component } from 'react';

export default class Element2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 onClick={() => this.props.onClick(2)}>Element2</h2>
        Variable A: {this.props.variableA}
      </div>
    );
  }
}
