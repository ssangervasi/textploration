// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { World } from 'txpn/core/models';
import { bindy } from 'txpn/utils';
import WorldDetail from 'txpn/components/world/WorldDetail';

type WorldListProps = {
  worlds: Array<World>,
};

export default class WorldList extends Component {
  props: WorldListProps;
  state: {
    selectedWorld?: World,
    redirectToContinue: boolean,
  };

  constructor(props: WorldListProps) {
    super(props);
    this.state = { redirectToContinue: false };
    bindy(this,
      this.handleSelectWorld,
      this.handleConfirmWorld,
    );
  }
  
  handleSelectWorld(world: World) {
    console.log(world);
    this.setState({ selectedWorld: world });
  }

  handleConfirmWorld() {
    // TODO: submit game state change.
    this.setState({ redirectToContinue: true });
  }

  // TODO: Make it into a simple component.
  makeWorldItems() {
    return this.props.worlds.map(
      world => (
        <li key={world.id}>
          <button onClick={() => this.handleSelectWorld(world)}>
            {world.name}
          </button>
        </li>
      )
    );
  }

  makeWorldHeader() {
    const selectedWorld = this.state.selectedWorld;
    if (selectedWorld == null) {
      return <h2>Choose a world:</h2>
    } else {
      return (
        <div>
          <h2>Chosen World:</h2>
          <WorldDetail world={selectedWorld} />
          <br />
          <button onClick={this.handleConfirmWorld}>
            Go!
          </button>
        </div>
      );
    }
  }

  render() {
    if (this.state.redirectToContinue) {
      return <Redirect to="/adventure" />
    }
    const worldHeader = this.makeWorldHeader();
    const worldItems = this.makeWorldItems();
    return (
      <div className="worlds section">
        {worldHeader}
        <ul>
          {worldItems}
        </ul>  
      </div>
    );
  }
}
