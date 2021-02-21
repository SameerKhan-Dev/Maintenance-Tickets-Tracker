import React from "react";
import Table from 'react-bootstrap/Table'
import "./AssignedTicketsListItem.scss";
import classnames from "classnames";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Tickets_Summary(props) {
    //const{ticketsOrganizedByProperty} = props;
  
  //const {id, description, created_at,maintenance_type_id, property_id, selectTicket} = props;
    const {properties, tickets,selectedProperty} = props;
    
    // create a structure that will organize the tickets based on property
    /*
        const propertyTickets = [
            {  
                property object {
                    id: ..,
                    address:..,
                    ...
                } 
                ticketsForProperty : []
            }
        ]
    */
    const organizeTicketsByProperty = function (tickets, properties) {

        const result = [];
        // loop through properties and add to the structure
        if (selectedProperty === 0) {
            for (let property of properties) {
                let propertyTickets = [];
                for (let ticket of tickets) {
                    if (ticket.property_id === property.id){
                        propertyTickets.push(ticket);
                    }
                }
                result.push({
                    property: property,
                    tickets: propertyTickets
                });
            }
            return result;
        } else {
            for (let property of properties) {
              
                if(property.id === selectedProperty) {
                    let propertyTickets = [];
                    for (let ticket of tickets) {
                        if (ticket.property_id === property.id){
                            propertyTickets.push(ticket);
                        }
                    }
                    result.push({
                        property: property,
                        tickets: propertyTickets
                    });
                }
            }
            return result;
        }
    }

    let ticketsOrganizedByProperty = organizeTicketsByProperty(tickets, properties);
    console.log("ticketsOrganizedByProperty is: ", ticketsOrganizedByProperty);
  return (
    <>
     <Card body><h2><b>MY ASSIGNED TICKETS SUMMARY:</b></h2></Card>
     {ticketsOrganizedByProperty.map(property => (
        <Card>
            <Card.Header><h5>Address: <b>{property.property.address}</b></h5></Card.Header>
            <Card.Body>
                <Card.Text>
                    <Table bordered hover>
                        <thead>
                            <tr>
                            <th>Ticket ID:</th>
                            <th>Description</th>
                            <th>Submitted By:</th>
                            <th>Date Submitted</th>
                            </tr>
                        </thead>
                        <tbody>
                            { property.tickets.map(ticket => (
                                        <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Text>
            </Card.Body>
        </Card>
         ))}
    </>
  );
}
