// @flow
import React, { Component } from 'react';

import UserInjector from 'txpn/components/user/UserInjector';
import Adventure from 'txpn/components/adventure/Adventure';

class AdventureForUser extends Component {
  render() {
    // TODO: Make this dynamic.
    const explorer = this.props.user.explorer;
    const world = this.props.user.worlds[0];
    const region = world.regions[0];
    const room = region.rooms[0];

    return (
      <Adventure
        explorer={explorer}
        world={world}
        region={region}
        room={room}
      />
    );
  }
}

const ConnectedAdventureForUser = UserInjector.connect(AdventureForUser);
export {
  ConnectedAdventureForUser as default
}