import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator'

class App extends Component {
  render() {
    const header = 'Calculator';

    return (
      <div className="App">
        {header}
        <Calculator />
      </div>
    );
  }
}

export default App;
