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
  // somehow use cookies, to set values of the loggedIn user state.
  // that function will check cookies data and set the state of login based on the cookies data
  // On back-end have a route handler that gets the logged-in user info.
  // -- it takes an empty axios call that has cookies in its header to the back-end
  // on the back-end we check if the cookies are present and extract those cookie values to get userInfo
  //  return an object that is either with userInfo (who is logged in), or its an empty object.

  // Once front-end cookies figure out, change default page for current page state based on if login or not
  const [currentPage, setCurrentPage] = useState({
    page: "/login",
  });

  console.log(
    "***From inside Application -- loginUser[userEmail] = ",
    loginUser["userEmail"]
  );

  console.log(
    "***From inside Application -- loginUser[loggedIn] =",
    loginUser["loggedIn"]
  );

  console.log(
    "***From inside Application -- loginUser[userRole] =",
    loginUser["userRole"]
  );

  // const logInUserEmail = loginUser["userEmail"];
  const pmEmail = "zahra_m@email.com";
  const empEmail = "sameer_k@email.com";
  const tenantEmail = "bee_l@email.com";

  /*

      useEffect( => {

        // make a call to the back-end to check if cookies are present on browser and send back user info
        //  data = {
            isCookieSet = true or false;
            userInfo = {
                // user Details.

            }

        }
        //
        //
        axios.get("/validateUser")
        .then(response){
          if (response.data.isCookieSet === true){
              // if cookies are set, then update local state with userInfo and set loggedIn = true;
            useState(user => , 
              // set the state to be the userInfo
              // login = true
              // userEmail = .. userInfo.email
              // user_role =.. userInfo.role_id;
              
              )
          } else (i.isCookieSet is false){

            // dont do anything, meaning the state is default is empty i.e login is false in the state, and userInfo is empty.
          }
        }


      }, [0]);

  */

  /*  
      const setLogout(){
        setState (empty user_info)
      }
  */

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Switch>
          <Route path="/" exact>
            <h1> Hello from "/" Page</h1>
          </Route>

          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>

          <Route path="/register">
            <h1> Hello from "/register Page</h1>
          </Route>

          <PrivateRoute
            path="/dashboard-pm-stats"
            role_id={loginUser.userRole}
            login={loginUser.loggedIn}
          >
            <Dashboard_PM_Stats logInUserEmail={loginUser.userEmail} />
          </PrivateRoute>

          <PrivateRoute
            path="/dashboard-pm-tickets"
            role_id={loginUser.userRole}
            login={loginUser.loggedIn}
          >
            <Dashboard_PM_Tickets loggedInUserEmail={loginUser.userEmail} />
          </PrivateRoute>

          <PrivateRoute
            path="/dashboard-employee"
            role_id={loginUser.userRole}
            login={loginUser.loggedIn}
          >
            <Employee_Dashboard loggedInUserEmail={loginUser.userEmail} />
          </PrivateRoute>

          <PrivateRoute
            path="/dashboard-tenant"
            role_id={loginUser.userRole}
            login={loginUser.loggedIn}
          >
            <Dashboard_Tenant loggedInUserEmail={loginUser.userEmail} />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}
