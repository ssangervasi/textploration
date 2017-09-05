// 
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { World } from 'txpn/core/models';
import { bindy } from 'txpn/utils';
import WorldDetail from 'txpn/components/world/WorldDetail';


export default class WorldList extends Component {

  constructor(props) {
    super(props);
    this.state = { done: false };
    bindy(this,
      this.handleSelectWorld,
      this.handleConfirmWorld,
    );
  }
  
  handleSelectWorld(world) {
    console.log(world);
    this.setState({ selectedWorld: world });
  }

  handleConfirmWorld() {
    if (this.state.selectedWorld != null) {
      this.props.submit(this.state.selectedWorld);
      this.setState({ done: true });
    }
  }

  // TODO: Make it into a simple component.
  makeWorldItems() {
    return this.props.worlds.map(
      world => (
        <li key={world.id} className="world-list__item">
          <button
            className="button"
            onClick={() => this.handleSelectWorld(world)}
            disabled={this.state.done || this.state.selectedWorld === world}
          >
            {world.name}
          </button>
        </li>
      )
    );
  }

  makeWorldHeader() {
    const selectedWorld = this.state.selectedWorld;
    if (selectedWorld == null) {
      return <div>None selected</div>
    } else {
      return (
        <div>
          <button
            className="button"
            onClick={this.handleConfirmWorld}
            disabled={this.state.done}
          >
            Go to {selectedWorld.name}
          </button>
        </div>
      );
    }
  }

  render() {
    const worldHeader = this.makeWorldHeader();
    const worldItems = this.makeWorldItems();
    return (
      <div>
        <h3>Choose a world:</h3>
        {worldHeader}
        <ul className="world-list">
          {worldItems}
        </ul>  
      </div>
    );
  }
}
