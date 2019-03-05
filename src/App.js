import React, { Component } from 'react';
import './App.css';
import CalculatorOperations from './CalculatorOperations';
import Playground from './Playground';
import {
  arithmaticOperations as OPERATIONS,
  content as CONTENT
} from './constants';

class App extends Component {
  constructor() {
    super();
    this.state = {userSelectedOperation: OPERATIONS.default}
    this.updateUserSelection = this.updateUserSelection.bind(this);
  }

  updateUserSelection(event) {
    let newlySelectedOperation = OPERATIONS[event.target.getAttribute('userOperationSelection')];
    this.setState({userSelectedOperation: newlySelectedOperation});
  }

  render() {
    const header = CONTENT.header.toUpperCase();

    return (
      <div className="app">
        <div className="app-header">
          {header}
        </div>
        <div className="app-content">
          <CalculatorOperations updateUserSelection={this.updateUserSelection}/>
          <Playground selectedOperation={this.state.userSelectedOperation}/>
        </div>
      </div>
    );
  }
}

export default App;
