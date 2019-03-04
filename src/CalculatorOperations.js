import React, {Component} from 'react';
import Operations from './Operations';
import {arithmaticOperations as ArithmaticOperations} from './constants'

class CalculatorOperations extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="calculator-operations">
      {
        Object.keys(ArithmaticOperations).map((arithmaticOperation) => {
          const DEFAULT_OPERATION_ID = 5;
          const operationId = ArithmaticOperations[arithmaticOperation].operationId;

          if (operationId !== DEFAULT_OPERATION_ID) {
            const operationType = ArithmaticOperations[arithmaticOperation].type;

            return <Operations 
              key={operationId}
              operationSelection={operationType}
              updateUserChoice={this.props.updateUserSelection}
            />;
          }
        })
      }
      </div>
    );
  }
}

export default CalculatorOperations;