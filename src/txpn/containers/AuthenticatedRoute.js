import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import auth from 'txpn/runtime/auth';

export default function AuthenticatedRoute({
  component: Component,
  redirectTo = '/login',
  ...routeProps
}) {
  return (
    <Route
      {...routeProps}
      render={props => {
        if (auth.isAuthenticated) {
          return <Component {...props} />;
        }
        const to = {
          pathname: redirectTo,
          state: { fromLocation: props.location },
        };
        return <Redirect to={to} />;
      }}
    />
  );
}
