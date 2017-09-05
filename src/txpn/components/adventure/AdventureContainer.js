// 
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
    <Adventure
      explorer={gameEngine.getExplorer()}
      world={gameEngine.getWorld()}
      region={gameEngine.getRegion()}
      room={gameEngine.getRoom()}
      doors ={gameEngine.getDoors()}
    />
  );
}