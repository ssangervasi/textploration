// @flow
import sampleData from './sampleData';
import AdventureStartState from 'txpn/core/AdventureStartState';
import AdventureState from 'txpn/core/AdventureState';
import User from 'txpn/core/models/User';

type AppStateValues = {
  adventure?: AdventureState,
  adventureStart?: AdventureStartState,
  user?: User,
};

class AppState {
  adventure: AdventureState | void;
  adventureStart: AdventureStartState | void;
  user: User;

  constructor(values: AppStateValues) {
    this.adventure = values.adventure;
    this.adventureStart = values.adventureStart;
    this.user = values.user || new User();
  }

  getStarted(): AdventureStartState {
    if (this.adventureStart == null) {
      this.adventureStart = new AdventureStartState();
    }
    return this.adventureStart;
  }
}

const appState: AppState = new AppState ({
  user: sampleData.user,
})

export {
  appState as default
}