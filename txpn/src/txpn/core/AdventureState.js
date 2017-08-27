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

type AdventureStateStores = {|
  user: DataStore<User>,
  explorer: DataStore<Explorer>,
  room: DataStore<Room>,
|};

export default class AdventureState {
  stores: AdventureStateStores;

  constructor(stores: AdventureStateStores) {
    this.stores = stores;
  }

  changeExplorer(explorer: Explorer) {
    this.stores.explorer.setData(explorer);
  }

}