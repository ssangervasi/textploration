import GameEngine from 'txpn/core/GameEngine';

import orm from 'txpn/runtime/orm';
import gameState from 'txpn/runtime/gameState';
import auth from 'txpn/runtime/auth';

const gameEngine = new GameEngine({
  orm: orm,
  gameState: gameState,
  auth: auth,
});

export {
  gameEngine as default
}
