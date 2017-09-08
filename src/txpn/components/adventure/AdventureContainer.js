import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import gameEngine from 'txpn/store/gameEngine';
import Adventure from './Adventure';
import AdventureStart from './AdventureStart';

export default class AdventureContainer extends Component {
  render() {
    const path = this.props.match.path;
    const url = this.props.match.url;
    return (
      <Switch>
        <Route path={`${path}/start`} component={AdventureStart} />
        <Route path={`${path}/continue`} component={AdventureContinue} />
      </Switch>
    );
  }
}

function AdventureContinue() {
  return (
    <Adventure {...gameEngine.getAdventure()}/>
  );
}
