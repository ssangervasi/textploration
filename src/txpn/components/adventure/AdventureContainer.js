import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { bindy } from 'txpn/utils';
import gameEngine from 'txpn/runtime/gameEngine';
import Adventure from './Adventure';
import AdventureStart from './AdventureStart';
import AdventureChoices from './AdventureChoices';

export default class AdventureContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adventure: gameEngine.getAdventure(),
    };
    bindy(this, this.getAdventure);
  }

  hasAdventureToContinue() {
    return this.state.adventure != null;
  }

  getAdventure() {
    this.setState({ adventure: gameEngine.getAdventure() });
  }

  componentWillMount() {
    gameEngine.adventureSubject.subscribe(this.getAdventure);
  }

  componentWillUnmount() {
    gameEngine.adventureSubject.unsubscribe(this.getAdventure);
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
            return <Adventure {...this.state.adventure} />;
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
