import React, {useState, Component} from 'react';

import "./PropertyListItem_Tickets.scss";
import classnames from "classnames";

export default function PropertyListItem_Tickets(props) {
  
  const { name, selectProperty, property_id } = props;

  // setState helper function
  // use the setState_PM_ state function from props and do whatss below
  // define a helper function , that goes into the state variable
  // and updates only what is required in the state
  // set selected to be property.id


  return (

    // assign li to be a clickable component: add onClick: (state-handler - helper function)
    <li className= {props.name} data-testid="day" onClick={ () => {
      
      selectProperty(property_id);
     
      }} >
      <h2 className="text--regular--ticket">{props.name}</h2>
    </li>
  );
}
