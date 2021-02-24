import React from "react";

import "./AssignedTicketsListItem.scss";
import classnames from "classnames";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AssignedTicketsListItem(props) {

  
  const {id, description, created_at,maintenance_type_id, property_id, selectTicket, selectedProperty} = props;

  return (
    <li onClick= {() => selectTicket(id)}className= {props.id} data-testid="day">
      {id === 0 ?   <h5 className="text__regular"><div><FontAwesomeIcon icon={faHome} /></div>Tickets Summary </h5> :  
      <h5 className="text__regular">Ticket ID: {id}</h5> }
    </li>
  );
}
