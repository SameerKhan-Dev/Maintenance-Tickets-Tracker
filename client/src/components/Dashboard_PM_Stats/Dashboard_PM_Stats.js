import React, { useState, Component } from "react";
import { useEffect } from "react";
import "../Application.scss";
import axios from "axios";
import All_Property_Interface from "./All_Property_Interface";
import Side_NavBar_PM_Stats from "./Side_NavBar_PM_Stats";
import Individual_Property_Interface from "./Individual_Property_Interface";
import Top_NavBar_PM_Stats from "./Top_Nav_Bar_PM_Stats";
import "./Dashboard_PM_Stats.scss";

export default function Dashboard_PM_Stats(props) {
  //console.log("****Inside Dashboard_PM_Stats -- props = ", props);
  const { setLogoutState } = props;

  // When user login is setup, extract user_id using cookies
  // temporarily we are going to use user_id as 1 (i.e pm_id for this page)
  const tempPM_Id = 3;
  const [state_PM_Stats, setState_PM_Stats] = useState({
    // selectedProperty = 0, means no property selected
    selectedProperty: 0,
    properties: [],
    tickets: [],
    ticketsOrganizedByProperty: [],
    specificStats: {
      totalUnsolved: 0,
      pending: 0,
      in_Progress: 0,
    },
  });

  // this function filters through all tickets and returns the tickets for current selected city.
  let ticketsForSelectedProperty = [];
  for (const propertyObject of state_PM_Stats.ticketsOrganizedByProperty) {
    if (propertyObject.property_id === state_PM_Stats.selectedProperty) {
      ticketsForSelectedProperty = propertyObject.ticketsArray;
    }
  }
  console.log("*** ticketsForSelectedProperty: ", ticketsForSelectedProperty);

  // this function obtains the address for a selected property
  let addressForSelectedProperty = "";
  for (const propertyObject of state_PM_Stats.properties) {
    if (propertyObject.id === state_PM_Stats.selectedProperty) {
      addressForSelectedProperty = propertyObject.address;
    }
  }
  console.log("***addressForSelectedProperty = ", addressForSelectedProperty);

  // this function constructs an array holding all properties and their tickets.
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
    console.log("ticketsOrganizedByProperty is: ");
    console.log(ticketsOrganizedByProperty);

    // filter and store tickets for each property_id
    for (let property of ticketsOrganizedByProperty) {
      for (let ticket of ticketsArray) {
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
      //allPropertiesUnsolved += totalUnsolved;

      property.statsForProperty.pending = pending;
      //allPropertiesPending += pending;

      property.statsForProperty.in_Progress = inProgress;
      //allPropertiesInProgress += inProgress;
    }
    return ticketsOrganizedByProperty;
  };

  console.log("ticketsOrganizedByProperty is: ");
  console.log(state_PM_Stats.ticketsOrganizedByProperty);

  // this function returns stats for current selected property
  const obtainStats = function (ticketsOrganizedByProperty, selectedProperty) {
    // loop through allPropertiesStats array and find property with id matching selectedProperty value.
    // extract the specific stats for the selected property and return that value.
    for (let property of ticketsOrganizedByProperty) {
      if (property.property_id === selectedProperty) {
        return property.statsForProperty;
      }
    }
  };

  // this helper function updates the property state, when a specific property is selected
  const selectProperty = function (property_id) {
    setState_PM_Stats({
      ...state_PM_Stats,
      selectedProperty: property_id,
      specificStats: obtainStats(
        state_PM_Stats.ticketsOrganizedByProperty,
        property_id
      ),
    });
  };
  console.log("Selected Property is: ", state_PM_Stats.selectedProperty);

  useEffect(() => {
    Promise.all([
      axios.get(`/my_properties/${tempPM_Id}`),
      axios.get(`/properties/${tempPM_Id}/tickets`),
    ]).then((allValues) => {
      let propertiesData = allValues[0].data;
      let ticketsData = allValues[1].data;

      // Update local state with data from API.
      setState_PM_Stats((prev) => ({
        ...prev,
        properties: propertiesData,
        tickets: ticketsData,
        ticketsOrganizedByProperty: constructTicketsData(
          propertiesData,
          ticketsData
        ),
      }));
      setState_PM_Stats((prev) => ({
        ...prev,
        specificStats: obtainStats(
          prev.ticketsOrganizedByProperty,
          prev.selectedProperty
        ),
      }));
    });
  }, []);

  return (
    <>
      <div style={{ width: "100%", zIndex: "200", position: "absolute" }}>
        <Top_NavBar_PM_Stats
          loggedInUserEmail={props.loggedInUserEmail}
          setLogoutState={setLogoutState}
        />
      </div>
      <section className="content">
        <div className="side__navbar">
          <Side_NavBar_PM_Stats
            selectProperty={selectProperty}
            properties={state_PM_Stats.properties}
            selectedProperty={state_PM_Stats.selectedProperty}
          />
        </div>
        <div className="dashboard-interface">
          {state_PM_Stats.selectedProperty === 0 ? (
            <All_Property_Interface
              specificStats={state_PM_Stats.specificStats}
              ticketsOrganizedByProperty={
                state_PM_Stats.ticketsOrganizedByProperty
              }
              properties={state_PM_Stats.properties}
              tickets={state_PM_Stats.tickets}
            />
          ) : (
            <Individual_Property_Interface
              properties={state_PM_Stats.properties}
              selectedProperty={state_PM_Stats.selectedProperty}
              specificStats={state_PM_Stats.specificStats}
              ticketsForSelectedProperty={ticketsForSelectedProperty}
              addressForSelectedProperty={addressForSelectedProperty}
            />
          )}
        </div>
      </section>
    </>
  );
}
