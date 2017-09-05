// 
import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import CreateExplorer from 'txpn/components/explorer/CreateExplorer';

const Create = ({ match }) => {
  return (
    <div>
      <Route path={`${match.url}`}
             component={AboutCreate} />
      <Route path={`${match.url}/explorer`} 
             component={CreateExplorer} />
    </div>
  );
};
export default Create;

const AboutCreate = () => (
  <p>TODO: About create.</p>
);
