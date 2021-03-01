import React, { useState, Component } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PrivateRoute from "./Private_Route";
import "components/Application.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Dashboard_PM_Stats from "./Dashboard_PM_Stats/Dashboard_PM_Stats";
import Dashboard_PM_Tickets from "./Dashboard_PM_Tickets/Dashboard_PM_Tickets";

import Employee_List_Item_PM from "./Dashboard_PM_Tickets/Employee_List_Item_PM";
import Employee_List_PM from "./Dashboard_PM_Tickets/Employee_List_PM";

import Dashboard_Tenant from "./Dashboard_Tenant/Dashboard_Tenant";
import Employee_Interface from "./Employee/Employee_Interface";
import Employee_Dashboard from "./Employee/Employee_Dashboard";
import Login from "./Login";

export default function Application(props) {
  const [loginUser, setLoginUser] = useState({
    loggedIn: false,
    userEmail: "",
    userRole: "",
  });

  // Once front-end cookies figure out, change default page for current page state based on if login or not
  const [currentPage, setCurrentPage] = useState({
    page: "/login",
  });

  console.log(
    "***From inside Application -- loginUser = ",
    loginUser["userEmail"]
  );
  // const logInUserEmail = loginUser["userEmail"];
  const pmEmail = "zahra_m@email.com";
  const empEmail = "sameer_k@email.com";
  const tenantEmail = "bee_l@email.com";

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Switch>
          {/* Create routes for every wire-frame page */}
          <Route path="/" exact>
            <h1> Hello from "/" Page</h1>
          </Route>

          <Route path="/dashboard-employee">
            <Employee_Dashboard loggedInUserEmail={empEmail} />
          </Route>

          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>

          <Route path="/register">
            <h1> Hello from "/register Page</h1>
          </Route>

          {/* <PrivateRoute path="/dashboard-pm-stats" login={loginUser.loggedIn}>
            <Dashboard_PM_Stats logInUserEmail={logInUserEmail} />
          </PrivateRoute> */}

          <Route path="/dashboard-pm-stats">
            <Dashboard_PM_Stats loggedInUserEmail={pmEmail} />
          </Route>

          {/* <PrivateRoute path="/dashboard-pm-stats" login={loginUser.loggedIn}>
            <Dashboard_PM_Stats />
          </PrivateRoute> */}

          <Route path="/dashboard-pm-tickets">
            <Dashboard_PM_Tickets loggedInUserEmail={pmEmail} />
          </Route>

          <Route path="/dashboard-tenant">
            <Dashboard_Tenant loggedInUserEmail={tenantEmail} />
          </Route>

          {/* <PrivateRoute path="/dashboard-tenant" login={loginUser.loggedIn}>
            <Dashboard_Tenant />
          </PrivateRoute> */}
          {/*  
              // specific property
            
            */}
          {/* </Route> */}
          <Route path="/tickets">
            <h1> Hello from "/tickets" Page</h1>
          </Route>
          <Route path="/logout">
            <h1> Hello from "/logout" Page</h1>
          </Route>
          <Route path="/test">
            {/* <h1> Hello from "/test" Page</h1> */}
            {/* <Employee_List_PM /> */}
            {/* <Ticket_List_PM /> */}

            <Employee_Interface />
            {/* <Dashboard_PM_Tickets /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
