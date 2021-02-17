import React from "react";

import "./PropertyListItem.scss";
import classnames from "classnames";

export default function PropertyListItem(props) {
  
  const { name } = props;

  return (

    
    <li className= {props.name} data-testid="day">
      <h2 className="text--regular">{props.name}</h2>
    </li>
  );
}