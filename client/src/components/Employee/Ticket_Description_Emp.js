import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Ticket_Description(props) {
  const tenants = [
    {
      id: 13,
      firstName: "Jack",
      lastName: "Harvey",
    },
    {
      id: 14,
      firstName: "Carl",
      lastName: "Cooper",
    },
    {
      id: 15,
      firstName: "Davey",
      lastName: "Handerson",
    },
  ];

  const {
    ticketID,
    ticketStatus,
    createdAt,
    unit,
    property_id,
    employees,
    maintenanceType,
    description,
    image_path,
    selectedTicketInfo,
  } = props;
  console.log(
    "inside Ticket_Description component: value of selectedTicketInfo is: ",
    selectedTicketInfo
  );
  return (
    <>
      <Card>
        <Card.Body>
          {selectedTicketInfo.creator_id === 13 && (
            <Card.Title>
              <b>Submitted By: </b>
              {`${tenants[0].firstName} ${tenants[0].lastName}`}
            </Card.Title>
          )}
          {selectedTicketInfo.creator_id === 14 && (
            <Card.Title>
              <b>Submitted By: </b>
              {`${tenants[1].firstName} ${tenants[1].lastName}`}
            </Card.Title>
          )}
          {selectedTicketInfo.creator_id === 15 && (
            <Card.Title>
              <b>Submitted By: </b>
              {`${tenants[2].firstName} ${tenants[2].lastName}`}
            </Card.Title>
          )}
          <Card.Title>
            <b>Description of Issue:</b>
          </Card.Title>
          <Card.Text>{selectedTicketInfo.description}</Card.Text>
        </Card.Body>
      </Card>
      {/*   
    <section className="ticket__card-description">
      <h2>Description of Issue:</h2>
      <div>{selectedTicketInfo.description}</div>
      <img src={image_path/*selectedTicketInfo.image_path} alt="uploaded_image_path" />
    </section>
     */}
    </>
  );
}
