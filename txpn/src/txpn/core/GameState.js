import { User } from 'txpn/core/models';

export default class GameState {
  constructor({ adventure, adventureStart, user }) {
    this.adventure = adventure;
    this.adventureStart = adventureStart;
    this.user = user || new User();
  }
}
