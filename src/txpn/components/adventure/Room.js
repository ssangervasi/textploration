import React from 'react';
import PropTypes from 'prop-types';

import { Room as RoomModel } from 'txpn/core/models';
import DoorButton from './DoorButton';

export default function Room({ room, doors }) {
  const doorItems = doors.map(door => (
    <li key={door.id}>
      <DoorButton door={door} />
    </li>
  ));
  return (
    <section className="room">
      <h3>
        <small>Room: </small>
        {room.name}
      </h3>
      <p>{room.description}</p>
      <ol className="room__door-list">{doorItems}</ol>
    </section>
  );
}

Room.propTypes = {
  room: PropTypes.instanceOf(RoomModel).isRequired,
};
