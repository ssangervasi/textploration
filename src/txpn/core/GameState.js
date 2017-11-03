import Subject from 'txpn/core/Subject';

export default class GameState {
  constructor({ adventure, adventureStart } = {}) {
    this.adventure = new ObservedObject(adventure);
    this.adventureStart = new ObservedObject(adventureStart);
  }
}


class ObservedObject {
  constructor(realObject) {
    this.realObject = realObject;
    this.subject = new Subject();
  }

  update(newObject) {
    if (newObject === this.realObject) {
      return;
    }
    this.realObject = newObject;
    this.subject.publish(newObject)
  }

  get() {
    return this.realObject;
  }
}
