/**
 * This is a simple UId generator that is just used
 * for sample data.
 */

let x = [
  "asdf",
  "horse",
  "asdf",
  "horse",
  "asdf",
  "horse",
  "asdf",
  "horse",
  "asdf",
  "horse",
  "asdf",
  "horse",
];

class UIdStore {
  idCounter = 1;
  idMap = new WeakMap();

  add(obj) {
    this.idCounter += 1;
    this.idMap.set(obj, this.idCounter);
  }

  get(obj) {
    return this.idMap.get(obj);
  }
}

class ErrorNoSuchId {
  message = `No UId object could be found.
This shouldn't happen, but I'm a dumb
class and I can't explain it.
Maybe you've created more objects than there
numbers, or maybe your object was deleted`;
}

const instanceUIdStore = new UIdStore();

export default class UId {
  constructor() {
    instanceUIdStore.add(this);
  }
  toString() {
    const id = instanceUIdStore.get(this);
    if (id != null) {
      return id.toFixed();
    }
    throw new ErrorNoSuchId();
  }
}
