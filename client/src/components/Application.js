import React, { useState, Component } from "react";
import { useEffect } from "react";
import "components/Application.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import All_Property_Interface from "./Dashboard_PM_Stats/All_Property_Interface";
// import Individual_Property_Interface from "./Dashboard_PM_Stats/Individual_Property_Interface";
import Dashboard_PM_Stats from "./Dashboard_PM_Stats/Dashboard_PM_Stats";

import Employee_List_Item_PM from "./Dashboard_PM_Tickets/Employee_List_Item_PM";
import Employee_List_PM from "./Dashboard_PM_Tickets/Employee_List_PM";
import Ticket_List_PM from "./Dashboard_PM_Tickets/Ticket_List_PM";


import Employee_Dashboard from "./Employee/Employee_Dashboard";
const axios = require("axios");

export default function Application(props) {
  // LOGIC SHOULD BE HERE

  return (
    <Router>
      <main className="layout">
        <Switch>
          {/* Create routes for every wire-frame page */}
          <Route path="/" exact>
            <h1> Hello from "/" Page</h1>
          </Route>
          <Route path="/dashboard-employee">
            <Employee_Dashboard />
          </Route>
          <Route path="/login">
            <h1> Hello from "/login" Page</h1>
          </Route>
          <Route path="/register">
            <h1> Hello from "/register Page</h1>
          </Route>
          <Route path="/dashboard-pm-stats">
            {/* <h1> Hello from "/dashboard-pm-stats" Page</h1> */}
            <Dashboard_PM_Stats/>
          </Route>
          <Route path="/dashboard-pm-tickets">
            <h1> Hello from "/dashboard-pm-tickets" Page</h1>
          </Route>
          <Route path="/dashboard-tenant">
            <h1> Hello from "/dashboard-tenant" Page</h1>
          </Route>
          <Route path="/tickets">
            <h1> Hello from "/tickets" Page</h1>
          </Route>
          <Route path="/logout">
            <h1> Hello from "/logout" Page</h1>
          </Route>
          <Route path="/test">
            <h1> Hello from "/test" Page</h1>
            <Employee_List_PM />
            <Ticket_List_PM />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

//       <section className="sidebar">
// {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
// </section>

// <section className="schedule">
// {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
// {state}
// </section>

// const [state, setState] = useState("Empty");

// <section className="sidebar">
//   {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
// </section>

// useEffect(() => {
//   axios.get("/homepage")
//   .then(response => {
//     //console.log(response)
//     setState(response.data)
//   })
// },[]);
