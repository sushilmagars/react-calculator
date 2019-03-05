import React from 'react';

export default function VerticalPlaygound(props) {
  return <div className="vertical-playground">
    <button className="operation-btn">{props.currentlySelectedUserOperation}</button>
  </div>
}