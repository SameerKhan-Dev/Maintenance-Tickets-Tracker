import React, { useState, Component } from "react";
import { useEffect } from "react";
import "components/Application.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import All_Property_Interface from "./PM-PropertiesStats/All_Property_Interface";
import Individual_Property_Interface from "./PM-PropertiesStats/Individual_Property_Interface";

import Comparison_Chart from "./PM-PropertiesStats/Comparison_Chart";
import Pie_Chart from "./PM-PropertiesStats/Pie_Chart";
import Bar_Chart from "./PM-PropertiesStats/Bar_Chart";

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
          <Route path="/dashboard-pm">
            <h1> Hello from "/dashboard-pm" Page</h1>
            <All_Property_Interface />
            <Individual_Property_Interface />
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
