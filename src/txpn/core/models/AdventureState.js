import { Model, ForeignKey } from 'txpn/core/ORM';
import Explorer from './Explorer';
import Room from './Room';

export default class AdventureState extends Model {
  static fields = {
    explorer: new ForeignKey(Explorer, 'adventureStates'),
    room: new ForeignKey(Room, 'adventureStates'),
  };

  get region() {
    return this.room.region;
  }

  get world() {
    return this.region.world;
  }

  get doors() {
    return this.room.doors;
  }
}
