// @flow
import sampleData from './sampleData';
import GameState from 'txpn/core/GameState';

const gameState: GameState = new GameState ({
  user: sampleData.user,
})

export {
  gameState as default
}