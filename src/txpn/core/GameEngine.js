import AdventureStartState from 'txpn/core/AdventureStartState';
import { NotImplementedError } from 'txpn/core/errors';
import { Explorer, Room, Region, World, User, AdventureState } from 'txpn/core/models';

export default class GameEngine {
  constructor({ orm, gameState }) {
    this.orm = orm;
    this.gameState = gameState;
  }

  getStarted() {
    if (this.gameState.adventureStart == null) {
      this.gameState.adventureStart = new AdventureStartState();
    }
    return this.gameState.adventureStart;
  }

  startAdventure() {
    const adventureStart = this.gameState.adventureStart;
    if (
      adventureStart == null ||
      adventureStart.explorer == null ||
      adventureStart.world == null
    ) {
      throw new NotImplementedError(`
        Starting an adventure without using the
        "getStarted" flow is not implemented.
      `);
    }
    const explorer = adventureStart.explorer;
    const world = adventureStart.world;
    const room = world.getStartingRegion().getStartingRoom();
    this.gameState.adventure = new AdventureState({
      explorer: explorer,
      room: room,
    }).save();
    this.gameState.adventureStart = undefined;
  }

  getWorlds() {
    return this.orm.database.getModelSet(World).getAll();
  }

  getAdventure() {
    let adventureState = this.gameState.adventure;
    if (adventureState == null) {
      adventureState = this.gameState.user.getLastAdventure();
      if (adventureState == null) {
        return;
      }
      this.adventureState = adventureState;
    }
    const { explorer, room } = adventureState;
    const region = room.region;
    const adventure = {
      world: region.world,
      doors: room.doors,
      explorer,
      room,
      region,
    };
    return adventure;
  }
}
