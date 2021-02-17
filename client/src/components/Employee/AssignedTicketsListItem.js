import React from "react";

import "./AssignedTicketsListItem.scss";
import classnames from "classnames";

export default function AssignedTicketsListItem(props) {
  
  const { id} = props;

  return (

    
    <li className= {props.id} data-testid="day">
      <h2 className="text--regular">{props.id}</h2>
    </li>
  );
}