// @flow

import Door from './Door';

export default class Room {
  id: UID;
  name: string;
  description: string;
  doors: Door[];

  constructor(values: {id?: UID, ...Room}) {
    if (values.id == null) {
      values.id = new UID();
    }
    Object.assign(this, values);
  }
}


let idCounter: number = 1;
const idMap: WeakMap<UID, number> = new WeakMap();

class UID {
  constructor() {
    idMap.set(this, idCounter++);
  }
  toString(): string {
    const id = idMap.get(this);
    if (id != null) {
      return id.toFixed();
    }
    return '';
  }
}
