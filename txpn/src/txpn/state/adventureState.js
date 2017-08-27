// @flow
import sampleData from './sampleData';
import DataStore from 'txpn/core/DataStore';
import AdventureState from 'txpn/core/AdventureState';
import {
  Explorer,
  Room,
  User,
} from 'txpn/core/models';

const userStore: DataStore<User> = new DataStore(sampleData.user);
const explorerStore: DataStore<Explorer> = new DataStore(sampleData.explorer);
const roomStore: DataStore<Room> = new DataStore(sampleData.rooms[0]);

const adventureState: AdventureState = new AdventureState({
  explorer: explorerStore,
  room: roomStore,
  user: userStore,
});

export {
  adventureState as default
}