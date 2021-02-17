import React, {useState, Component} from 'react';
import {useEffect} from 'react';
import "../Application.scss";
import axios from "axios";
import All_Property_Interface from "./All_Property_Interface";
import Side_NavBar_PM_Stats from "./Side_NavBar_PM_Stats";

// all tickets 
// all properties
// tickets for specific properties
// all employees
let properties2 = [
  {name: "property #1", property_id:1, address: 'address #1'},
  {name: "property #2", property_id:2, address: 'address #2'},
  {name: "property #3", property_id:3, address: 'address #3'},
  {name: "property #4", property_id:4, address: 'address #4'},
]
/*
property_id | ticketsArray |
 => [ tickets, each one has a property_id]
 [  
   {ticket1:
    property_id:
    }
   {
    ticket2:
    property_id:
   }


 ]

const allPropertiesStats = [
  {
    property_id : 0,
    ticketsArray: [{ticket1}, {ticket2}...]
    statsForProperty : {
      unresolved: 
      in-progress:
      total-tickets:
    }
  },
  { 
    property_id : property_id,
    ticketsArray: [ {ticket1}, {tickets2}]
    statsForProperty: {



    }
  },
  { 
    property_id : property_id,
    ticketsArray: [ ticket1]
  }
]
*/
/*
const allTickets = [
  { 
    property_id: 0,
    ticketsArray: []
  }
]
*/

export default function Dashboard_PM_Stats(props) {

  // When user login is setup, extract user_id using cookies
  // temporarily we are going to use user_id as 1 (i.e pm_id for this page)
  const  tempPM_Id = 3;
  const [state_PM_Stats, setState_PM_Stats] = useState( 
    {  // selectedProperty = 0, means no property selected
      selectedProperty: 0,
      properties:properties2,
      tickets: []
      //dashboardNumbers = []
    }
  );
 

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
    
    // construct the initial tickets data
  
    ticketsOrganizedByProperty.push({ 
      property_id: 0,
      ticketsArray: ticketsArray,
      statsForProperty: {



      }
    });
    
    // loop through the properties array and build the following structure for each property
    for (let property of propertiesArray){

      ticketsOrganizedByProperty.push({
        property_id: property.id,
        ticketsArray: [],
        statsForProperty: {

        }
      })

    }
    console.log("ticketsOrganizedByProperty is: ")
    console.log(ticketsOrganizedByProperty);
    // filter and store tickets for each property_id

    // then filter and build stats for each property and add to the corresponding properties array - loop through tickets and 
    
     
  } 

  // const obtainStats for Specific Property:
  // input is all tickets and stats sorted by property
  // output is specific stats to display for property
  const obtainStats = function(allPropertiesStats, selectedProperty){
    
    // loop through allPropertiesStats array and find property with id matching selectedProperty value.
    // extract the specific stats for the selected property and return that value.




  }

  //let specificPropertyStats = obtainStats( allPropertiesStats,state_PM_Stats.selectedProperty);


    
  
  
  // /properties/:property_id/tickets 

  useEffect(() => {

    Promise.all([
      axios.get(`/my_properties/${tempPM_Id}`),
      axios.get(`/properties/${tempPM_Id}/tickets`)
    ])
    .then ((allValues) => {

      let propertiesData = allValues[0].data; 
      let ticketsData = allValues[1].data;
      
      // Update local state with data from API.
      setState_PM_Stats(prev => ({...prev, properties: propertiesData, tickets: ticketsData}));
      
      // need to sort our tickets data into a structure like above using a helper function
      constructTicketsData(propertiesData, ticketsData);
    });

  },[]);

    
  const selectProperty = function (property_id) {

    setState_PM_Stats({...state_PM_Stats, selectedProperty: property_id});
    
  }

    console.log("The current state of selectedProperty is: ", state_PM_Stats.selectedProperty);

    return (
      <>
        <div>
          <Side_NavBar_PM_Stats
            selectProperty = {selectProperty}
            properties= {state_PM_Stats.properties}
          />
        </div>
        <div>
          <All_Property_Interface 
            //specificPropertyStats= {specificPropertyStats}
          />
        </div>
        
      </>
    );
}