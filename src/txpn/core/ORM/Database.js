import { fixIndent } from 'txpn/utils';
import { ModelNotFoundError, InstanceNotFoundError } from "./errors";

export class Database {
  modelSets = new Map();

  register(model) {
    if (this.modelSets.has(model)) {
      return;
    }
    this.modelSets.set(model, new ModelSet(model));
  }

  save(instance) {
    const modelSet = this.getModelSet(instance.constructor);
    if (instance.id == null) {
      instance.id = new UId().toString();
    }
    modelSet.add(instance);
  }

  get(model, id) {
    const modelSet = this.getModelSets(model);
    const instance = modelSet.get(id);
    if (instance == null) {
      throw new InstanceNotFoundError(fixIndent(`
        No instance of "${model.name}" with id "${id}."
      `));
    }
    return instance;
  }

  getModelSet(model) {
    const modelSet = this.modelSets.get(model);
    if (modelSet == null) {
      throw new ModelNotFoundError(fixIndent(`
        Cannot get the ModelSet for a Model class that
        has not been registered with the database.
        Model class name: "${model.name}"
      `));
    }
    return modelSet;
  }
}

export class ModelSet {
  constructor(model) {
    this.model = model;
    this.byId = new Map();
  }

  add(instance) {
    if (instance.id == null) {
      throw `Error: No Id. Cannot add instance ${instance.toString()}`;
    }
    const dataCopy = { ...instance.data };
    this.byId.set(instance.id, dataCopy);
  }

  addAll(instances) {
    instances.forEach(this.add, this);
  }

  get(id) {
    const dataCopy = { ...this.byId.get(id) };
    return new this.model(dataCopy);
  }

  getAll() {
    return Array.from(this.byId.values());
  }

  filter(fields) {
    function isMatch(data) {
      for (let field in fields) {
        if (data[field] !== fields[field]) {
          return false;
        }
      }
      return true;
    }
    const results = [];
    this.byId.forEach((data, id) => {
      if (isMatch(data)) {
        const instance = new this.model({ ...data });
        results.push(instance);
      }
    });
    return results;
  }
}
