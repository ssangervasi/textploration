import GameState from 'txpn/core/GameState';
import AdventureStartState from 'txpn/core/AdventureStartState';
import AdventureState from 'txpn/core/AdventureState';
import { NotImplementedError } from 'txpn/core/errors';
import { Explorer, Room, Region, World, User } from 'txpn/core/models';

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
    console.log(world)
    const room = world.getStartingRegion().getStartingRoom();
    this.gameState.adventure = new AdventureState({
      explorer: explorer,
      room: room,
    });
  }

  getWorlds() {
    return this.orm.database.getModelSet(World).getAll();
  }

  getAdventure() {
    const { explorer, room } = this.gameState.adventure;
    const region = room.region;
    const adventure = {
      world: region.world,
      doors: room.doors,
      explorer,
      room,
      region,
    };
    console.log(adventure);
    return adventure;
  }
}
