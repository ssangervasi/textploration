import GameEngine from 'txpn/core/GameEngine';

import orm from 'txpn/store/orm';
import gameState from 'txpn/store/gameState';

const gameEngine = new GameEngine({
  orm: orm,
  gameState: gameState,
});

export {
  gameEngine as default
}
