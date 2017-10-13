import React from 'react';

import gameEngine from 'txpn/runtime/gameEngine';
import WorldList from './WorldList';

const Discover = () => {
  const worlds = gameEngine.getWorlds();
  return (
    <div>
      <WorldList worlds={worlds} />
    </div>
  );
};
export default Discover;
