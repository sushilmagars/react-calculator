import React from 'react';
import {arithmaticOperations as operationsMappings} from './constants';

export default function Operations(props) {
  const operatorSign = operationsMappings[props.operationSelection].operator;

  return (
    <button 
      className="user-operation-selection"
      useroperationselection={props.operationSelection}
      onClick={props.updateUserChoice}>
      {operatorSign}
    </button>
  );
}