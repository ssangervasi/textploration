import React from 'react';
import {
  Route,
  // Redirect,
  Switch,
} from 'react-router-dom';

import CreateExplorer from 'txpn/components/explorer/CreateExplorer';

export default class CreateContainer extends React.Component {
  receiveExplorer = evt => {
    console.log('Yay', evt);
  };

  render() {
    return (
      <Switch>
        <Route
          path={this.props.match.path}
          render={() => <CreateExplorer submit={this.receiveExplorer} />}
        />
      </Switch>
    );
  }
}
