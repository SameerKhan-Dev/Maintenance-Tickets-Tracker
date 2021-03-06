import React, { useState, Component } from "react";
import { useEffect } from "react";

import "./Side_NavBar_PM_Tickets.scss";
import "./map_Tickets.scss";
//import Ticket_List_Item from  "./Ticket_List_Item"
//import Ticket_List from  "./Ticket_List"
import PropertyList from "./PropertyList_Tickets";
import Map_SideBar from "./property_map_Tickets";

export default function Side_NavBar_PM_Tickets(props) {
  const { selectProperty, properties, selectedProperty } = props;

  return (
    <>
      <main className="layout">
        <head>
          <script src="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js"></script>
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
            rel="stylesheet"
          />
        </head>
        <section className="sidebar">

          <hr className="sidebar__separator sidebar--centered" />
          <nav className="sidebar__menu">
        
            <PropertyList
              selectProperty={selectProperty}
              properties={properties}
              selectedProperty= {selectedProperty}
            />
          </nav>

          <div className="map">

            <Map_SideBar />
          </div>
        </section>
      </main>
    </>
  );
}
