import React from 'react';

export default function VerticalPlaygound(props) {
  return <div className="vertical-playground">
    <button className="user-operation-selection">{props.currentlySelectedUserOperation}</button>
  </div>
}