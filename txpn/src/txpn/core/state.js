// @flow
import SampleData from 'txpn/core/SampleData';
import DataStore from 'txpn/core/DataStore';
import GameState from 'txpn/core/GameState';
import {
  Room,
  World,
  Explorer,
  Region,
  User,
} from 'txpn/core/dataModel';

const sampleData = new SampleData();

const userStore: DataStore<User> = new DataStore(sampleData.user);
const explorerStore: DataStore<Explorer> = new DataStore(sampleData.explorer);
const worldsStore: DataStore<Array<World>> = new DataStore(sampleData.worlds);

const gameState: GameState = new GameState({
  user: userStore,
  explorer: explorerStore,
  worlds: worldsStore,
});

export {
  gameState as default
}