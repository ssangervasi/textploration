import React from 'react';
import PropTypes from 'prop-types';

import TxpnConsole from 'txpn/components/common/TxpnConsole';

const DoorItem = ({ door, handleSelectDoor }) => (
  <li>
    <button id={`door-item-${door.id}`} onClick={()=> handleSelectDoor(door)}>
      {door.number}
    </button>
    <label htmlFor={`door-item-${door.id}`}>{door.name}</label>
  </li>
);

export default function Adventure({
  explorer,
  world,
  region,
  room,
  doors,
  // handleSelectDoor,
}) {
  const handleSelectDoor = (door) => {
    console.log(door);
  }
  const doorItems = doors.map(door => (
    <DoorItem door={door} handleSelectDoor={handleSelectDoor} key={door.id} />
  ));
  return (
    <section>
      <h2>Adventure</h2>
      <section>
        <h3>Overview</h3>
        <dl>
          <dt>Explorer</dt>
          <dd>{explorer.name || 'Anon'}</dd>
          <dt>World</dt>
          <dd>{world.name} </dd>
          <dt>Region</dt>
          <dd>{region.name}</dd>
        </dl>
      </section>
      <section>
        <h3>
          <small>Room: </small>
          {room.name}
        </h3>
        <p>{room.description}</p>

        <ol className="list--style-none">{doorItems}</ol>
      </section>

      <TxpnConsole />
    </section>
  );
}
