import ListGroup from 'react-bootstrap/ListGroup'
  
import React from "react";
import AssignedTicketsListItem from "./AssignedTicketsListItem"

let tickets = [
  {name: "Ticket ID #1", ticket_id:1, address: 'address #1'},
  {name: "Ticket ID #2", ticket_id:2, address: 'address #2'},
  {name: "Ticket ID #3", ticket_id:3, address: 'address #3'},
  {name: "Ticket ID #4", ticket_id:4, address: 'address #4'},
]

export default function AssignedTicketList(props){

  const {employeeInProgressTickets, selectTicket} = props;

  return (
    <ListGroup>
          <ListGroup.Item action variant="warning"><AssignedTicketsListItem  id={0} selectTicket = {selectTicket}/> Tickets Summary</ListGroup.Item>
    {employeeInProgressTickets.map((ticket) => (
   
      <>
       <ListGroup.Item action variant="info">
          <AssignedTicketsListItem
            key={ticket.id}
            id = {ticket.id}
            description = {ticket.description}
            created_at = {ticket.created_at}
            maintenance_type_id= {ticket.maintenance_type_id}
            property_id = {ticket.property_id}
            selectTicket = {selectTicket}
          />
        </ListGroup.Item>
          <div>
          </div>
      </>
    ))}
    </ListGroup>
  );
};

