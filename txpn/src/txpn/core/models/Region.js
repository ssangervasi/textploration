import { Model, Field, ForeignKey } from 'txpn/core/ORM';
import World from './World';

export default class Region extends Model {
  static fields = {
    name: new Field(),
    isHub: new Field(),
    world: new ForeignKey(World, 'regions'),
  };

  getStartingRoom() {
    return this.rooms.reduce(
      (current, room) => (room.number < current.number ? room : current)
    );
  }
}
