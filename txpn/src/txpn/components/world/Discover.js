// @flow
import React, { Component } from 'react';
import {
  Route,
  Link,
} from 'react-router-dom'

import WorldList from 'txpn/components/world/WorldList';

const Discover = ({ match }) => {
  return (
    <div>
      <WorldList />
    </div>
  );
};
export default Discover;