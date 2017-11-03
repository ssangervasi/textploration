import React from 'react';
import PropTypes from 'prop-types';

import { Room as RoomModel } from 'txpn/core/models';
import DoorButton from 'txpn/containers/AdventurePage/DoorButton';

export default function Room({ room, doors }) {
  const doorItems = doors.map(door => (
    <li key={door.id}>
      <DoorButton door={door} />
    </li>
  ));
  return (
    <section className="room grid-parent">
      <h3 className="grid-100">
        <small>Room: </small>
        {room.name}
      </h3>
      <p className="grid-100">{room.description}</p>
      <ol className="room__door-list grid-100">{doorItems}</ol>
    </section>
  );
}

Room.propTypes = {
  room: PropTypes.instanceOf(RoomModel).isRequired,
};
