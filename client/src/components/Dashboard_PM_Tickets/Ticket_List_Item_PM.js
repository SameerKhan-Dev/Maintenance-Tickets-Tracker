import React, { useState } from "react";
import Button from "./Button";
// import Ticket_List_PM from "./Ticket_List_PM_Pending";
import Employee_List_PM from "./Employee_List_PM";
import MyVerticallyCenteredModal from './specificTicket_Modal';
import "./Ticket_List_Item_PM.scss";

export default function Ticket_List_Item_PM(props) {
  const [modalShow, setModalShow] = React.useState(false);

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
  const hideModal = function (ticket_id, employee_id) {
    setModalShow(false);
    assignEmployeeToTicket(ticket_id, employee_id);
    
    
  }
  const [ticketItemState, setState] = useState("employee-unassigned");
  const {assignEmployeeToTicket} = props;
  return (
    <main className="ticket__cards">
      <section className="ticket__card-left">
        <div>{unit}</div>
        <div>{maintenanceType}</div>
        <div>{description}</div>
      </section>
      {/*
      <section className="ticket__validation">
        <Employee_List_PM employeeList={employees} />
      </section>
      */}
      <section className="ticket__card-right">
        <div>{ticketStatus}</div>
        <div>{ticketID}</div>
        <div>{createdAt}</div>
      </section>
      <>
        {
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Assign Employee
        </Button>
      }
        <MyVerticallyCenteredModal
          employeeList={employees}
          description = {description}
          show={modalShow}
          onHide = {hideModal}
          ticket_id = {ticketID}
          assignEmployeeToTicket = {assignEmployeeToTicket}
        />
      </>
       {/*onHide={() => setModalShow(false)}*/}
      <section className="ticket__actions">
        {/* <Button danger onClick={cancel}>
          Cancel
        </Button>
        <Button onClick={validate}>Save</Button> */}
      </section>
    </main>
  );
}
