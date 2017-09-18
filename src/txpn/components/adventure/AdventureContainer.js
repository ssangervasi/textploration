import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import gameEngine from 'txpn/runtime/gameEngine';
import SubscribeToProp from 'txpn/components/common/SubscribeToProp';
import Adventure from './Adventure';
import AdventureStart from './AdventureStart';
import AdventureChoices from './AdventureChoices';

class AdventureContainer extends React.Component {
  hasAdventureToContinue() {
    return this.props.adventure != null;
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
            return <Adventure {...this.props.adventure} />;
          }}
        />
        <Route
          render={props => (
            <AdventureChoices
              canContinue={this.hasAdventureToContinue()}
              {...props}
            />
          )}
        />
      </Switch>
    );
  }
}

const SubscribedAdventureContainer = SubscribeToProp(
  'adventure',
  gameEngine.adventureSubject
)(AdventureContainer);
export { SubscribedAdventureContainer as default };
