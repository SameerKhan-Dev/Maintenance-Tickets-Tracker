
import React, { useState, Component } from 'react';
import { useEffect } from 'react';
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';


import "./Top_Nav_Bar_PM_Tickets.scss";
// import "./map.scss";
// //import Ticket_List_Item from  "./Ticket_List_Item"
// //import Ticket_List from  "./Ticket_List"
// import PropertyList from "./PropertyList";
// import Map_SideBar from "./property_map";


export default function Top_NavBar_PM_Tickets(props) {

  const { loggedInUserEmail } = props;
  console.log("***From inside Top_NavBar_PM_Tickets  -- props = ", loggedInUserEmail);

  return (
    <div classname="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">M Tracker</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">{props.logInUserEmail}</a>
    </Navbar.Text>
    <Button variant="dark">Logout</Button>
  </Navbar.Collapse>
</Navbar>
    </div>

  )

  //   return (
  //     <div>
  //       <ul id="nav">
  //         <div classname='nav-front'>
  //           <li><a href="#">M Trackers</a></li>
  //         </div>
  //         <div classname='nav-end'>
  //           <li><a href="#">Logged in as [email]</a></li>
  //           <li><a href="#">Logout</a></li>
  //         </div>
  //       </ul>
  //     </div>
  // );
}


