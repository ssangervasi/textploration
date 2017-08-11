// @flow
import React, { Component } from 'react';

import { bindy } from 'txpn/utils';
import { World } from 'txpn/core/dataModel';
import UserData, { UserDataProps } from 'txpn/components/common/UserData';
import WorldDetail from 'txpn/components/world/WorldDetail';

class WorldList extends Component {
  props: UserDataProps;
  state: {
    selectedWorld: World | void,
  };

  constructor(props: UserDataProps) {
    super(props);
    this.state = { selectedWorld: undefined };
    bindy(this, this.handleSelectWorld);
  }
  
  handleSelectWorld(world: World) {
    console.log(world);
    this.setState({ selectedWorld: world });
  }

  // TODO: Make it into a simple component.
  makeWorldItems() {
    return this.props.userData.worlds.map(
      world => (
        <li key={world.id} onClick={() => this.handleSelectWorld(world)}>
          <h2>
            {world.name}
          </h2>
        </li>
      )
    );
  }

  render() {
    const explorer = this.props.userData.explorer;
    const worldItems = this.makeWorldItems();
    return (
      <div className="worlds section">
        <h2>Choose a world:</h2>
        
        <h3>
          <span>
           {explorer.name} ({explorer.id}) is off to...
          </span>
        </h3>
        
        <ul>
          {worldItems}
        </ul>  

        <WorldDetail world={this.state.selectedWorld} />
      </div>
    );
  }
}

const ConnectedWorldList = UserData.connect(WorldList);
export {
  ConnectedWorldList as default
};