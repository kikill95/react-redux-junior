import React, { Component } from 'react';

import Element1 from '../../containers/element1';
import Element2 from '../../containers/element2';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Element1/>
        <Element2/>
      </div>
    );
  }
}

export default App;
