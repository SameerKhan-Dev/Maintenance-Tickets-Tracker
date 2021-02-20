import React from "react";

import "./AssignedTicketsListItem.scss";
import classnames from "classnames";

export default function AssignedTicketsListItem(props) {

  
  const {id, description, created_at,maintenance_type_id, property_id} = props;

  return (

    <li className= {props.id} data-testid="day">
      <h2 className="text--regular">Ticket ID: {id}</h2>
    </li>
  );
}
