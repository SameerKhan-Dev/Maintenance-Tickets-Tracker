import React from "react";
import Table from "react-bootstrap/Table";
import "./AssignedTicketsListItem.scss";
import classnames from "classnames";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import "./Tickets_Summary.scss";

export default function Tickets_Summary(props) {
  const tenants = [
    {
      id: 13,
      firstName: "Bee",
      lastName: "Lister",
    },
    {
      id: 14,
      firstName: "Carl",
      lastName: "Harvey",
    },
    {
      id: 15,
      firstName: "Davey",
      lastName: "Harvey",
    },
  ];

  //const{ticketsOrganizedByProperty} = props;

  //const {id, description, created_at,maintenance_type_id, property_id, selectTicket} = props;
  const { properties, tickets, selectedProperty } = props;

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
          if (ticket.property_id === property.id) {
            propertyTickets.push(ticket);
          }
        }
        result.push({
          property: property,
          tickets: propertyTickets,
        });
      }
      return result;
    } else {
      for (let property of properties) {
        if (property.id === selectedProperty) {
          let propertyTickets = [];
          for (let ticket of tickets) {
            if (ticket.property_id === property.id) {
              propertyTickets.push(ticket);
            }
          }
          result.push({
            property: property,
            tickets: propertyTickets,
          });
        }
      }
      return result;
    }
  };

  let ticketsOrganizedByProperty = organizeTicketsByProperty(
    tickets,
    properties
  );
  console.log("ticketsOrganizedByProperty is: ", ticketsOrganizedByProperty);
  return (
    <>{ selectedProperty===0 ?       
      <Card className="title__summary" body>
        <h4 className="tickets_summary_title">
        <b>MY ASSIGNED TICKETS SUMMARY:</b>
        </h4>
      </Card>
      :
      <Card className="title__summary2" body>
        <h4 className="tickets_summary_title">
        <b>MY ASSIGNED TICKETS SUMMARY:</b>
        </h4>
      </Card>
      }

      {ticketsOrganizedByProperty.map((property) => (
        <div className="test__summary">
          <Card className="bottom">
            <Card.Header className="address_header">
              <h5>
                Address: <b>{property.property.address}</b>
              </h5>
            </Card.Header>
            <Card.Body className="address_info">
              <Card.Text>
                <Table className="table__summ" bordered hover>
                  <thead className="address__info__table">
                    <tr>
                      <th className="border_cells">Ticket ID:</th>
                      <th className="border_cells">Description</th>
                      <th className="border_cells">Submitted By:</th>
                      <th className="border_cells">Date Submitted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {property.tickets.map((ticket) => (
                      <>
                        <tr>
                          <td className="border_cells">{ticket.id}</td>
                          <td className="border_cells">{ticket.description}</td>
                          {ticket.creator_id === 13 && (
                            <td className="border_cells">{`${tenants[0].firstName} ${tenants[0].lastName}`}</td>
                          )}
                          {ticket.creator_id === 14 && (
                            <td className="border_cells">{`${tenants[1].firstName} ${tenants[1].lastName}`}</td>
                          )}
                          {ticket.creator_id === 15 && (
                            <td className="border_cells">{`${tenants[2].firstName} ${tenants[2].lastName}`}</td>
                          )}
                          <td className="border_cells">{ticket.created_at.substr(0, 10) }</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}
