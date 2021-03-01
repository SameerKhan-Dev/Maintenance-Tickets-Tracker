import React, { useState, Component } from "react";
import { useEffect } from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

import logo from "../MTrack_White.png";
import "./Top_NavBar_Emp.scss";

export default function Top_NavBar_Emp(props) {
  const { loggedInUserEmail } = props;
  console.log("****Top_Nav_Bar_Emp -- props = ", props.loggedInUserEmail);
  // const { setLogout } = props;

   /*  
      const onLogout = function (){
        // first reach out to back-end to clear the cookies.
        axios.get(/logout)
        .then (response){
          // set the state to default
          setLogout();
        }
        setLogout();
        history.push("/login");;
      }
  */

  return (
    <div classname="App">
      <Navbar className= "fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
          <Navbar.Text>
            Signed in as: <a href="#login">{loggedInUserEmail}</a>
          </Navbar.Text>

          <Button variant="dark">Logout</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
