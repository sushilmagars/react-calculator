import React, { Component } from 'react';
import {arithmaticOperations as ArithmaticOperations} from './constants'
import VerticalPlaygound from './VerticalPlayground';
import HorizontalPlayground from './HorizontalPlayground';
import Result from './Result';

class Playground extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      currentOperation: this.props.selectedOperation,
    }

    this.handleFirstNumberChange = this.handleFirstNumberChange.bind(this);
    this.handleSecondNumberChange = this.handleSecondNumberChange.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
    this.addition = this.addition.bind(this);
    this.handleFirstNumberBlur = this.handleFirstNumberBlur.bind(this);
    this.handleSecondNumberBlur = this.handleSecondNumberBlur.bind(this);
  }

  handleFirstNumberChange(event) {
    let newNumber;

    if (event.target.value) {
      newNumber = Number(event.target.value);
    }

    this.setState({firstNumber: newNumber});
  }

  handleFirstNumberBlur(event) {
    let newNumber = Number(event.target.value);
    this.setState({firstNumber: newNumber});
  }

  handleSecondNumberChange(event) {
    let newNumber = Number(event.target.value);
    this.setState({secondNumber: newNumber});
  }

  handleSecondNumberBlur(event) {
    let newNumber = Number(event.target.value);
    this.setState({secondNumber: newNumber});
  }

  addition(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }

  calculateResult(firstNumber, secondNumber, operationType) {
    switch (operationType) {
      case 'addition':
        return this.addition(firstNumber, secondNumber);
      case 'substraction':
        return firstNumber - secondNumber;
      case 'multiplication':
        return firstNumber * secondNumber;
      case 'division':
        return firstNumber / secondNumber;
    }
  }

  componentDidUpdate(prevProp) {
    if (this.props.selectedOperation.type !== prevProp.selectedOperation.type) {
      this.setState({currentOperation: this.props.selectedOperation});
    }
  }

  render() {
    let result = this.calculateResult(this.state.firstNumber, this.state.secondNumber, this.state.currentOperation.type);

    return (
      <div>        
        <div className="playground">
           <VerticalPlaygound currentlySelectedUserOperation={this.state.currentOperation.operator}/>
           <input 
            type="text"
            value={this.state.firstNumber}
            onChange={this.handleFirstNumberChange}
            onBlur={this.handleFirstNumberBlur}/>
           <input 
            type="text"
            value={this.state.secondNumber}
            onChange={this.handleSecondNumberChange}
            onBlur={this.handleSecondNumberBlur}/>
        </div>
        <div>
          <Result result={result}/>
        </div>
      </div>
    );
  }
}

export default Playground;