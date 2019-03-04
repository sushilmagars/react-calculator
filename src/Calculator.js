import React, {Component} from 'react';
import Operations from './Operations';
import {arithmaticOperations as ArithmaticOperations} from './constants'

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
      {
        Object.keys(ArithmaticOperations).map((arithmaticOperation) => {
          const operationId = ArithmaticOperations[arithmaticOperation].operationId;
          const operationType = ArithmaticOperations[arithmaticOperation].type;

          return <Operations 
            key={operationId}
            userOperationSelection={operationType}
          />;
        })
      }
      </div>
    );
  }
}

export default Calculator;