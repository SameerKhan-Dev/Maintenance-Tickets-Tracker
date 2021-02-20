
import React, { useState, Component } from 'react';
import { useEffect } from 'react';
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';


import "./Top_Nav_Bar_Tenant.scss";

// import "./map.scss";
// //import Ticket_List_Item from  "./Ticket_List_Item"
// //import Ticket_List from  "./Ticket_List"
// import PropertyList from "./PropertyList";
// import Map_SideBar from "./property_map";


export default function Top_NavBar_Tenant(props) {
  return (
    <div classname="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  {/* <Navbar.Brand href="#home">M Tracker</Navbar.Brand> */}
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">User Name/Email </a>
    </Navbar.Text>

    <Button variant="light">Logout</Button>
  </Navbar.Collapse>
</Navbar>
    </div>

  )
}


