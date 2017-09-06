import { Model, Region, ForeignKey } from 'txpn/core/ORM';
import { Room } from '.';

export default class Door extends Model {
  static fields = {
    name: new Field(),
    number: new Field(),
    origin: new ForeignKey(Room, 'exitDoors'),
    destination: new ForeignKey(Room, 'entranceDoors'),
  };
}
