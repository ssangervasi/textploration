import React from 'react';
import PropTypes from 'prop-types';

import TxpnConsole from 'txpn/components/common/TxpnConsole';
import Overview from './Overview';
import Room from './Room';

export default function Adventure({
  explorer,
  world,
  region,
  room,
  doors,
}) {
  return (
    <section>
      <h2>Adventure</h2>
      <Overview explorer={explorer.name} world={world.name} region={region.name} />
      <Room room={room} doors={doors} />
      <TxpnConsole />
    </section>
  );
}
