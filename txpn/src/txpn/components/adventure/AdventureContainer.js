import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import gameEngine from 'txpn/store/gameEngine';
import Adventure from './Adventure';
import AdventureStart from './AdventureStart';
import AdventureChoices from './AdventureChoices';

export default class AdventureContainer extends React.Component {
  hasAdventureToContinue() {
    return this.getAdventureToContinue() != null;
  }

  getAdventureToContinue() {
    return gameEngine.getAdventure();
  }

  render() {
    const path = this.props.match.path;
    return (
      <Switch>
        <Route path={`${path}/start`} component={AdventureStart} />
        <Route
          path={`${path}/continue`}
          render={() => {
            if (!this.hasAdventureToContinue()) {
              return <Redirect to={path} />;
            }
            return <Adventure {...this.getAdventureToContinue()} />;
          }}
        />
        <Route render={props => (
          <AdventureChoices canContinue={this.hasAdventureToContinue()} {...props}/>
        )} />
      </Switch>
    );
  }
}
