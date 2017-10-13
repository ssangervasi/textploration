import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import auth from 'txpn/runtime/auth';

export default function LoginRequiredRoute({
  component: Component,
  ...routeProps
}) {
  console.log('LoginRequiredRoute');
  return (
    <Route
      {...routeProps}
      render={props => {
        console.log('LoginRequiredRoute => Route');
        console.log('isLoggedIn', auth.isLoggedIn());
        if (auth.isLoggedIn()) {
          return <Component {...props} />;
        }
        const to = {
          pathname: '/login',
          state: { fromLocation: props.location },
        };
        return <Redirect to={to} />;
      }}
    />
  );
}
