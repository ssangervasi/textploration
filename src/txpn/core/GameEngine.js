import Subject from 'txpn/core/Subject';
import AdventureStartState from 'txpn/core/AdventureStartState';
import { NotImplementedError } from 'txpn/core/errors';
import { Explorer, Room, Region, World, User, AdventureState } from 'txpn/core/models';

export default class GameEngine {
  constructor({ orm, gameState }) {
    this.orm = orm;
    this.gameState = gameState;
    this.adventureSubject = new Subject();
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
    this.adventureSubject.publish();
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
    }
    this.gameState.adventure = adventureState;
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

  goThroughDoor(door) {
    console.log('GameEngine.goThroughDoor', door);
    const destination = door.destination;
    this.gameState.adventure.room = destination;
    this.gameState.adventure.save();
    this.adventureSubject.publish();
  }
}
