// @flow
import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Adventure from './Adventure';

// type Step = {
//   id: string,
//   name: string,
//   path: string,
//   done: boolean,
// };
// steps = [
//   { id: string,
//     name: 'Create Explorer',
//     path: '/explorer',
//     done: false,
//   }
// ];

export default class AdventureContainer extends Component {
  render() {
    const startPath = `${this.props.match.path}/start`;
    return (
      <Switch>
        <Route path={startPath} component={Adventure} />
        <Redirect to={startPath} />
      </Switch>
    );
  }
}