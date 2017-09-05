// 
import AdventureStartState from 'txpn/core/AdventureStartState';
import AdventureState from 'txpn/core/AdventureState';
import { NotImplementedError } from 'txpn/core/errors';
import {
  Explorer,
  User,
} from 'txpn/core/models';


export default class GameState {

  constructor(values) {
    this.adventure = values.adventure;
    this.adventureStart = values.adventureStart;
    this.user = values.user || new User();
  }
}