import React, { useState, Component } from "react";
import { useEffect } from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import logo from "../MTrack_White.png";
import "./Top_Nav_Bar_Tenant.scss";

export default function Top_NavBar_Tenant(props) {
  const { loggedInUserEmail, setLogoutState } = props;
  console.log("****Top_Nav_Bar_Tenant -- props = ", props);

  const [inputsState, setInputsState] = useState({
    emailInput: "",
    passwordInput: "",
  });

  // const onLogoutSubmit = () => {
  //   return axios.get(`/logout`, {}).then((response) => {
  //     console.log("LOGOUT SUCCESSFUL?: ", response.data);

  //     console.log("LOGGED OUT!");
  //     setInputsState({
  //       ...inputsState,
  //       emailInput: "",
  //     });
  //   });
  // };

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
            Signed in as:{" "}
            <a className="navBar_name" href="#login">
              {loggedInUserEmail}
            </a>
          </Navbar.Text>
          <Button onClick={setLogoutState} variant="dark" type="submit">
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
