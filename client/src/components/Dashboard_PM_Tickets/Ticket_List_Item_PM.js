import React, { useState } from "react";
import Button from "./Button";
import Ticket_List_PM from "./Ticket_List_PM";
import Employee_List_PM from "./Employee_List_PM";

import "./Ticket_List_Item_PM.scss";

export default function Ticket_List_Item_PM(props) {
  const {
    ticketID,
    ticketStatus,
    createdAt,
    unit,
    property_id,
    employees,
    maintenanceType,
    description,
  } = props;

  const [ticketItemState, setState] = useState("employee-unassigned");

  return (
    <main className="ticket__cards">
      <section className="ticket__card-left">
        <div>{unit}</div>
        <div>{maintenanceType}</div>
        <div>{description}</div>
      </section>

      <section className="ticket__validation">
        <Employee_List_PM employeeList={employees} />
      </section>

      <section className="ticket__card-right">
        <div>{ticketStatus}</div>
        <div>{ticketID}</div>
        <div>{createdAt}</div>
      </section>

      <section className="ticket__actions">
        {/* <Button danger onClick={cancel}>
          Cancel
        </Button>
        <Button onClick={validate}>Save</Button> */}
      </section>
    </main>
  );
}
