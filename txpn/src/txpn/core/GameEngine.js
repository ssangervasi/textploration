// @flow
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

type GameEngineValues = {
  database: Database,
  gameState: GameState,
};

export default class GameEngine {
  database: Database;
  gameState: GameState;

  constructor({ database, gameState }: GameEngineValues) {
    this.database = database;
    this.gameState = gameState;
  }

  getStarted(): AdventureStartState {
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
    const explorer: Explorer = adventureStart.explorer;
    const world: World = adventureStart.world;
    const room = this.getFirstRoom(world);
    this.gameState.adventure = new AdventureState({
      explorer: explorer,
      room: room,
    });
  }

  getFirstRoom(world: World): Room {
    const firstRegionId = world.regionIds[0];
    const firstRegion = this.database.regions.get(firstRegionId);
    const firstRoomId = firstRegion.roomIds[0];
    const firstRoom = this.database.rooms.get(firstRoomId);
    return firstRoom;
  }
}