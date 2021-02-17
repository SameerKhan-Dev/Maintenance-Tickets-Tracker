
  
import React from "react";
import AssignedTicketsListItem from "./AssignedTicketsListItem"

let tickets = [
  {name: "Ticket ID #1", ticket_id:1, address: 'address #1'},
  {name: "Ticket ID #2", ticket_id:2, address: 'address #2'},
  {name: "Ticket ID #3", ticket_id:3, address: 'address #3'},
  {name: "Ticket ID #4", ticket_id:4, address: 'address #4'},
]

export default function AssignedTicketList(props){
  return (
    (tickets.map((ticket) => (
        <AssignedTicketsListItem
          key={ticket.id}
          name={ticket.name} 
        />
    )))
  );
};

