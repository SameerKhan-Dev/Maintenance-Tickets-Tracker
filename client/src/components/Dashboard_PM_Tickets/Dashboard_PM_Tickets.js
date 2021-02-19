import React, {useState, Component} from 'react';
import {useEffect} from 'react';
import "../Application.scss";
import axios from "axios";
import Employee_List_PM from "./Employee_List_PM";
import Ticket_List_PM_Pending from "./Ticket_List_PM_Pending";
import Ticket_List_PM_In_Progress from "./Ticket_List_PM_In_Progress";
// import Side_NavBar_PM_Stats from "/Users/zahrahm/lighthouse/final-project/Maintenance-Tickets-Tracker/client/src/components/Dashboard_PM_Stats/Side_NavBar_PM_Stats.js";
import Side_NavBar_PM_Tickets from "./Side_NavBar_PM_Tickets"
import Top_NavBar_PM_Tickets from "./Top_Nav_Bar_PM_Tickets";
import "./Dashboard_PM_Tickets.scss";
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export default function Dashboard_PM_Tickets(props) {

  // When user login is setup, extract user_id using cookies
  // temporarily we are going to use user_id as 1 (i.e pm_id for this page)
  const  tempPM_Id = 3
  const [state_PM_Tickets, setState_PM_Tickets] = useState( 
    {  // selectedProperty = 0, means no property selected
      selectedProperty: 0,
      properties:[],
      tickets: [],
      ticketsOrganizedByProperty : [{}],
      specificStats: {
        totalUnsolved: 0,
        pending: 0,
        in_Progress: 0
      },
      ticketsPending: [],
      ticketsInProgress: []
    }
  );


  const constructTicketsData = function (propertiesArray, ticketsArray) {
    let ticketsOrganizedByProperty = []; // our result to be populated and sent out from this helper function.
    
    // construct the initial tickets data
    ticketsOrganizedByProperty.push({ 
      property_id: 0,
      ticketsArray: ticketsArray,
      statsForProperty: {
        totalUnsolved: 0,
        in_Progress: 0,
        pending: 0
      }
    });
    
    // loop through the properties array and build the following structure for each property
    for (let property of propertiesArray){

      ticketsOrganizedByProperty.push({
        property_id: property.id,
        ticketsArray: [],
        statsForProperty: {
          totalUnsolved: 0,
          in_Progress: 0,
          pending: 0
          
        }
      })

    }
    console.log("ticketsOrganizedByProperty is: ")
    console.log(ticketsOrganizedByProperty);
    
    // filter and store tickets for each property_id
    for (let property of ticketsOrganizedByProperty) {
    
      for(let ticket of ticketsArray) {
        if (ticket.property_id === property.property_id) {
          
          property.ticketsArray.push(ticket);

        }
      }
    }
    console.log("ticketsOrganizedByProperty is: ", state_PM_Tickets.ticketsOrganizedByProperty);
    // then filter and build stats for each property and add to the corresponding properties array - loop through tickets and 
    for (let property of ticketsOrganizedByProperty) {
      // loop through the property's ticketData to build the stats
      let totalUnsolved = 0;
      let pending = 0;
      let inProgress = 0;
      
      for (let ticket of property.ticketsArray){
        // pending is ticket_status_id 1
        if (ticket.ticket_status_id === 1){
          pending+=1;
          totalUnsolved +=1;
        } else if( ticket.ticket_status_id === 2){
          inProgress +=1;
          totalUnsolved +=1;
        }
      }
      property.statsForProperty.totalUnsolved = totalUnsolved;
      //allPropertiesUnsolved += totalUnsolved;

      property.statsForProperty.pending = pending;
      //allPropertiesPending += pending;

      property.statsForProperty.in_Progress = inProgress;
      //allPropertiesInProgress += inProgress;
    }
     return ticketsOrganizedByProperty;
  } 

  // const obtainStats for Specific Property:
  // input is all tickets and stats sorted by property
  // output is specific stats to display for property
  
  const obtainStats = function(ticketsOrganizedByProperty, selectedProperty){
    
    // loop through allPropertiesStats array and find property with id matching selectedProperty value.
    // extract the specific stats for the selected property and return that value.
    for (let property of ticketsOrganizedByProperty) {
      if(property.property_id ===selectedProperty) {

        return property.statsForProperty;
      }
    }
    
  }
  const selectProperty = function (property_id) {
    let pendingTicketsArray = [];
    let inProgressTicketsArray = [];

    for (let propertyObject of state_PM_Tickets.ticketsOrganizedByProperty) {
      //console.log("propertyObject.ticketsArray is: ");
      //console.log(propertyObject.ticketsArray);
      
      if (propertyObject.property_id === property_id) {
        //console.log("propertyObject.ticketsArray is: ");
        //console.log(propertyObject.ticketsArray);
        
        for (let ticket of propertyObject.ticketsArray) {
          //console.log("ticket is: ", ticket);
          //console.log(ticket);
          if(ticket.ticket_status_id === 1){
            pendingTicketsArray.push(ticket);
          }
        }
      
        
      }
      
    // console.log("propertyObject is : ", propertyObject);

    }

    setState_PM_Tickets(prev => ({...prev, selectedProperty: property_id, specificStats: obtainStats(state_PM_Tickets.ticketsOrganizedByProperty, property_id), ticketsPending: pendingTicketsArray  , ticketsInProgress:inProgressTicketsArray}));
    
  }

  const setTicketsPending = function (){

    const ticketsPending = [];
    const property_id = state_PM_Tickets.selectedProperty;

    for (let propertyObject of state_PM_Tickets.ticketsOrganizedByProperty) {
      //console.log("propertyObject.ticketsArray is: ");
      //console.log(propertyObject.ticketsArray);
      
      if (propertyObject.property_id === property_id) {
        //console.log("propertyObject.ticketsArray is: ");
        //console.log(propertyObject.ticketsArray);
        
        for (let ticket of propertyObject.ticketsArray) {
          //console.log("ticket is: ", ticket);
          //console.log(ticket);
          if(ticket.ticket_status_id === 1){
            ticketsPending.push(ticket);
          }
        }
      
        
      }
      
    // console.log("propertyObject is : ", propertyObject);

    }
    return ticketsPending;

  }

  const setTicketsInProgress = function (){

    const ticketsInProgress = [];
    const property_id = state_PM_Tickets.selectedProperty;

    for (let propertyObject of state_PM_Tickets.ticketsOrganizedByProperty) {
      //console.log("propertyObject.ticketsArray is: ");
      //console.log(propertyObject.ticketsArray);
      
      if (propertyObject.property_id === property_id) {
        //console.log("propertyObject.ticketsArray is: ");
        //console.log(propertyObject.ticketsArray);
        
        for (let ticket of propertyObject.ticketsArray) {
          //console.log("ticket is: ", ticket);
          //console.log(ticket);
          if(ticket.ticket_status_id === 2){
            ticketsInProgress.push(ticket);
          }
        }
      
        
      }
      
    // console.log("propertyObject is : ", propertyObject);

    }
    return ticketsInProgress;

  }





  const ticketsPending = setTicketsPending();
  const ticketsInProgress = setTicketsInProgress();
  console.log("Current selected property is: ", state_PM_Tickets.selectedProperty);
  console.log("Current ticketsOrganizedByProperty is: ", state_PM_Tickets.ticketsOrganizedByProperty);
  console.log("Pending Tickets are: ", state_PM_Tickets.ticketsPending);

  useEffect(() => {

    Promise.all([
      axios.get(`/my_properties/${tempPM_Id}`),
      axios.get(`/properties/${tempPM_Id}/tickets`)
    ])
    .then ((allValues) => {

      let propertiesData = allValues[0].data; 
      let ticketsData = allValues[1].data;
      
      // Update local state with data from API.
      
      setState_PM_Tickets(prev => ({...prev, properties: propertiesData, tickets: ticketsData, ticketsOrganizedByProperty: constructTicketsData(propertiesData, ticketsData)}));
      setState_PM_Tickets(prev => ({...prev, specificStats: obtainStats(prev.ticketsOrganizedByProperty, prev.selectedProperty)}));
      
      // need to sort our tickets data into a structure like above using a helper function
      //constructTicketsData(propertiesData, ticketsData);
      //ticketsPending= setTicketsPending();
    });

  },[]);

    return (
        <> 
        <div>
          <Side_NavBar_PM_Tickets
            selectProperty = {selectProperty}
            properties= {state_PM_Tickets.properties}
          />
        </div>
        <div className= "dashboard-interface">
          <Top_NavBar_PM_Tickets/>
          <>
            <Button variant="success">In-Progress: {state_PM_Tickets.specificStats.totalUnsolved}</Button>{' '}
            <Button variant="warning">Pending: {state_PM_Tickets.specificStats.pending}</Button>{' '}
            <Button variant="danger">Total: {state_PM_Tickets.specificStats.in_Progress}</Button>
          </>
          <h1>     
            <Badge variant="secondary">Pending Tickets</Badge>
          </h1>
          <Ticket_List_PM_Pending
            ticketsPending= {ticketsPending}
            selectedProperty= {state_PM_Tickets.selectedProperty}
          />
          <h1>     
            <Badge variant="secondary">In-Progress</Badge>
          </h1>
          <Ticket_List_PM_In_Progress
              ticketsInProgress = {ticketsInProgress}
              selectedProperty= {state_PM_Tickets.selectedProperty}
          />
        </div>
      </>
    );
}
