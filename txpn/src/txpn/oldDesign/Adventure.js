// @flow
import React from 'react';

import TxpnConsole from './TxpnConsole';

const DoorItem = ({ door }) => {
  const doorId = `door-${door.id}`;
  const openDoor = () => { console.log(door) };
  return (
    <li>
      <button id={doorId}
              onClick={openDoor}>
        { door.number }
      </button>
      <label htmlFor={doorId}>
        { door.name }
      </label>
    </li>
  );
}

// $FlowFix: Destructuring
const Adventure = ({ explorer, world, region, room }) => {
  const doorItems = room.doors.map(
    door => (<DoorItem door={door} />)
  );
  return (
    <div>
      <h2>Adventure</h2>
      <section>
        <h3>Overview</h3>
        <dl>
          <dt>Explorer</dt>
            <dd>{ explorer.name || 'Anon' }</dd>
          <dt>World</dt>
            <dd>{ world.name } </dd>
          <dt>Region</dt>
            <dd>{ region.name }</dd>
        </dl>
      </section>
      <section>
        <h3>
          <small>Room: </small>{ room.name }
        </h3>
        <p>{ room.description }</p>
        
        <ol className="list--style-none">
          {doorItems}
        </ol>
      </section>

    </div>
      // <TxpnConsole />
  );
}

export default Adventure;