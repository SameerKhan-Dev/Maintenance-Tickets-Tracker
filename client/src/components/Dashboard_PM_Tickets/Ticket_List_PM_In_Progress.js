import React, { useState } from "react";
import PropTypes from "prop-types";
import Ticket_List_Item_PM from "./Ticket_List_Item_PM";
import ListGroup from "react-bootstrap/ListGroup";
import "./Ticket_List_PM_In_Progress";

const tickets = [
  {
    ticket_id: 1,
    ticketStatus: "Pending",
    createdAt: "2021-02-16",
    unit: 8,
    property_id: 2,
    maintenanceType: "Plumbing",
    description: "Description",
  },
  {
    ticket_id: 2,
    ticketStatus: "Pending",
    createdAt: "2021-02-16",
    unit: 9,
    property_id: 3,
    maintenanceType: "General Maintenance",
    description: "Description",
  },
  {
    ticket_id: 3,
    ticketStatus: "Pending",
    createdAt: "2021-02-16",
    unit: 5,
    property_id: 4,
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

  return (
    <section className="tickets">
      <ListGroup>
        {ticketsInProgress.map((ticket) => (
          <ListGroup.Item style={{backgroundColor: 'orange', border: '1px solid black'}}action variant="light">
            <Ticket_List_Item_PM
              key={ticket.id}
              ticketID={ticket.id}
              assignEmployeeToTicket={assignEmployeeToTicket}
              ticketStatus={ticket.ticketStatus}
              createdAt={ticket.created_at}
              unit={ticket.unit}
              property_id={ticket.property_id}
              employee_id={ticket.employee_id}
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
