// 
import GameState from 'txpn/core/GameState';
import Database from 'txpn/core/Database';
import AdventureStartState from 'txpn/core/AdventureStartState';
import AdventureState from 'txpn/core/AdventureState';
import { NotImplementedError } from 'txpn/core/errors';
import {
  Explorer,
  Room,
  Region,
  World,
  User,
} from 'txpn/core/models';


export default class GameEngine {

  constructor({ database, gameState }) {
    this.database = database;
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
    if (adventureStart == null
        || adventureStart.explorer == null
        || adventureStart.world == null
    ) {
      throw new NotImplementedError(`
        Starting an adventure without using the
        "getStarted" flow is not implemented.
      `);
    }
    const explorer = adventureStart.explorer;
    const world = adventureStart.world;
    const room = this.getFirstRoom(world);
    this.gameState.adventure = new AdventureState({
      explorer: explorer,
      room: room,
    });
  }

  getFirstRoom(world) {
    const firstRegionId = world.regionIds[0];
    const firstRegion = this.database.regions.get(firstRegionId);
    const firstRoomId = firstRegion.roomIds[0];
    const firstRoom = this.database.rooms.get(firstRoomId);
    return firstRoom;
  }
}