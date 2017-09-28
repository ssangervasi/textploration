import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Help from './Help';
import CreateExplorer from 'txpn/components/explorer/CreateExplorer';

export default class CreatePage extends React.Component {
  receiveExplorer = evt => {
    console.log('Yay', evt);
  };

  render() {
    const path = this.props.match.path;
    return (
      <Switch>
        <Route path={`${path}/help`} component={Help} />
        <Route
          path={`${path}/explorer`}
          render={() => <CreateExplorer submit={this.receiveExplorer} />}
        />
        <Redirect to={`${path}/help`} />
      </Switch>
    );
  }
}
