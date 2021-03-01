import React, { useState, Component } from "react";
import { useEffect } from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import logo from "../MTrack_White.png"
import "./Top_Nav_Bar_PM_Stats.scss";


export default function Top_NavBar_PM_Stats(props) {
  const history = useHistory();

  const goToTicketPage = function () {
    history.push("/dashboard-pm-tickets");
  };

  const { loggedInUserEmail } = props;
  console.log(
    "***From inside Top_NavBar_PM_Stats  -- props = ",
    loggedInUserEmail
  );
  return (
    <div classname="App">
      <Navbar className= "fixed-top" collapseOnSelect expand="lg" bg='dark' variant="dark">
      <Navbar.Brand href="/dashboard-employee">
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
        <Button className="button_navBar" onClick={goToTicketPage}>View Tickets</Button>
          <Navbar.Text>
            Signed in as: <a href="#login">{loggedInUserEmail}</a>
          </Navbar.Text>
          <Button className="logout_button" variant="dark">Logout</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
