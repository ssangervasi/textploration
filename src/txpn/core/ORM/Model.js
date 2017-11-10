import { forEachOwn } from 'txpn/utils';
import { ModelNotRegisteredError } from './errors';

export default class Model {
  /**
   * Collection of field definitions
   * These should be overridden by the subclass.
   *
   * @example
   * class Person extends Model {
   *   static fields = { name: new Field() }
   * }
   */
  static fields = {};
  data = {};

  constructor(fieldValues) {
    this.update(fieldValues);
  }

  /**
   * Updates the model's data by creating a shallow copy and assigning all
   * fields in `fieldValues` to the corresponding field. Any keys in
   * `fieldValues` do not have a corresponding field definition are
   * skipped.
   *
   * @param      {object}  fieldValues  Map of field names to values.
   * @return     {Model}   `this`
   */
  update(fieldValues) {
    this.data = { ...this.data };
    forEachOwn(fieldValues, (field, value) => {
      if (this.constructor.fields.hasOwnProperty(field)) {
        // Let the field decide how the value is set.
        this[field] = value;
      }
    });
    return this;
  }

  toString() {
    return `${this.constructor.name} { ${JSON.stringify(this.data)} }`;
  }

  /**
   * When registered with with an ORM, this a shortuct for
   * querying the database for an instance of the model type.
   *
   * @param      {string}  id      Id of instance to get.
   * @throws     {ModelNotRegsiteredError}
   * @throws     {ModelNotFoundError}
   */
  static get(id) {
    // Note: static `this` is the constructor class.
    if (this.orm == null) {
      throw new ModelNotRegisteredError(
        `Cannot call 'get' on unregistered model: ${this.name}`
      );
    }
    return this.orm.get(this, id);
  }

  /**
   * When registered with an ORM, this will persist the model
   * in the database.
   *
   * @return     {Model}  A new instance after save created with `get`.
   * @throws     {ModelNotRegisteredError}
   */
  save() {
    if (this.constructor.orm == null) {
      throw new ModelNotRegisteredError(
        `Cannot call 'save' on unregistered model: ${this.toString()}`
      );
    }
    this.constructor.orm.save(this);
    return this.constructor.get(this.id);
  }
}
