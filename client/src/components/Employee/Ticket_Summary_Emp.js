import React, { useState } from "react";

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
  } = props;

  return (
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
  );
}
