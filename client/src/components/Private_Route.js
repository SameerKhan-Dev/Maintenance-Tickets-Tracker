import React from 'react';
import {Route, Redirect} from 'react-router-dom';
function PrivateRoute({ children, login, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return login ? (
          children
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          );
      }}
    />
  );
}
export default PrivateRoute;