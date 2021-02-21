import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Ticket_Description(props) {
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
    selectedTicketInfo
  } = props;
  console.log("inside Ticket_Description component: value of selectedTicketInfo is: ", selectedTicketInfo);
  return (
    

    <>
      <Card>
        <Card.Body>
          <Card.Title><b>Description of Issue:</b></Card.Title>
          <Card.Text>
            {selectedTicketInfo.description}
          </Card.Text>
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
