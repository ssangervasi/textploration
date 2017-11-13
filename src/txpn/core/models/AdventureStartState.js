import { Model, Field, ForeignKey } from 'txpn/core/ORM';
import Explorer from './Explorer';
import World from './World';

const AdventureStartSteps = {
  CREATE_EXPLORER: 'CREATE_EXPLORER',
  CHOOSE_WORLD: 'CHOOSE_WORLD',
  CONFIRM: 'CONFIRM',
  DONE: 'DONE',
};

class AdventureStartState extends Model {
  static fields = {
    explorer: new ForeignKey(Explorer, 'adventureStartStates'),
    world: new ForeignKey(World, 'adventureStartStates'),
    is_confirmed: new Field(),
  };

  getNextStep() {
    if (this.explorer == null) {
      return AdventureStartSteps.CREATE_EXPLORER;
    } else if (this.world == null) {
      return AdventureStartSteps.CHOOSE_WORLD;
    } else if (!this.is_confirmed) {
      return AdventureStartSteps.CONFIRM;
    } else {
      return AdventureStartSteps.DONE;
    }
  }
}

export { AdventureStartState as default, AdventureStartSteps };
