import { Model, Field, ForeignKey } from 'txpn/core/ORM';
import World from './World';
import User from './User';

export default class Region extends Model {
  static fields = {
    name: new Field(),
    isHub: new Field(),
    world: new ForeignKey(World, 'regions'),
    creator: new ForeignKey(User, 'createdRegions'),
  };

  getStartingRoom() {
    return this.rooms.reduce(
      (current, room) => (room.number < current.number ? room : current)
    );
  }
}
