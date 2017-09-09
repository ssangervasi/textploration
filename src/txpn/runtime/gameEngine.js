import GameEngine from 'txpn/core/GameEngine';

import orm from 'txpn/runtime/orm';
import gameState from 'txpn/runtime/gameState';

const gameEngine = new GameEngine({
  orm: orm,
  gameState: gameState,
});

export {
  gameEngine as default
}
