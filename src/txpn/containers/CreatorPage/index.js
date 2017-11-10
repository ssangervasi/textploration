import React from 'react';
import { Route, Redirect, Switch, NavLink } from 'react-router-dom';

import CreateExplorerForm from 'txpn/components/explorer/CreateExplorerForm';
import CreatorNav from 'txpn/components/creator/CreatorNav';
import Help from 'txpn/components/creator/Help';
import OverviewPage from './OverviewPage';


export default class CreatorPage extends React.Component {
  receiveExplorer = evt => {
    console.log('CreatorPage.receiveExplorer', evt);
  };

  render() {
    const path = this.props.match.path;
    return (
      <div>
        <CreatorNav path={path}/>
        <Switch>
          <Route path={`${path}/overview`} component={OverviewPage} />
          <Route path={`${path}/help`} component={Help} />
          <Route path={`${path}/world`} />
          <Route path={`${path}/region`} />
          <Route path={`${path}/room`} />
          <Route
            path={`${path}/explorer`}
            render={() => <CreateExplorerForm submit={this.receiveExplorer} />}
          />
          <Redirect to={`${path}/help`} />
        </Switch>
      </div>
    );
  }
}
