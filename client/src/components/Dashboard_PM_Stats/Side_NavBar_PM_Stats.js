import React, {useState, Component} from 'react';
import {useEffect} from 'react';

import "./Side_NavBar_PM_Stats.scss";
import "./map.scss";
//import Ticket_List_Item from  "./Ticket_List_Item"
//import Ticket_List from  "./Ticket_List"
import PropertyList from "./PropertyList";
import Map_SideBar from "./property_map";


export default function Side_NavBar_Emp(props) {

    return (
      <>
      <main className="layout">
        <head>
          <script src='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'></script>
          <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
        </head>
        <section className="sidebar">
          <img
            className="sidebar--centered"
            src="images/logo.png"
            alt="Interview Scheduler"
          />
          <hr className="sidebar__separator sidebar--centered" />                 
          <nav className="sidebar__menu">'
           { /*
            <DayList
              days = {state.days}
              day = {state.day}
              setDay = {setDay}
            />
            */
           }
           <PropertyList/>
          </nav>
          {/* <img
            className="sidebar__lhl sidebar--centered"
            src="images/lhl.png"
            alt="Lighthouse Labs"
          /> */}
          <div className='map'>
          {/* <link
            href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
            rel="stylesheet"
          /> */}
          <Map_SideBar/>

          </div>
        </section>
      </main>
      </>
    );
}
