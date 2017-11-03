import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * This component is used to force a redirect if the
 * current route url does not match `childUrl`.
 */
export default function ForceRedirect({ toURL, fromPath }) {
  function Director({ match }) {
    if (match.url !== toURL) {
      return <Redirect to={toURL} push={true} />;
    } else {
      return null;
    }
  }
  const path = `${fromPath || '/'}*`;
  return <Route path={path} component={Director} />;
}
