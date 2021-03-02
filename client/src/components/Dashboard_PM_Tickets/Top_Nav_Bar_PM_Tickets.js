import React, { useState, Component } from "react";
import { useEffect } from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import logo from "../MTrack_White.png";
import "./Top_Nav_Bar_PM_Tickets.scss";

export default function Top_NavBar_PM_Tickets(props) {
  const history = useHistory();

  const goToStatsPage = function () {
    history.push("/dashboard-pm-stats");
  };
  const goToEmployeePage = function () {
    history.push("/dashboard-employee");
  };

  const { loggedInUserEmail, setLogoutState } = props;
  console.log(
    "***From inside Top_NavBar_PM_Tickets  -- props = ",
    loggedInUserEmail
  );

  return (
    <div classname="App">
      <Navbar
        className="fixed-top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/dashboard-employee">
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
          <Button
            className="button_navBar"
            variant="dark"
            onClick={goToEmployeePage}
          >
            View Stats
          </Button>
          <Navbar.Text> </Navbar.Text>
          <Navbar.Text>
            Signed in as: <a href="#login">{loggedInUserEmail}</a>
          </Navbar.Text>
          <Button
            onClick={setLogoutState}
            className="logout_button"
            variant="dark"
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
