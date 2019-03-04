import React from 'react';
import {arithmaticOperations as operationsMappings} from './constants';

export default function Operations(props) {
  const operatorSign = operationsMappings[props.userOperationSelection].operator;

  return (
    <button className="user-operation-selection">
      {operatorSign}
    </button>
  );
}