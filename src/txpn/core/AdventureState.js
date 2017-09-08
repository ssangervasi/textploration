import DataStore from 'txpn/core/DataStore';
import { Room, World, Explorer, Region, Door, User } from 'txpn/core/models';

export default class AdventureState {
  constructor({ explorer, room }) {
    this.explorer = explorer;
    this.room = room;
  }
}
