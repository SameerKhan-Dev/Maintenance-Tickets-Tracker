import React, { useState, Component } from "react";
import { useEffect } from "react";
import "../Application.scss";
import axios from "axios";
import Employee_Interface from "./Employee_Interface";
import Side_NavBar_Emp from "./Side_NavBar_Emp";
import './Employee_Interface.scss';

export default function Employee_Dashboard(props) {

  const  employee_Id = 24;
  const [state_Employee, setState_Employee] = useState( 
    {  // selectedProperty = 0, means no property selected
      selectedTicket: 0,
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
 const selectProperty = function(property_id) {

    setState_Employee(prev => ({...prev,selectedTicket : 0, selectedProperty: property_id}));
    

 }

 const getSelectedPropertyName = function () {
  if(state_Employee.selectedProperty === 0){
    return "All Properties";
  } else {
    for (let property of state_Employee.properties) {
      if(property.id === state_Employee.selectedProperty){
        return property.address;
      }
    }
  }
 }

 let selectedPropertyAddress = getSelectedPropertyName();

 console.log("selectedProperty is: ", state_Employee.selectedProperty);
 /* selected property

    1) In my useEffect - i need to make an axios call to /employee_properites/:employee_id:
      - store resulting properties: inside state_Employee. properties.

    2) create a handler selectProperty and attach it to all drop-down menu option onClick
       - this changes the selectedProperty state inside state_Employee

    3) function that builds tickets based on - selectedProperty value inside

 */
 
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
  // for all properties
  if (state_Employee.selectedProperty === 0){
    for (let ticket of state_Employee.tickets) {
      if (ticket.ticket_status_id === 2){
        inProgressTickets.push(ticket);
        console.log(ticket);
      }
      console.log(ticket);
    }
  }
  // for all  
  else {
    for (let ticket of state_Employee.tickets) {
      if (ticket.ticket_status_id === 2 && ticket.property_id === state_Employee.selectedProperty){
        inProgressTickets.push(ticket);
        console.log(ticket);
      }
      console.log(ticket);
    }
  }

  return inProgressTickets;
 }
/*
const getEmployeeInProgressTickets = function () {

  let inProgressTickets = [];
  // for all properties
    for (let ticket of state_Employee.tickets) {
      if (ticket.ticket_status_id === 2){
        inProgressTickets.push(ticket);
        console.log(ticket);
      }
      console.log(ticket);
    }

  return inProgressTickets;
 }
 */
 let employeeInProgressTickets = getEmployeeInProgressTickets(); 
  console.log("employeeInProgressTickets is :" , employeeInProgressTickets);
  
  useEffect(() => {
    Promise.all([
      
      axios.get(`/tickets/employee/${employee_Id}`),
      axios.get(`/employeeProperties/${employee_Id}`)
    ]).then(
      (allValues) => {
        let ticketsData = allValues[0].data;
        let propertiesData = allValues[1].data;

        // Update local state with data from API.
        console.log("ticketsData is: ", ticketsData);
        setState_Employee((prev) => ({ ...prev, tickets: ticketsData, properties: propertiesData}));
      }
    );
  }, []);
console.log("Properties is: ", state_Employee.properties);
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
               selectProperty = {selectProperty}
               properties = {state_Employee.properties}
               selectedPropertyAddress = {selectedPropertyAddress}
               selectedProperty = {state_Employee.selectedProperty}
            />
        </div>
        <div className= "DivEmployee_Interface">
          <div className= "DivEmployee_Interface">
            <Employee_Interface 
            selectedTicketInfo = {selectedTicketInfo}
            selectedProperty = {state_Employee.selectedProperty}
            selectedTicket = {state_Employee.selectedTicket}
            tickets = {employeeInProgressTickets}
            properties = {state_Employee.properties}
            />
          </div>
        </div>
      </>
    );
}
