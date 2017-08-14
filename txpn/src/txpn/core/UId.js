// @flow

/** 
 * This is a simple UId generator that is just used
 * for sample data.
 */

interface Id {
  +toString: () => string;
}

class UIdStore {
  idCounter: number = 1;
  idMap: WeakMap<Id, number> = new WeakMap();

  add(obj: Id): void {
    this.idCounter += 1;
    this.idMap.set(obj, this.idCounter);
  }

  get(obj: Id): number | void {
    return this.idMap.get(obj);
  }
}

class ErrorNoSuchId {
  message = `No UId object could be found.
This shouldn't happen, but I'm a dumb
class and I can't explain it.
Maybe you've created more objects than there
numbers, or maybe your object was deleted`
}

const instanceUIdStore = new UIdStore();

export default class UId implements Id {
  constructor() {
    instanceUIdStore.add(this);
  }
  toString(): string {
    const id = instanceUIdStore.get(this);
    if (id != null) {
      return id.toFixed();
    }
    throw new ErrorNoSuchId();
  }
}
