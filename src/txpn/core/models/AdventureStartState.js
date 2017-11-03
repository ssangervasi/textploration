import { Model, Field } from 'txpn/core/ORM';
import Explorer from './Explorer';
import World from './World';

const AdventureStartSteps = {
  CREATE_EXPLORER: 'CREATE_EXPLORER',
  CHOOSE_WORLD: 'CHOOSE_WORLD',
  DONE: 'DONE',
};

class AdventureStartState {
  static fields = {
    explorer: new ForeignKey(Explorer, 'adventureStartStates'),
    world: new ForeignKey(World, 'adventureStartStates'),
  };

  getNextStep() {
    if (this.explorer == null) {
      return AdventureStartSteps.CREATE_EXPLORER;
    } else if (this.world == null) {
      return AdventureStartSteps.CHOOSE_WORLD;
    } else {
      return AdventureStartSteps.DONE;
    }
  }
}

export { AdventureStartState as default, AdventureStartSteps };
