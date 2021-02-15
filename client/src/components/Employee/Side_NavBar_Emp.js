import React, {useState, Component} from 'react';
import {useEffect} from 'react';

import "./Side_NavBar_Emp.scss";
//import Ticket_List_Item from  "./Ticket_List_Item"
//import Ticket_List from  "./Ticket_List"



export default function Side_NavBar_Emp(props) {

    return (
      <>
      <main className="layout">
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
          </nav>
          <img
            className="sidebar__lhl sidebar--centered"
            src="images/lhl.png"
            alt="Lighthouse Labs"
          />
        </section>
      </main>
      </>
    );
}
