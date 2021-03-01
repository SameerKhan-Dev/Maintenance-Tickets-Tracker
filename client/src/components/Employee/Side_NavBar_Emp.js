import React, {useState, Component} from 'react';
import {useEffect} from 'react';
import AssignedTicketList from './AssignedTicketList';
import Dropdown from 'react-bootstrap/Dropdown'
import "./Side_NavBar_Emp.scss";

export default function Side_NavBar_Emp(props) {

  const {employeeInProgressTickets,selectedTicket, selectTicket, selectProperty, properties, selectedPropertyAddress, selectedProperty} = props;

    return (
      <>
      <main className="layout">
        <section className="sidebar">
          <hr className="sidebar__separator sidebar--centered" />                 
          <nav className="sidebar__menu">
          <div className= "dropDown">
            <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                      Selected Property:  {selectedPropertyAddress}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item onClick={() =>selectProperty(0)}>All Properties</Dropdown.Item>
                  { properties.map(property =>(
                      <Dropdown.Item onClick={() =>selectProperty(property.id)}>{property.address}</Dropdown.Item>
                  ))}
                  </Dropdown.Menu>
            </Dropdown>
          </div>
            <AssignedTicketList
             selectTicket = {selectTicket}
             employeeInProgressTickets = {employeeInProgressTickets}
             selectedProperty = {selectedProperty}
             selectedTicket = {selectedTicket}
            />
          </nav>
        </section>
      </main>
      </>
    );
}
