import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Ticket_Summary_Emp.scss";

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
        <Card.Header className="title__summary1" as="h5">TICKET ID: {selectedTicketInfo.id}</Card.Header>
        <Card.Body className="address__info">
          <Card.Title>
            <b>Property Overview:</b>
          </Card.Title>
          <Card.Text>{`Address: ${selectedAddress}`}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
