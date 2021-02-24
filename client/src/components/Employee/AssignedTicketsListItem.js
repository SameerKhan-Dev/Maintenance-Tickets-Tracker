import React from "react";

import "./AssignedTicketsListItem.scss";
import classnames from "classnames";
import { faHome, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 'mdbreact/dist/css/mdb.css';

export default function AssignedTicketsListItem(props) {

  
  const {id, description, created_at,maintenance_type_id, property_id, selectTicket, selectedProperty} = props;

  return (
    <li onClick= {() => selectTicket(id)}className= {props.id} data-testid="day">
      {id === 0 ?   <h5 className="text__regular"><div className="home__allprop"></div><FontAwesomeIcon icon={faHome} />Tickets Summary </h5> :  
      <h5 className="text__regular"><FontAwesomeIcon style={{textAlign: 'left'}} icon={faExclamationTriangle} />Ticket ID: {id}</h5> }
    </li>
  );
}
{/* <MDBIcon icon="arrow-right" /> */}