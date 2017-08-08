// @flow
import React from 'react';

import WorldDetail from './WorldDetail';

// $FlowFix: Destructuring
const WorldList = ({ worlds, adventurer }) => {
  let selectedWorld;
  const onSelectWorld = world => {
    console.log(world);
    selectedWorld = world;
  };
  const worldItems = worlds.map(
    world => (
      <li onClick={() => onSelectWorld(world)}>
        <h2>
          {world.name}
        </h2>
      </li>
    )
  );
  return (
    <div className="worlds section">
      <h2>Choose a world:</h2>
      
      <h3>
        <span>
         {adventurer.name} ({adventurer.id}) is off to...
        </span>
      </h3>
      
      <ul>
        {worldItems}
      </ul>  

      <WorldDetail world={selectedWorld} />
    </div>
  );
}

export default WorldList;