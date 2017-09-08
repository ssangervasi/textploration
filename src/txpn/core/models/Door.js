import { Model, Field, ForeignKey } from 'txpn/core/ORM';
import Room from './Room';

export default class Door extends Model {
  static fields = {
    name: new Field(),
    number: new Field(),
    origin: new ForeignKey(Room, 'doors'),
    destination: new ForeignKey(Room, 'entrances'),
  };
}
