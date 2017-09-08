import { dd } from 'txpn/utils';
import { MissingIdError } from "./errors";

export default class ModelSet {
  constructor(Model) {
    this.Model = Model;
    this.byId = new Map();
  }

  add(instance) {
    if (instance.id == null) {
      throw new MissingIdError(
        `Error: No Id. Cannot add instance: ${instance}`
      );
    }
    const dataCopy = { ...instance.data };
    this.byId.set(instance.id, dataCopy);
  }

  addAll(instances) {
    instances.forEach(this.add, this);
  }

  get(id) {
    const dataCopy = { ...this.byId.get(id) };
    return new this.Model(dataCopy);
  }

  getAll() {
    return Array.from(this.byId.keys(), (id) => this.get(id));
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
        const instance = new this.Model({ ...data });
        results.push(instance);
      }
    });
    return results;
  }
}
