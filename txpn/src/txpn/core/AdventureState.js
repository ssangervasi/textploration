// @flow
import DataStore from 'txpn/core/DataStore';
import {
  Room,
  World,
  Explorer,
  Region,
  Door,
  User,
} from 'txpn/core/models';

// type AdventureStateStores = {|
//   user: DataStore<User>,
//   explorer: DataStore<Explorer>,
//   room: DataStore<Room>,
// |};

export default class AdventureState {
  explorer: Explorer;
  room: Room;

  constructor(
    { explorer, room }:
    { explorer: Explorer, room: Room }
  ) {
    this.explorer = explorer;
    this.room = room;
  }
}
