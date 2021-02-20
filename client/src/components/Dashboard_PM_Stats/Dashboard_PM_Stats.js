import React, {useState, Component} from 'react';
import {useEffect} from 'react';
import "../Application.scss";
import axios from "axios";
import All_Property_Interface from "./All_Property_Interface";
import Side_NavBar_PM_Stats from "./Side_NavBar_PM_Stats";
import Individual_Property_Interface from './Individual_Property_Interface';

import Top_NavBar_PM_Stats from "./Top_Nav_Bar_PM_Stats";

import "./Dashboard_PM_Stats.scss";

// all tickets 
// all properties
// tickets for specific properties
// all employees

export default function Dashboard_PM_Stats(props) {

  console.log("****Inside Dashboard_PM_Stats -- props = ", props);
  
  // When user login is setup, extract user_id using cookies
  // temporarily we are going to use user_id as 1 (i.e pm_id for this page)
  const  tempPM_Id = 3;
  const [state_PM_Stats, setState_PM_Stats] = useState( 
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

let ticketsForSelectedProperty = [];
for (const propertyObject of state_PM_Stats.ticketsOrganizedByProperty) {
  if (propertyObject.property_id === state_PM_Stats.selectedProperty) {
    ticketsForSelectedProperty = propertyObject.ticketsArray;
  }
}


  // General pointers to remember
  // 1) Our axios call to backend allows us to obtain all tickets for all properties...
  // 2) We already have access to our all properties array through the useEffect below
  // 3) Our display of tickets to show/ stats data to compute relies on the selectedProperty.  

  // our helper functions
  // helper function will do the following: 
  // a) take in all properties array as an input
  // b) use UseEffect to make axios call for each property, to obtain tickets array for each property
  // c) Its going to construct an output for each property as object that has two keys: property_id , and ticketsArray. 
  
  const constructTicketsData = function (propertiesArray, ticketsArray) {
    let ticketsOrganizedByProperty = []; // our result to be populated and sent out from this helper function.
    console.log("propertiesArray is: ", propertiesArray);
    console.log("ticketsArray is: ", ticketsArray); 
    
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
  console.log("ticketsOrganizedByProperty is: ")
  console.log(state_PM_Stats.ticketsOrganizedByProperty);

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

    setState_PM_Stats({...state_PM_Stats, selectedProperty: property_id, specificStats: obtainStats(state_PM_Stats.ticketsOrganizedByProperty, property_id)});
    
  }
console.log("Selected Property is: ", state_PM_Stats.selectedProperty);


  useEffect(() => {

    Promise.all([
      axios.get(`/my_properties/${tempPM_Id}`),
      axios.get(`/properties/${tempPM_Id}/tickets`)
    ])
    .then ((allValues) => {

      let propertiesData = allValues[0].data; 
      let ticketsData = allValues[1].data;
      
      // Update local state with data from API.
      
      setState_PM_Stats(prev => ({...prev, properties: propertiesData, tickets: ticketsData, ticketsOrganizedByProperty: constructTicketsData(propertiesData, ticketsData)}));
      setState_PM_Stats(prev => ({...prev, specificStats: obtainStats(prev.ticketsOrganizedByProperty, prev.selectedProperty)}));
    
      // need to sort our tickets data into a structure like above using a helper function
      //constructTicketsData(propertiesData, ticketsData);
      
    });

  },[]);
  
    
 

    //console.log("The current state of specificStats is: ", state_PM_Stats.specificStats);
   
    return (
      <>
        <div>
          <Side_NavBar_PM_Stats
            selectProperty = {selectProperty}
            properties= {state_PM_Stats.properties}
          />
        </div>
        <div className="dashboard-interface">
          {/* Render All_Property_Interface if selectedProperty = 0. else Render InvidualPropertyInterface if selectedProperty != 0 (i,e
            i.e a specific property has been selected)*/}
                <Top_NavBar_PM_Stats
                  loggedInUserEmail={props.logInUserEmail}
                />
                 { state_PM_Stats.selectedProperty === 0 ?
                <All_Property_Interface specificStats = {state_PM_Stats.specificStats} ticketsOrganizedByProperty = {state_PM_Stats.ticketsOrganizedByProperty} properties = {state_PM_Stats.properties}/> : <Individual_Property_Interface  specificStats = {state_PM_Stats.specificStats} ticketsForSelectedProperty = {ticketsForSelectedProperty}/>}     
          
        </div>

      </>
    );
}