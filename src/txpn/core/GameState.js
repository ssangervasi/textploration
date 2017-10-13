import { User } from 'txpn/core/models';

export default class GameState {
  constructor({ adventure, adventureStart } = {}) {
    this.adventure = adventure;
    this.adventureStart = adventureStart;
  }
}
