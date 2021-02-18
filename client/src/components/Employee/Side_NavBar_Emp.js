import React, {useState, Component} from 'react';
import {useEffect} from 'react';
import AssignedTicketList from './AssignedTicketsList';

import "./Side_NavBar_Emp.scss";
//import Ticket_List_Item from  "./Ticket_List_Item"
//import Ticket_List from  "./Ticket_List"



export default function Side_NavBar_Emp(props) {

    return (
      <>
      <main className="layout">
        <section className="sidebar">
          <h1>Assigned</h1>
          <h1>Tickets</h1>
          <hr className="sidebar__separator sidebar--centered" />                 
          <nav className="sidebar__menu">
            <AssignedTicketList/>
          </nav>
          {/* <img
            className="sidebar__lhl sidebar--centered"
            src="images/lhl.png"
            alt="Lighthouse Labs"
          /> */}
        </section>
      </main>
      </>
    );
}
