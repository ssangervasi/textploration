// @flow

class GameEngine {
  gameState: GameState;

  loadWorld(world) {
    let region = world.entryRegion;
    let room = region.entryRoom;
    this.gameState = new GameState({
      world: world,
      region: region,
      room: room,
    });
  }

  goThroughDoor(door) {
    
  }

}


class GameState {

}