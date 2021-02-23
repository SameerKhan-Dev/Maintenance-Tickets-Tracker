import React, { useState, Component } from "react";
import "./PropertyListItem.scss";
import classnames from "classnames";

export default function PropertyListItem(props) {
  console.log("*** Props inside PropertyListItem: ", props);

  const { name, selectProperty, property_id } = props;

  // setState helper function
  // use the setState_PM_ state function from props and do whatss below
  // define a helper function , that goes into the state variable
  // and updates only what is required in the state
  // set selected to be property.id

  return (
    // assign li to be a clickable component: add onClick: (state-handler - helper function)
    <li
      className={props.name}
      data-testid="day"
      onClick={() => {
        selectProperty(property_id);
      }}
    >
      <h4 className="text--regular">{props.address}</h4>
    </li>
  );
}
