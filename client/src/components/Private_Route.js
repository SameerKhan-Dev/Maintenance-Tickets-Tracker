import React from 'react';
import {Route, Redirect} from 'react-router-dom';
function PrivateRoute({ children, path, role_id, login, ...rest }) {

  let loginValue = login; 
  let pathToRedirectTo = "/login";

  //const {path, role_id} = props;
  // accessing employee page as an employee, set loginValue to true . i.e give them access to employee page.
  if (path === "/dashboard-employee" && (role_id === 3 || role_id === 4 || role_id === 5) && login){

    loginValue = true; 
  } 
  // a non-employee is logged_in, then dont give them access to employee page.
  else if (path === "/dashboard-employee" && login){
    loginValue = false;
    if(role_id === 1){

      pathToRedirectTo = "/dashboard-pm-stats";
    } else if (role_id === 2) {
      pathToRedirectTo = "/dashboard-tenant";
    }
  }

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route
      {...rest}
      render={({ location }) => {
        return loginValue ? (children) : (<Redirect to={{ pathname: pathToRedirectTo, state: { from: location } }} />);
      }}
    />
  );
}
export default PrivateRoute;