// @flow
import React, { Component } from 'react';
import {
  Route,
  Link,
} from 'react-router-dom'

import database from 'txpn/state/database';
import WorldList from 'txpn/components/world/WorldList';

const Discover = () => {
  const worlds = database.worlds.getAll();
  console.log(worlds);
  return (
    <div>
      <WorldList worlds={worlds}/>
    </div>
  );
};
export default Discover;