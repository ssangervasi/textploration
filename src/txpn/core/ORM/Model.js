import { ModelNotRegisteredError } from './errors';

class Model {
  static fields;
  data;

  constructor(data) {
    this.data = { id: undefined, ...data };
  }

  get id() {
    return this.data.id;
  }

  set id(value) {
    this.data.id = value;
  }

  toString() {
    return `${this.constructor.name} { ${JSON.stringify(this.data)} }`;
  }

  static get() {
    throw new ModelNotRegisteredError(
      `Cannot call 'get' on unregistered model: ${this.toString()}`
    );
  }

  save() {
    throw new ModelNotRegisteredError(
      `Cannot call 'save' on unregistered model: ${this.toString()}`
    );
  }
}
