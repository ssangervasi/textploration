import React from 'react';

import gameEngine from 'txpn/runtime/gameEngine';
import gameState from 'txpn/runtime/gameState';

import ChooseWorldForm from 'txpn/components/world/ChooseWorldForm';

export default class ChooseWorldPage extends React.Component {
  setWorld = world => {
    const adventureStart = gameState.adventureStart.get();
    adventureStart.world = world;
    gameState.adventureStart.update(adventureStart.save());
  };

  render() {
    const worlds = gameEngine.getWorlds();
    return <ChooseWorldForm worlds={worlds} handleSubmit={this.setWorld} />;
  }
}
