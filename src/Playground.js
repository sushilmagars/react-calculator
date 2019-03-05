import React, { Component } from 'react';
import VerticalPlaygound from './VerticalPlayground';
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

    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleNumberBlur = this.handleNumberBlur.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
    this.addition = this.addition.bind(this);
    this.substract = this.substract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }

  handleNumberChange(event) {
    let newNumber = event.target.value;
    let isFirstNumber = event.target.getAttribute('isfirstnumber') === 'true';
    let pattern = /[^0-9]/g;
    newNumber = Number.isNaN(Number(newNumber)) ? Number(newNumber.replace(pattern, '')) : Number(newNumber);
    
    if (isFirstNumber) {
      this.setState({firstNumber: newNumber});
    } else {
      this.setState({secondNumber: newNumber});
    }
  }

  handleNumberBlur(event) {
    let newNumber = Number(event.target.value);
    let isFirstNumber = event.target.getAttribute('isfirstnumber') === 'true';

    if (isFirstNumber) {
      this.setState({firstNumber: newNumber});
    } else {
      this.setState({secondNumber: newNumber});
    }
  }

  addition(firstNumber, secondNumber) {
    if (firstNumber !== undefined && secondNumber !== undefined) {
      return firstNumber + secondNumber;
    } else if (firstNumber !== undefined) {
      return firstNumber + 0;
    } else if (secondNumber !== undefined) {
      return 0 + secondNumber;
    }
  }

  substract(firstNumber, secondNumber) {
    if (firstNumber !== undefined && secondNumber !== undefined) {
      return firstNumber - secondNumber;
    } else if (firstNumber !== undefined) {
      return firstNumber - 0;
    } else if (secondNumber !== undefined) {
      return 0 - secondNumber;
    }
  }

  multiply(firstNumber, secondNumber) {
    if (firstNumber !== undefined && secondNumber !== undefined) {
      return firstNumber * secondNumber;
    } else {
      return firstNumber * 0;
    }
  }

  divide(firstNumber, secondNumber) {
    if (firstNumber !== undefined && secondNumber !== undefined) {
      return firstNumber / secondNumber;
    } else if (firstNumber !== undefined) {
      return firstNumber / 0;
    } else if (secondNumber !== undefined) {
      return 0 / secondNumber;
    }
  }

  calculateResult(firstNumber, secondNumber, operationType) {
    switch (operationType) {
      case 'addition':
        return this.addition(firstNumber, secondNumber);
      case 'substraction':
        return this.substract(firstNumber, secondNumber);
      case 'multiplication':
        return this.multiply(firstNumber, secondNumber)
      case 'division':
        return this.divide(firstNumber, secondNumber);
      default:
        return this.addition(firstNumber, secondNumber);
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
            isfirstnumber="true"
            value={this.state.firstNumber}
            onChange={this.handleNumberChange}
            onBlur={this.handleNumberBlur}/>
           <input 
            type="text"
            isfirstnumber="false"
            value={this.state.secondNumber}
            onChange={this.handleNumberChange}
            onBlur={this.handleNumberBlur}/>
        </div>
        <div>
          <Result result={result}/>
        </div>
      </div>
    );
  }
}

export default Playground;