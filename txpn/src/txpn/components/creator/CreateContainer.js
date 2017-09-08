import React from 'react';
import {
  Route,
  // Redirect,
  Switch,
} from 'react-router-dom';

import { bindy } from 'txpn/utils';
import CreateExplorer from 'txpn/components/explorer/CreateExplorer';

export default class CreateContainer extends React.Component {
  constructor(props) {
    super(props);
    bindy(this, this.receiveExplorer);
    this.CreateExplorer = () => <CreateExplorer submit={this.receiveExplorer}/>
  }

  receiveExplorer(e) {
    console.log('Yay', e);
  }

  render() {
    return (
      <Switch>
        <Route path={this.props.match.path} component={this.CreateExplorer} />
      </Switch>
    );
  }
}
