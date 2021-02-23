import React, { useState, Component } from "react";
import { useEffect } from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import logo from "../MTrack_White.png"

import "./Top_Nav_Bar_PM_Tickets.scss";
// import "./map.scss";
// //import Ticket_List_Item from  "./Ticket_List_Item"
// //import Ticket_List from  "./Ticket_List"
// import PropertyList from "./PropertyList";
// import Map_SideBar from "./property_map";

export default function Top_NavBar_PM_Tickets(props) {
  const history = useHistory();

  const goToStatsPage = function () {
    history.push("/dashboard-pm-stats");
  };

  const { loggedInUserEmail } = props;
  console.log(
    "***From inside Top_NavBar_PM_Tickets  -- props = ",
    loggedInUserEmail
  );

  return (
    <div classname="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/dashboard-pm-stats">
      <img
        alt=""
        src={logo}
        width="220"
        height="40"
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
  <Button variant="dark" onClick={goToStatsPage}>View Statistic Summary</Button>
  <Navbar.Text>       </Navbar.Text>
    <Navbar.Text>
    Signed in as: <a href="#login">{loggedInUserEmail}</a>
    </Navbar.Text>
    <Button variant="dark">Logout</Button>
  </Navbar.Collapse>
</Navbar>
    </div>
  );

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
