// @flow
import UId from 'txpn/core/UId';

export default class BaseModel {
  id: string;
  constructor(values: {id?: string, ...Object}) {
    let id = values.id
    if (id == null) {
      id = new UId().toString();
    }
    Object.assign(this, {id: id, ...values});
  }

  toString(): string {
    return `${this.constructor.name}({id: ${this.id}})`;
  }
}
