import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, path, role_id, login, ...rest }) {
  let loginValue = login;
  let pathToRedirectTo = "/login";

  // accessing employee page as an employee, set loginValue to true . i.e give them access to employee page.
  if (
    path === "/dashboard-employee" &&
    (role_id === 3 || role_id === 4 || role_id === 5) &&
    login
  ) {
    loginValue = true;
  }
  // a non-employee is logged_in, then don't give them access to employee page.
  else if (path === "/dashboard-employee" && login) {
    loginValue = false;
    if (role_id === 1) {
      pathToRedirectTo = "/dashboard-pm-stats";
    } else if (role_id === 2) {
      pathToRedirectTo = "/dashboard-tenant";
    }
  }

  // accessing tenant page as a tenant, set loginValue to true.
  if (path === "/dashboard-tenant" && role_id === 2 && login) {
    loginValue = true;
  }
  // a non tenant is logged in, then don't give them access to tenant page.
  else if (path === "/dashboard-tenant" && login) {
    loginValue = false;
    if (role_id === 1) {
      pathToRedirectTo = "/dashboard-pm-stats";
    } else if (role_id === 3 || role_id === 4 || role_id === 5) {
      pathToRedirectTo = "/dashboard-employee";
    }
  }

  // accessing PM page as a PM, set loginValue to true.
  if (
    (path === "/dashboard-pm-stats" || path === "dashboard-pm-tickets") &&
    role_id === 1 &&
    login
  ) {
    loginValue = true;
  }
  // a non PM is logged in, then don't give them access to PM page.
  else if (
    (path === "/dashboard-pm-stats" || path === "dashboard-pm-tickets") &&
    login
  ) {
    loginValue = false;
    if (role_id === 2) {
      pathToRedirectTo = "/dashboard-tenant";
    } else if (role_id === 3 || role_id === 4 || role_id === 5) {
      pathToRedirectTo = "/dashboard-employee";
    }
  }

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route
      {...rest}
      render={({ location }) => {
        return loginValue ? (
          children
        ) : (
          <Redirect
            to={{ pathname: pathToRedirectTo, state: { from: location } }}
          />
        );
      }}
    />
  );
}
export default PrivateRoute;
