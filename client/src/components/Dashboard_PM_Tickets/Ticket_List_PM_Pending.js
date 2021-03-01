import React, { useState } from "react";
import PropTypes from "prop-types";
import Ticket_List_Item_PM from "./Ticket_List_Item_PM";
// import "./Ticket_List_PM.scss"
import ListGroup from "react-bootstrap/ListGroup";


export default function Ticket_List_PM_Pending(props) {
  const [ticketStatus, setTicketStatus] = useState("Pending");
  const [employee, setEmployee] = useState("none"); // need this?
  const { assignEmployeeToTicket } = props;
  const {
    ticketsOrganizedByProperty,
    selectedProperty,
    ticketsPending,
    ticketsInProgress,
  } = props;

  console.log("***Ticket_List_PM_Pending -- props: ", props);

  return (
    <section className="tickets">
      <ListGroup>
        {ticketsPending.map((ticket) => (
          <ListGroup.Item style={{backgroundColor: 'rgba(255, 166, 0, 0.397)' , border: '1px solid 	#A9A9A9'}}action variant="light">
            <Ticket_List_Item_PM
              assignEmployeeToTicket={assignEmployeeToTicket}
              key={ticket.id}
              ticketID={ticket.id}
              ticketStatus={ticket.ticketStatus}
              createdAt={ticket.created_at}
              unit={ticket.unit}
              property_id={ticket.property_id}
              maintenanceTypeID={ticket.maintenance_type_id}
              description={ticket.description}
              employee_id={null}
              creator_id={ticket.creator_id}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  );
}
