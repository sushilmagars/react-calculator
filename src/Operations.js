import React from 'react';
import {arithmaticOperations as operationsMappings} from './constants';
import _ from 'lodash';

export default function Operations(props) {
  const operation = _.upperFirst(operationsMappings[props.operationSelection].type);

  return (
    <button
      className="user-operation-selection"
      useroperationselection={props.operationSelection}
      onClick={props.updateUserChoice}>
      {operation}
    </button>
  );
}