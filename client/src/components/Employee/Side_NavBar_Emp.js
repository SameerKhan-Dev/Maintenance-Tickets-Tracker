import React, {useState, Component} from 'react';
import {useEffect} from 'react';
import AssignedTicketList from './AssignedTicketList';
import Dropdown from 'react-bootstrap/Dropdown'
import "./Side_NavBar_Emp.scss";
//import Ticket_List_Item from  "./Ticket_List_Item"
//import Ticket_List from  "./Ticket_List"



export default function Side_NavBar_Emp(props) {

  const {employeeInProgressTickets, selectTicket, selectProperty, properties} = props;

    return (
      <>
      <main className="layout">
        <section className="sidebar">
          <h1>Assigned</h1>
          <h1>Tickets</h1>
          <hr className="sidebar__separator sidebar--centered" />                 
          <nav className="sidebar__menu">
          <div className= "dropDown">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                      All Properties
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  { properties.map(property =>(
                      <Dropdown.Item onClick={() =>selectProperty(property.id)}>{property.address}</Dropdown.Item>
                  ))}
                  </Dropdown.Menu>
            </Dropdown>
          </div>
            <AssignedTicketList
             selectTicket = {selectTicket}
             employeeInProgressTickets = {employeeInProgressTickets}
            />
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
