import React, { Component } from 'react';
import './App.css';
import CalculatorOperations from './CalculatorOperations';
import Playground from './Playground';
import {arithmaticOperations as OPERATIONS} from './constants';

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
    const header = 'Calculator';

    return (
      <div className="App">
        {header}
        <CalculatorOperations updateUserSelection={this.updateUserSelection}/>
        <Playground selectedOperation={this.state.userSelectedOperation}/>
      </div>
    );
  }
}

export default App;
