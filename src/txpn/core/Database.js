// @flow
import DataStore from 'txpn/core/DataStore';
import {
  BaseModel,
  Explorer,
  World,
} from 'txpn/core/models';

export default class Database {
  worlds: ModelSet<World> = new ModelSet();
  explorers: ModelSet<Explorer> = new ModelSet();
}

class ModelSet<ModelType: BaseModel> {
  byId: Map<string, ModelType> = new Map();

  add(model: ModelType) {
    this.byId.set(model.id, model);
  }

  addAll(models: Array<ModelType>): void {
    models.forEach(this.add, this);
  }

  get(id: string): ModelType | void {
    return this.byId.get(id);
  }

  getAll(): Array<ModelType> {
    return Array.from(this.byId.values());
  }
}