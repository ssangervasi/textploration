// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { bindy } from 'txpn/utils';
import WorldDetail from 'txpn/components/world/WorldDetail';
import WorldsInjector, { World} from 'txpn/components/world/WorldsInjector';
import type { WorldsProps }  from 'txpn/components/world/WorldsInjector';

class WorldList extends Component {
  props: WorldsProps;
  state: {
    selectedWorld?: World,
    redirectToContinue: boolean,
  };

  constructor(props: WorldsProps) {
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

const ConnectedWorldList = WorldsInjector.connect(WorldList);
export {
  ConnectedWorldList as default
};