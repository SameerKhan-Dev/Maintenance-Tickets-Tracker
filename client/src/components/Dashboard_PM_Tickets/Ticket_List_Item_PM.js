import React, { useState } from "react";
import Button from "./Button";
// import Ticket_List_PM from "./Ticket_List_PM_Pending";
import Employee_List_PM from "./Employee_List_PM";
import MyVerticallyCenteredModal from "./specificTicket_Modal";
import "./Ticket_List_Item_PM.scss";

export default function Ticket_List_Item_PM(props) {
  const [modalShow, setModalShow] = React.useState(false);

  console.log("***Ticket_List_Item_PM --props: ", props);
  const {
    ticketID,
    ticketStatus,
    createdAt,
    unit,
    property_id,
    employees,
    maintenanceTypeID,
    maintenanceType,
    description,
    creator_id,
  } = props;

  // assignEmployeeToTicket={assignEmployeeToTicket}
  // key={ticket.id}
  // ticketID={ticket.id}
  // ticketStatus={ticket.ticketStatus}
  // createdAt={ticket.created_at}
  // unit={ticket.unit}
  // property_id={ticket.property_id}
  // // employeeName=,
  // maintenanceTypeID={ticket.maintenance_type_id}
  // description={ticket.description}
  // employee_id={null}

  const hideModal = function (ticket_id, employee_id) {
    setModalShow(false);
    assignEmployeeToTicket(ticket_id, employee_id);
  };

  const employees2 = [
    {
      id: 24,
      name: "Sameer",
      role_id: 3,
    },
    {
      id: 25,
      name: "Mike",
      role_id: 4,
    },
    {
      id: 26,
      name: "Roger",
      role_id: 5,
    },
  ];

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

  const getEmployeeName = function (employee_id) {
    for (let employee of employees2) {
      if (employee.id === employee_id) {
        return employee.name;
      }
    }
  };

  let maintenance_type = "";
  if (maintenanceTypeID === 1) {
    maintenance_type = "Plumbing";
  } else if (maintenanceTypeID === 2) {
    maintenance_type = "Electrical";
  } else {
    maintenance_type = "General Maintenance";
  }

  const [ticketItemState, setState] = useState("employee-unassigned");
  const { assignEmployeeToTicket, employee_id } = props;
  return (
    <main className="ticket__cards">
      <section className="ticket__card-left">
        {/* <div>{unit}</div> */}
        <div className="maintenance__ticket__id">
          <div className="maintenance__type">
            <b>Maintenance type: </b>
            {maintenance_type}
          </div>
          <div className="ticket__id">
            <h6><b>Ticket ID:</b>  {`${ticketID}`} </h6>
            
          </div>
        </div>
        <div className="ticket__description">
          <b>Description: </b>
          {description}
        </div>
      </section>

      <section className="ticket__card-right">
        <div>{ticketStatus}</div>
        
        {/* <div>Ticket ID: {ticketID}</div>
        <div>Created at: {createdAt}</div> */}
        {creator_id === 13 && (
          <div className="created_by_text">
            <b>Created by: </b>
            {`${tenants[0].firstName} ${tenants[0].lastName}`}
          </div>
        )}
        {creator_id === 14 && (
          <div className="created_by_text">
            <b>Created by: </b>
            {`${tenants[1].firstName} ${tenants[1].lastName}`}
          </div>
        )}
        {creator_id === 15 && (
          <div className="created_by_text">
            <b >Created by: </b>
            {`${tenants[2].firstName} ${tenants[2].lastName}`}
          </div>
        )}
        <div className="ticket__status">{ticketStatus}</div>
        <div className="created__at">
          <b>{`Created at: ${createdAt.substr(0, 10)}`}</b>
        </div>
      </section>
      {/* <section className="test__button">
            <a href="#" class="cta">
            <span>Assign Employee</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </section> */}
      <>
        {employee_id === null ? (
          <section onClick={() => setModalShow(true)}>
            <a href="#" class="cta">
              <span><b className= "assign_employee">Assign Employee</b></span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </section>
        ) : (
          <Button action variant="primary" onClick={() => setModalShow(true)}>
            <h6 className="assigned_button" >Assigned to: {getEmployeeName(employee_id)}</h6>
          </Button>
        )}
        <MyVerticallyCenteredModal
          style={{ backgroundColor: "rgba(0, 0, 0, 0.56)" }}
          employeeList={employees}
          description={description}
          employee_id={employee_id}
          show={modalShow}
          onHide={hideModal}
          ticket_id={ticketID}
          assignEmployeeToTicket={assignEmployeeToTicket}
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
