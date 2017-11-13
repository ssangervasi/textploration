import { NotImplementedError } from 'txpn/core/errors';
import { World, AdventureState } from 'txpn/core/models';
import AdventureStartState, {
  AdventureStartSteps,
} from 'txpn/core/models/AdventureStartState';

export default class GameEngine {
  constructor({ orm, gameState, auth }) {
    this.orm = orm;
    this.gameState = gameState;
    this.auth = auth;
  }

  resetAdventureStart() {
    this.gameState.adventureStart.update(new AdventureStartState());
  }

  startAdventure() {
    const adventureStart = this.gameState.adventureStart.get();
    if (
      adventureStart == null ||
      adventureStart.getNextStep() !== AdventureStartSteps.DONE
    ) {
      throw new NotImplementedError(`
        Starting an adventure without using the
        "getStarted" flow is not implemented.
      `);
    }
    const explorer = adventureStart.explorer;
    if (this.auth.isAuthenticated) {
      explorer.user = this.auth.user;
      explorer.save();
    }
    const world = adventureStart.world;
    const room = world.getStartingRegion().getStartingRoom();
    const adventureState = new AdventureState({
      explorer: explorer,
      room: room,
    }).save();
    this.gameState.adventure.update(adventureState);
    this.resetAdventureStart();
  }

  getWorlds() {
    return this.orm.database.getModelSet(World).getAll();
  }

  goThroughDoor(door) {
    const destination = door.destination;
    const adventureState = this.gameState.adventure.get();
    adventureState.room = destination;
    this.gameState.adventure.update(adventureState.save());
  }

  doAfterAuthenticate() {
    let adventureState = this.gameState.adventure.get();
    if (adventureState == null && this.auth.isAuthenticated) {
      adventureState = this.auth.user.getLastAdventure();
      if (adventureState != null) {
        this.gameState.adventure.update(adventureState);
      }
    }
  }

  doAfterDeauthenticate() {
    // When a user logs out, their adventure state should be cleared.
    const adventureState = this.gameState.adventure.get();
    if (
      adventureState != null &&
      adventureState.explorer != null &&
      adventureState.explorer.user != null
    ) {
      this.gamestate.adventure.update(null);
    }
  }
}
