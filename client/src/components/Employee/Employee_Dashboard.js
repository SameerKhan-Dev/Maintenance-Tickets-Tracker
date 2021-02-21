import React, { useState, Component } from "react";
import { useEffect } from "react";
import "../Application.scss";
import axios from "axios";
import Employee_Interface from "./Employee_Interface";
import Side_NavBar_Emp from "./Side_NavBar_Emp";
import './Employee_Interface.scss';

export default function Employee_Dashboard(props) {

  const  employee_Id = 14;
  const [state_Employee, setState_Employee] = useState( 
    {  // selectedProperty = 0, means no property selected
      selectedTicket: 9,
      selectedProperty: 0,
      properties: [],
      tickets: [],
      specificStats: {
        totalUnsolved: 0,
        pending: 0,
        in_Progress: 0
      }
    }
  );
 
 const selectTicket = function(ticket_id) {
  
        setState_Employee(prev => ({...prev, selectedTicket: ticket_id}));
 }
 
 const specificTicket = function() {

  for (let ticket of state_Employee.tickets){
    if(ticket.id === state_Employee.selectedTicket) {
      return ticket;
    }
  }
 }
 let selectedTicketInfo = specificTicket();
 console.log("selectedTicketInfo is: ", selectedTicketInfo);

 console.log("state_Employee.tickets is: ", state_Employee.tickets);
 const getEmployeeInProgressTickets = function () {
  let inProgressTickets = [];
  for (let ticket of state_Employee.tickets) {
    if (ticket.ticket_status_id === 2){
      inProgressTickets.push(ticket);
      console.log(ticket);
    }
    console.log(ticket);
  }
  return inProgressTickets;
 }
 let employeeInProgressTickets = getEmployeeInProgressTickets(); 
  console.log("employeeInProgressTickets is :" , employeeInProgressTickets);
  
  useEffect(() => {
    Promise.all([axios.get(`/tickets/employee/${employee_Id}`)]).then(
      (allValues) => {
        let ticketsData = allValues[0].data;

        // Update local state with data from API.
        console.log("ticketsData is: ", ticketsData);
        setState_Employee((prev) => ({ ...prev, tickets: ticketsData }));
      }
    );
  }, []);
  /*
  app.get("/tickets/employee/:employee_id", (req, res) => {
    const employee_id = req.params.employee_id;
  
    getAllTicketsByEmployee_Id(employee_id).then((response) => {
      res.send(response);
    });
  });
*/
console.log("selectedTicket is: ", state_Employee.selectedTicket);
    return (
      <>
        <div>
            <Side_NavBar_Emp 
               employeeInProgressTickets = {employeeInProgressTickets}
               selectTicket = {selectTicket}
            />
        </div>
        <div className= "DivEmployee_Interface">
          <div className= "DivEmployee_Interface">
            <Employee_Interface 
            selectedTicketInfo = {selectedTicketInfo}
            />
          </div>
        </div>
      </>
    );
}
