// @flow
import UId from 'txpn/core/UId';

/**
 * Extending this class is useful for making classes
 * that can be constructed from an object.
 * The type checking is not as good as it should be, though.
 */
export default class BaseModel {
  id: string;

  constructor(values?: *): void {
    if (values != null) {
      let { id, ...rest } = values;
      if (id == null) {
        id = new UId().toString();
      }
      Object.assign(this, {id: id, ...rest});
    }
  }

  update(values?: *): BaseModel {
    let union: * = Object.assign({}, (this: Object), values);
    return new this.constructor(union);
  }

  toString(): string {
    return `${this.constructor.name}({id: ${this.id}})`;
  }
}