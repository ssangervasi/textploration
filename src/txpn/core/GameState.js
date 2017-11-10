import Subject from 'txpn/core/Subject';

import { AdventureStartState } from 'txpn/core/models';

export default class GameState {
  constructor({ adventure, adventureStart = new AdventureStartState() } = {}) {
    this.adventure = new ObservedObject(adventure);
    this.adventureStart = new ObservedObject(adventureStart);
  }
}

class ObservedObject {
  constructor(realObject) {
    this.subject = new Subject();
    this.update(realObject);
  }

  update(newObject) {
    this.realObject = newObject;
    this.subject.publish(newObject);
  }

  get() {
    return this.realObject;
  }
}
