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

export default function Dashboard_PM_Stats(props) {

  // When user login is setup, extract user_id using cookies
  // temporarily we are going to use user_id as 1 (i.e pm_id for this page)
  const  tempPM_Id = 1;

  const [state_PM_Stats, setState_PM_Stats] = useState( 
    {  // selectedProperty = 0, means no property selected
      selectedProperty: 0,
      properties:properties2,
      allTickets: []
    }
  );
  
  // /properties/:property_id/tickets 

  useEffect(() => {

    Promise.all([
      axios.get(`/my_properties/${tempPM_Id}`)  
    ])
    .then ((allValues) => {

      let propertiesData = allValues[0].data;
      
      // Update local state with data from API.
      setState_PM_Stats(prev => ({...prev, properties: propertiesData}));
      
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
          <All_Property_Interface />
        </div>
        
      </>
    );
}