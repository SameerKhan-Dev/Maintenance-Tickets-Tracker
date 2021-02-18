import React, { useState } from "react";

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
  } = props;

  return (
    <section className="ticket__card-description">
      <h2>Description of Issue:</h2>
      <div>{description}</div>
      <img src={image_path} alt="uploaded_image_path" />
    </section>
  );
}
