import ListGroup from 'react-bootstrap/ListGroup'
  
import React from "react";
import AssignedTicketsListItem from "./AssignedTicketsListItem"


export default function AssignedTicketList(props){

  const {employeeInProgressTickets, selectTicket, selectedProperty, key, selectedTicket} = props;

  return (
    <ListGroup>
          <ListGroup.Item style={{textAlign: 'center'}} action variant={(selectedTicket !== 0 ? "dark" : "light")}><AssignedTicketsListItem  id={0} selectTicket = {selectTicket}/></ListGroup.Item>
    {employeeInProgressTickets.map((ticket) => (
   
      <>
       <ListGroup.Item style={{textAlign: 'center'}} action variant={(selectedTicket !== ticket.id ? "dark" : "light")}>
          <AssignedTicketsListItem
            key={ticket.id}
            id = {ticket.id}
            description = {ticket.description}
            created_at = {ticket.created_at}
            maintenance_type_id= {ticket.maintenance_type_id}
            property_id = {ticket.property_id}
            selectTicket = {selectTicket}
            selectedProperty = {selectedProperty}
          />
        </ListGroup.Item>
          <div>
          </div>
      </>
    ))}
    </ListGroup>
  );
};

