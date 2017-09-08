import { Model, Field, ForeignKey } from 'txpn/core/ORM';
import Explorer from './Explorer';
import Room from './Room';

export default class AdventureState extends Model {
  static fields = {
    explorer: new ForeignKey(Explorer, 'adventureStates'),
    room: new ForeignKey(Room, 'adventureStates'),
  };
}
