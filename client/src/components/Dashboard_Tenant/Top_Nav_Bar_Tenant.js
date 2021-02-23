import React, { useState, Component } from "react";
import { useEffect } from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import logo from "../MTrack_White.png";

import "./Top_Nav_Bar_Tenant.scss";

// import "./map.scss";
// //import Ticket_List_Item from  "./Ticket_List_Item"
// //import Ticket_List from  "./Ticket_List"
// import PropertyList from "./PropertyList";
// import Map_SideBar from "./property_map";

export default function Top_NavBar_Tenant(props) {
  const { loggedInUserEmail } = props;
  console.log("****Top_Nav_Bar_Tenant -- props = ", props.loggedInUserEmail);
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
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{loggedInUserEmail}</a>
          </Navbar.Text>

          <Button variant="dark">Logout</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
