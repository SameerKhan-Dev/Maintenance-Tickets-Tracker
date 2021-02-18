import React, { useState } from "react";
import PropTypes from "prop-types";
import Ticket_List_Item_PM from "./Ticket_List_Item_PM";
// import "./Ticket_List_PM.scss"

const tickets = [
  {
    ticket_id: 1,
    ticketStatus: "Pending", 
    createdAt: "2021-02-16",
    unit: 8,
    property_id: 2,
    // employeeName: "", 
    maintenanceType: "Plumbing", 
    description: "Description"
  },
  {
    ticket_id: 2,
    ticketStatus: "Pending", 
    createdAt: "2021-02-16",
    unit: 9,
    property_id: 3,
    // employeeName: "", 
    maintenanceType: "General Maintenance", 
    description: "Description"
  },
  {
    ticket_id: 3,
    ticketStatus: "Pending", 
    createdAt: "2021-02-16",
    unit: 5,
    property_id: 4,
    // employeeName: "", 
    maintenanceType: "Electrical", 
    description: "Description"
  }
];

export default function Ticket_List_PM(props) {
  const [ticketStatus, setTicketStatus] = useState("Pending");
  const [employee, setEmployee] = useState("none"); // need this?

  const {ticketsOrganizedByProperty} = props;

  



  return (
    <section className="tickets">
      <h4>Ticket List</h4>
      <ul>
        {tickets.map(ticket => (
          <Ticket_List_Item_PM
            key={ticket.id}
            ticketStatus={ticket.ticketStatus} 
            createdAt={ticket.createdAt}
            unit={ticket.unit}
            property_id={ticket.property_id}
            // employeeName=, 
            maintenanceType={ticket.maintenanceType} 
            description={ticket.description}
          />
        ))}
      </ul>
    </section>
  )
}