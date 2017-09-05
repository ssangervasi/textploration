// 
import DataStore from 'txpn/core/DataStore';
import {
  BaseModel,
  Door,
  Explorer,
  Region,
  Room,
  World,
} from 'txpn/core/models';

export default class Database {
  doors = new ModelSet();
  explorers = new ModelSet();
  regions = new ModelSet();
  rooms = new ModelSet();
  worlds = new ModelSet();
}

class ModelSet {
  byId = new Map();

  add(model) {
    this.byId.set(model.id, model);
  }

  addAll(models) {
    models.forEach(this.add, this);
  }

  get(id) {
    return this.byId.get(id);
  }

  getAll() {
    return Array.from(this.byId.values());
  }
}