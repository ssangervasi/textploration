// @flow
import DataStore from 'txpn/core/DataStore';
import {
  World,
  Explorer,
  User,
} from 'txpn/core/models';

const AdventureStartSteps = {
  CREATE_EXPLORER: 'CREATE_EXPLORER',
  CHOOSE_WORLD: 'CHOOSE_WORLD',
  DONE: 'DONE',
}
type AdventureStartStep = $Keys<typeof AdventureStartSteps>;
type AdventureStartStateValues = {
  explorer?: Explorer,
  world?: World
};

class AdventureStartState {
  explorer: Explorer | void;
  world: World | void;

  constructor(values?: AdventureStartStateValues) {
    if (values != null) {
      this.explorer = values.explorer;
      this.world = values.world;
    }
  }

  getNextStep(): AdventureStartStep {
    if (this.explorer == null) {
      return AdventureStartSteps.CREATE_EXPLORER;
    } else if (this.world == null) {
      return AdventureStartSteps.CHOOSE_WORLD;
    } else {
      return AdventureStartSteps.DONE;
    }
  }

  setExplorer(explorer: Explorer): void {
    this.explorer = explorer;
  }
  
  setWorld(world: World): void {
    this.world = world;
  }
}

export {
  AdventureStartState as default,
  AdventureStartSteps,
}
export type { AdventureStartStep }