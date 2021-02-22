import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Ticket_Summary_Emp(props) {
  console.log("PROPS in Ticket_Summary_Emp =", props);
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
    properties,
    selectedTicketInfo,
  } = props;

  const getSelectedPropertyAddress = (property_id, properties) => {
    let addressSelected = "";
    for (let property of properties) {
      if (property.id === property_id) {
        addressSelected = property.address;
      }
    }
    return addressSelected;
  };

  let selectedAddress = getSelectedPropertyAddress(
    selectedTicketInfo.property_id,
    properties
  );

  return (
    <>
      <Card>
        <Card.Header as="h5">TICKET ID: {selectedTicketInfo.id}</Card.Header>
        <Card.Body>
          <Card.Title>
            <b>Property Overview:</b>
          </Card.Title>
          <Card.Text>{`Address: ${selectedAddress}`}</Card.Text>
        </Card.Body>
      </Card>
      {/*
    <section className="ticket__card-summary">
      <section className="ticket__card-left">
        <div>{unit}</div>
        <div>{maintenanceType}</div>
        <div>{description}</div>
      </section>

      <section className="ticket__card-right">
        <div>{ticketStatus}</div>
        <div>{ticketID}</div>
        <div>{createdAt}</div>
      </section>
    </section>
     */}
    </>
  );
}
