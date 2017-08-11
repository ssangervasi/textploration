// @flow
import React, { Component } from 'react';

import UserData, { UserDataProps } from 'txpn/components/common/UserData';
import Adventure from 'txpn/components/adventure/Adventure';


class AdventureForUser extends Component {
  props: UserDataProps;

  render() {
    // TODO: Make this dynamic.
    const explorer = this.props.userData.explorer;
    const world = this.props.userData.worlds[0];
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

const ConnectedAdventureForUser = UserData.connect(AdventureForUser);
export {
  ConnectedAdventureForUser as default
}