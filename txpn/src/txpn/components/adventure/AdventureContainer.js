// @flow
import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Adventure from './Adventure';
import AdventureStart from './AdventureStart';

export default class AdventureContainer extends Component {
  render() {
    const path = this.props.match.path;
    return (
      <Switch>
        <Route path={`${path}/start`} component={AdventureStart} />
        <Route path={`${path}/continue`} component={Adventure} />
        <Redirect to={`${path}/start`} />
      </Switch>
    );
  }
}