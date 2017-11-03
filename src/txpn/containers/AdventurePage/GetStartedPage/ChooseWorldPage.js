import React from 'react';

import gameEngine from 'txpn/runtime/gameEngine';

export default class WorldList extends React.Component {
  state = {
    done: false,
    selectedWorld: undefined,
  };

  handleClickWorld = world => {
    this.setState({ selectedWorld: world });
  };

  handleConfirmWorld = () => {
    if (this.state.selectedWorld == null) {
      throw 'Chose null world.'
    }
    const adventureStartState = gameEngine.getAdventureStartState();
    adventureStartState.setWorld(this.state.selectedWorld);
    this.setState({ done: true });
  };

  render() {
    const worldItems = gameEngine.getWorld().map(world => (
      <WorldItem
        key={world.id}
        world={world}
        handleClickWorld={this.handleClickWorld}
        disabled={this.state.disabled || this.state.selectedWorld === world}
      />
    ));
    return (
      <div>
        <h3>Choose a world:</h3>
        <WorldListHeader
          world={this.state.selectedWorld}
          disabled={this.state.done}
          handleConfirmWorld={this.handleConfirmWorld}
        />
        <ul className="world-list">{worldItems}</ul>
      </div>
    );
  }
}

function WorldItem({ world, handleClickWorld, ...buttonProps }) {
  return (
    <li className="world-list__item">
      <button
        className="button"
        onClick={() => handleClickWorld(world)}
        {...buttonProps}
      >
        {world.name}
      </button>
    </li>
  );
}

function WorldListHeader({ world, disabled, handleConfirmWorld }) {
  if (world == null) {
    return <div>None selected</div>;
  } else {
    return (
      <div>
        <button
          className="button"
          onClick={handleConfirmWorld}
          disabled={disabled}
        >
          Go to {world.name}
        </button>
      </div>
    );
  }
}
