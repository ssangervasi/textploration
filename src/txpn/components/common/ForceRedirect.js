// @flow
import React from 'react';
import type { ComponentType} from 'react/react';
import { Route, Redirect } from 'react-router-dom';
import type { Match } from 'react-router-dom';

/**
 * This component is used to force a redirect if the
 * current route url does not match `childUrl`.
 */
export default function ForceRedirect(
  { toURL, fromPath }:
  { toURL: string, fromPath?: string }
): ComponentType {
  function Director({ match }: { match: Match }) {
    if (match.url !== toURL) {
      return <Redirect to={toURL} />
    } else {
      return null;
    }
  };
  const path = `${fromPath || '/'}*`;
  return <Route path={path} component={Director} />;
}
