import React, { useState, Component } from "react";
import { useEffect } from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

import "./Top_Nav_Bar_Emp.scss";

// import "./map.scss";

export default function Top_NavBar_Emp(props) {
  const { loggedInUserEmail } = props;
  console.log("****Top_Nav_Bar_Emp -- props = ", props.loggedInUserEmail);
  return (
    <div classname="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        {/* <Navbar.Brand href="#home">M Tracker</Navbar.Brand> */}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{loggedInUserEmail}</a>
          </Navbar.Text>

          <Button variant="light">Logout</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
