import React, {useState, Component} from 'react';

import "./PropertyListItem_Tickets.scss";
import classnames from "classnames";

export default function PropertyListItem_Tickets(props) {
  
  const { name, selectProperty, property_id } = props;

  return (

    <li className= {props.name} data-testid="day" onClick={ () => {
      
      selectProperty(property_id);
     
      }} >
      <h5 className="text--regular--ticket property_name">{props.address}</h5>
    </li>
  );
}
