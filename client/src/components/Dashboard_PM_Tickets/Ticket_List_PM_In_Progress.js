import React, { useState } from "react";
import PropTypes from "prop-types";
import Ticket_List_Item_PM from "./Ticket_List_Item_PM";
// import "./Ticket_List_PM.scss"
import ListGroup from "react-bootstrap/ListGroup";

const tickets = [
  {
    ticket_id: 1,
    ticketStatus: "Pending",
    createdAt: "2021-02-16",
    unit: 8,
    property_id: 2,
    // employeeName: "",
    maintenanceType: "Plumbing",
    description: "Description",
  },
  {
    ticket_id: 2,
    ticketStatus: "Pending",
    createdAt: "2021-02-16",
    unit: 9,
    property_id: 3,
    // employeeName: "",
    maintenanceType: "General Maintenance",
    description: "Description",
  },
  {
    ticket_id: 3,
    ticketStatus: "Pending",
    createdAt: "2021-02-16",
    unit: 5,
    property_id: 4,
    // employeeName: "",
    maintenanceType: "Electrical",
    description: "Description",
  },
];

export default function Ticket_List_PM_In_Progress(props) {
  const [ticketStatus, setTicketStatus] = useState("Pending");
  const [employee, setEmployee] = useState("none"); // need this?
  const { assignEmployeeToTicket } = props;
  const {
    ticketsOrganizedByProperty,
    selectedProperty,
    ticketsPending,
    ticketsInProgress,
  } = props;
  /*
  ticketsPending= {state_PM_Tickets.ticketsPending}
  ticketsInProgress = {state_PM_Tickets.ticketsInProgress}
  */
  // extract the tickets from the ticketsOrganizedByProperty that are pending
  /*
  let isOkay = false;
  if(ticketsOrganizedByProperty.length > 0) {

    isOkay = false;
  };
  */
  /*
   if(isOkay) {
     for (let propertyObject of ticketsOrganizedByProperty) {
 
       if(propertyObject.property_id === selectedProperty){
         pendingTickets = propertyObject.ticketsArray; 
       }
   
     }
   }
 */

  // console.log("PendingTickets are: ", pendingTickets);
  //console.log("Pending Tickets length is: ", pendingTickets.length);

  return (
    <section className="tickets">
      <ListGroup>
        {ticketsInProgress.map((ticket) => (
          <ListGroup.Item action variant="light">
            <Ticket_List_Item_PM
              key={ticket.id}
              ticketID={ticket.id}
              assignEmployeeToTicket={assignEmployeeToTicket}
              ticketStatus={ticket.ticketStatus}
              createdAt={ticket.created_at}
              unit={ticket.unit}
              property_id={ticket.property_id}
              employee_id={ticket.employee_id}
              // employeeName=,
              maintenanceType={ticket.maintenanceType}
              description={ticket.description}
              creator_id={ticket.creator_id}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  );
}
/*
<ListGroup>
<ListGroup.Item>No style</ListGroup.Item>
<ListGroup.Item variant="primary">Primary</ListGroup.Item>
<ListGroup.Item action variant="secondary">
  Secondary
</ListGroup.Item>
<ListGroup.Item action variant="success">
  Success
</ListGroup.Item>
<ListGroup.Item action variant="danger">
  Danger
</ListGroup.Item>
<ListGroup.Item action variant="warning">
  Warning
</ListGroup.Item>
<ListGroup.Item action variant="info">
  Info
</ListGroup.Item>
<ListGroup.Item action variant="light">
  Light
</ListGroup.Item>
<ListGroup.Item action variant="dark">
  Dark
</ListGroup.Item>
</ListGroup>
*/
