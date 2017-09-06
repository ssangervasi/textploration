import { dd, forEachOwn } from 'txpn/utils';
import { ModelNotFoundError, InstanceNotFoundError } from './errors';
import { ModelSet, UId } from '.';

export default class Database {
  modelSets = new Map();

  register(Model) {
    if (this.modelSets.has(Model)) {
      return;
    }
    this.modelSets.set(Model, new ModelSet(Model));
  }

  save(instance) {
    const modelSet = this.getModelSet(instance.constructor);
    if (instance.id == null) {
      instance.id = new UId().toString();
    }
    modelSet.add(instance);
  }

  get(Model, id) {
    const modelSet = this.getModelSet(Model);
    const instance = modelSet.get(id);
    if (instance == null) {
      throw new InstanceNotFoundError(dd`
        No instance of "${Model.name}" with id "${id}."
      `);
    }
    return instance;
  }

  getModelSet(Model) {
    const modelSet = this.modelSets.get(Model);
    if (modelSet == null) {
      throw new ModelNotFoundError(dd`
        Cannot get the ModelSet for a Model class that
        has not been registered with the database.
        Model class name: "${Model.name}"
      `);
    }
    return modelSet;
  }
}
