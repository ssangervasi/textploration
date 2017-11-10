import React from 'react';

import gameState from 'txpn/runtime/gameState';
import CreateExplorerForm from 'txpn/components/explorer/CreateExplorerForm';

export default class CreateExplorerPage extends React.Component {
  setExplorer = explorer => {
    const adventureStart = gameState.adventureStart.get();
    adventureStart.explorer = explorer.save();
    gameState.adventureStart.update(adventureStart.save());
  };

  render() {
    return <CreateExplorerForm handleSubmit={this.setExplorer} />;
  }
}
