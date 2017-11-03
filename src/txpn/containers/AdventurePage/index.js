import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import gameEngine from 'txpn/runtime/gameEngine';
import subscribeToProp from 'txpn/components/HOCs/subscribeToProp';
import Adventure from 'txpn/components/adventure/Adventure';
import AdventureStart from 'txpn/components/adventure/AdventureStart';
import AdventureChoices from 'txpn/components/adventure/AdventureChoices';

class AdventurePage extends React.Component {
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

const SubscribedAdventurePage = subscribeToProp({
  prop: 'adventure',
  subject: gameEngine.adventureSubject,
})(AdventurePage);
export { SubscribedAdventurePage as default };
