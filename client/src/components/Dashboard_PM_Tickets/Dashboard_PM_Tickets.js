import React, { useState, Component } from "react";
import { useEffect } from "react";
import "../Application.scss";
import axios from "axios";
import Employee_List_PM from "./Employee_List_PM";
import Ticket_List_PM_Pending from "./Ticket_List_PM_Pending";
import specificTicket_Modal from "./specificTicket_Modal";
import Ticket_List_PM_In_Progress from "./Ticket_List_PM_In_Progress";
import Side_NavBar_PM_Tickets from "./Side_NavBar_PM_Tickets";
import Top_NavBar_PM_Tickets from "./Top_Nav_Bar_PM_Tickets";
import "./Dashboard_PM_Tickets.scss";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import ToastHeader from "react-bootstrap/ToastHeader";
import ToastBody from "react-bootstrap/ToastBody";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import MyVerticallyCenteredModal from "./specificTicket_Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./Dashboard_PM_Tickets.scss";

export default function Dashboard_PM_Tickets(props) {
  console.log("****Inside Dashboard_PM_Tickets -- props = ", props);

  const [modalShow, setModalShow] = React.useState(false);
  // When user login is setup, extract user_id using cookies
  // temporarily we are going to use user_id as 3 (i.e pm_id for this page)
  const tempPM_Id = 3;
  const [state_PM_Tickets, setState_PM_Tickets] = useState({
    // selectedProperty = 0, means no property selected
    selectedProperty: 0,
    properties: [],
    tickets: [],
    ticketsOrganizedByProperty: [{}],
    specificStats: {
      totalUnsolved: 0,
      pending: 0,
      in_Progress: 0,
    },
  });

  console.log("***state_PM_Tickets.properties = ", state_PM_Tickets.properties);
  console.log("***state_PM_Tickets.tickets = ", state_PM_Tickets.tickets);
  console.log(
    "***state_PM_Tickets.ticketsOrganizedByProperty = ",
    state_PM_Tickets.ticketsOrganizedByProperty
  );

  // Grab address and image for selected property
  let addressForSelectedProperty = "";
  let imagePathForSelectedProperty = "";
  for (const propertyObject of state_PM_Tickets.properties) {
    if (propertyObject.id === state_PM_Tickets.selectedProperty) {
      addressForSelectedProperty = propertyObject.address;
      imagePathForSelectedProperty = propertyObject.image_path;
    }
  }

  // this helper function updates ticket with newly assigned employee, in the database and in local state.
  const assignEmployeeToTicket = function (ticket_id, employee_id) {

    return axios
      .put(`/tickets/assignEmployee`, {
        ticket_id: ticket_id,
        employee_id: employee_id,
      })
      .then((response) => {
        let ticketsArray = [...state_PM_Tickets.tickets];

        console.log("RESPONSE: ", response.data);
        for (let ticket of ticketsArray) {
          if (ticket.id === ticket_id) {
            ticket.ticket_status_id = 2;
            ticket.employee_id = employee_id;
          }
        }
        setState_PM_Tickets((prev) => ({ ...prev, tickets: ticketsArray }));
      });
  };

  // this helper function constructs an array of properties, along with tickets for specific property
  const constructTicketsData = function (propertiesArray, ticketsArray) {
    let ticketsOrganizedByProperty = []; 

    // construct the initial tickets data
    ticketsOrganizedByProperty.push({
      property_id: 0,
      ticketsArray: ticketsArray,
      statsForProperty: {
        totalUnsolved: 0,
        in_Progress: 0,
        pending: 0,
      },
    });

    // loop through the properties array and build the following structure for each property
    for (let property of propertiesArray) {
      ticketsOrganizedByProperty.push({
        property_id: property.id,
        ticketsArray: [],
        statsForProperty: {
          totalUnsolved: 0,
          in_Progress: 0,
          pending: 0,
        },
      });
    }

    // filter and store tickets for each property_id
    for (let property of ticketsOrganizedByProperty) {
      for (let ticket of ticketsArray) {
        if (ticket.property_id === property.property_id) {
          property.ticketsArray.push(ticket);
        }
      }
    }


    // then filter and build stats for each property and add to the corresponding properties array 
    for (let property of ticketsOrganizedByProperty) {
      // loop through the property's ticketData to build the stats
      let totalUnsolved = 0;
      let pending = 0;
      let inProgress = 0;

      for (let ticket of property.ticketsArray) {
        // pending is ticket_status_id 1
        if (ticket.ticket_status_id === 1) {
          pending += 1;
          totalUnsolved += 1;
        } else if (ticket.ticket_status_id === 2) {
          inProgress += 1;
          totalUnsolved += 1;
        }
      }
      property.statsForProperty.totalUnsolved = totalUnsolved;
      property.statsForProperty.pending = pending;
      property.statsForProperty.in_Progress = inProgress;

    }
    return ticketsOrganizedByProperty;
  };
  let ticketsOrganizedByProperty = constructTicketsData(
    state_PM_Tickets.properties,
    state_PM_Tickets.tickets
  );

  // this function obtains specific stats to display for each property
  const obtainStats = function (ticketsOrganizedByProperty, selectedProperty) {
    // loop through allPropertiesStats array and find property with id matching selectedProperty value.
    // extract the specific stats for the selected property and return that value.
    for (let property of ticketsOrganizedByProperty) {
      if (property.property_id === selectedProperty) {
        return property.statsForProperty;
      }
    }
  };
  const selectProperty = function (property_id) {
    let pendingTicketsArray = [];
    let inProgressTicketsArray = [];

    for (let propertyObject of state_PM_Tickets.ticketsOrganizedByProperty) {
      if (propertyObject.property_id === property_id) {
        for (let ticket of propertyObject.ticketsArray) {

          if (ticket.ticket_status_id === 1) {
            pendingTicketsArray.push(ticket);
          }
        }
      }
    }

    setState_PM_Tickets((prev) => ({ ...prev, selectedProperty: property_id }));
  };

  // this helper function returns all tickets that are pending (i.e not assigned to an employee).
  const setTicketsPending = function () {
    const ticketsPending = [];
    const property_id = state_PM_Tickets.selectedProperty;

    for (let propertyObject of ticketsOrganizedByProperty) {
      if (propertyObject.property_id === property_id) {
        for (let ticket of propertyObject.ticketsArray) {

          if (ticket.ticket_status_id === 1) {
            ticketsPending.push(ticket);
          }
        }
      }
    }
    return ticketsPending;
  };

  //this helper function returns all tickets that are in-progress (i.e currently assigned to an employee).
  const setTicketsInProgress = function () {
    const ticketsInProgress = [];
    const property_id = state_PM_Tickets.selectedProperty;

    for (let propertyObject of ticketsOrganizedByProperty) {
      if (propertyObject.property_id === property_id) {
        for (let ticket of propertyObject.ticketsArray) {
          if (ticket.ticket_status_id === 2) {
            ticketsInProgress.push(ticket);
          }
        }
      }
    }
    return ticketsInProgress;
  };

  const ticketsPending = setTicketsPending();
  const ticketsInProgress = setTicketsInProgress();

  // obtain specific stats for selected property
  let specificStats = obtainStats(
    ticketsOrganizedByProperty,
    state_PM_Tickets.selectedProperty
  );

  useEffect(() => {
    Promise.all([
      axios.get(`/my_properties/${tempPM_Id}`),
      axios.get(`/properties/${tempPM_Id}/tickets`),
    ]).then((allValues) => {
      let propertiesData = allValues[0].data;
      let ticketsData = allValues[1].data;

      // Update local state with data from API.
      setState_PM_Tickets((prev) => ({
        ...prev,
        properties: propertiesData,
        tickets: ticketsData,
        ticketsOrganizedByProperty: constructTicketsData(
          propertiesData,
          ticketsData
        ),
      }));
    });
  }, []);

  return (
    <>
      <div className="topnav__tickets" style = {{width: '100%', zIndex: '200', position: 'absolute'}}>
        <Top_NavBar_PM_Tickets loggedInUserEmail={props.loggedInUserEmail} />
      </div>
      <div>
        <Side_NavBar_PM_Tickets
          selectProperty={selectProperty}
          properties={state_PM_Tickets.properties}
          selectedProperty= {state_PM_Tickets.selectedProperty}
        />
      </div>
      <div className="dashboard-interface">
        <>
          <Button variant="success">
            Total: {specificStats.totalUnsolved}
          </Button>{" "}
          <Button variant="warning">Pending: {specificStats.pending}</Button>{" "}
          <Button variant="danger">
            In-Progress: {specificStats.in_Progress}
          </Button>
        </>
        <h1 class="pending__tickets">
          <Badge style={{backgroundColor: '#3f444e'}} variant="secondary">Pending Tickets</Badge>
        </h1>

        <Ticket_List_PM_Pending
          ticketsPending={ticketsPending}
          selectedProperty={state_PM_Tickets.selectedProperty}
          assignEmployeeToTicket={assignEmployeeToTicket}
        />
        <h1>
          <Badge style={{backgroundColor: '#3f444e'}} variant="secondary">In-Progress</Badge>
        </h1>
        <Ticket_List_PM_In_Progress
          ticketsInProgress={ticketsInProgress}
          selectedProperty={state_PM_Tickets.selectedProperty}
          assignEmployeeToTicket={assignEmployeeToTicket}
        />
      </div>
    </>
  );
}
