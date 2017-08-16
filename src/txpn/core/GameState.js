// @flow
import DataStore from 'txpn/core/DataStore';
import {
  Room,
  World,
  Explorer,
  Region,
  User,
} from 'txpn/core/dataModel';

type GameStateStores = {|
  user: DataStore<User>,
  explorer: DataStore<Explorer>,
  worlds: DataStore<Array<World>>,
|};

export default class GameState {
  stores: GameStateStores;

  constructor(stores: GameStateStores) {
    this.stores = stores;
  }

  changeExplorer(explorer: Explorer) {
    this.stores.explorer.setData(explorer);
  }
}