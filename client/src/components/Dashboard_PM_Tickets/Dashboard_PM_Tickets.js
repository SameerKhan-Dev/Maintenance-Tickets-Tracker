import React, {useState, Component} from 'react';
import {useEffect} from 'react';
import "../Application.scss";
import axios from "axios";
import Employee_List_PM from "./Employee_List_PM";
import Ticket_List_PM from "./Ticket_List_PM";
// import Side_NavBar_PM_Stats from "/Users/zahrahm/lighthouse/final-project/Maintenance-Tickets-Tracker/client/src/components/Dashboard_PM_Stats/Side_NavBar_PM_Stats.js";
import Side_NavBar_PM_Tickets from "./Side_NavBar_PM_Tickets"
import Top_NavBar_PM_Tickets from "./Top_Nav_Bar_PM_Tickets";


export default function Dashboard_PM_Tickets(props) {

  // When user login is setup, extract user_id using cookies
  // temporarily we are going to use user_id as 1 (i.e pm_id for this page)
  const  tempPM_Id = 1;
  const [state_PM_Tickets, setState_PM_Tickets] = useState( 
    {  // selectedProperty = 0, means no property selected
      selectedProperty: 0,
      properties:[],
      tickets: [],
      ticketsOrganizedByProperty : [],
      specificStats: {
        totalUnsolved: 0,
        pending: 0,
        in_Progress: 0
      }
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

    setState_PM_Tickets({...state_PM_Tickets, selectedProperty: property_id, specificStats: obtainStats(state_PM_Tickets.ticketsOrganizedByProperty, property_id)});
    
  }

  console.log("Current selected property is: ", state_PM_Tickets.selectedProperty);
  
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
        <div>
          <Employee_List_PM />
          <Ticket_List_PM
            ticketsOrganizedByProperty= {setState_PM_Tickets.ticketsOrganizedByProperty}
            selectedProperty= {setState_PM_Tickets.selectedProperty}
          />
        </div>
        <div>
        <Top_NavBar_PM_Tickets/>
      </div>
      </>
    );
}
