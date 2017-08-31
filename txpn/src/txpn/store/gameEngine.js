// @flow
import GameEngine from 'txpn/core/GameEngine';

import database from 'txpn/store/database';
import gameState from 'txpn/store/gameState';

const gameEngine = new GameEngine({
  database: database,
  gameState: gameState,
});

export {
  gameEngine as default
}