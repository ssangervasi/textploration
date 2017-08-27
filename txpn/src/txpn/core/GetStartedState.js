// @flow
import DataStore from 'txpn/core/DataStore';
import {
  World,
  Explorer,
  User,
} from 'txpn/core/models';

const GetStartedSteps = {
  CREATE_EXPLORER: 'CREATE_EXPLORER',
  CHOOSE_WORLD: 'CHOOSE_WORLD',
  DONE: 'DONE',
}

type GetStartedStep = $Keys<typeof GetStartedSteps>;

class GetStartedState {
  explorer: Explorer | void;
  world: World | void;

  constructor({ explorer, world }:
              { explorer?: Explorer, world?: World}
  ) {
    this.explorer = explorer;
    this.world = world;
  }

  getNextStep(): GetStartedStep {
    if (this.explorer == null) {
      return GetStartedSteps.CREATE_EXPLORER;
    } else if (this.world == null) {
      return GetStartedSteps.CHOOSE_WORLD;
    } else {
      return GetStartedSteps.DONE;
    }
  }
}

export {
  GetStartedState as default,
  GetStartedSteps,
}
export type { GetStartedStep }