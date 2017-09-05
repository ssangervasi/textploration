// 
import UId from 'txpn/core/UId';

/**
 * Extending this class is useful for making classes
 * that can be constructed from an object.
 * The type checking is not as good as it should be, though.
 */
export default class Model {

  constructor(values) {
    if (values != null) {
      let { id, ...rest } = values;
      if (id == null) {
        id = new UId().toString();
      }
      Object.assign(this, {id: id, ...rest});
    }
  }

  update(values) {
    let union = Object.assign({}, (this), values);
    return new this.constructor(union);
  }

  toString() {
    return `${this.constructor.name}({id: ${this.id}})`;
  }
}