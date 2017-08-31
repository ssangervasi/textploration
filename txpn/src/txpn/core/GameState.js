// @flow
import AdventureStartState from 'txpn/core/AdventureStartState';
import AdventureState from 'txpn/core/AdventureState';
import { NotImplementedError } from 'txpn/core/errors';
import {
  Explorer,
  User,
} from 'txpn/core/models';

type GameStateValues = {
  adventure?: AdventureState,
  adventureStart?: AdventureStartState,
  user?: User,
};

export default class GameState {
  adventure: AdventureState | void;
  adventureStart: AdventureStartState | void;
  user: User;

  constructor(values: GameStateValues) {
    this.adventure = values.adventure;
    this.adventureStart = values.adventureStart;
    this.user = values.user || new User();
  }
}