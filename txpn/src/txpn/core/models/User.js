import { Model, Field } from 'txpn/core/ORM';

export default class User extends Model {
  static fields = {
    username: new Field(),
    // explorers
  };

  getLastAdventure() {
    return this.explorers.reduce((adventure, explorer) => {
      if (adventure != null) {
        return adventure;
      }
      const adventures = explorer.adventureStates;
      if (adventures.length > 0) {
        return adventures[0];
      }
    }, undefined);

  }
}
