import React, {useState, Component} from 'react';
import {useEffect} from 'react';
import "../Application.scss";

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

  const [state_PM_Stats, setState_PM_Stats] = useState( 
    {  // selectedProperty = 0, means no property selected
      selectedProperty: 0,
      properties:properties2,
      allTickets: []
    }
  ); 
    
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