// @flow
import React from 'react';

// $FlowFix:Destructuring
const ExplorerDetail = ({ adventurer }) => {
  const onSelectAdventurer = () => { console.log(adventurer)};
  return (
    <div class="adventurer section">
      <h2>Create your Adventurer</h2>
      <div class="input-text">
        <label htmlFor="idAdventurer"></label>
        <input id="idAdventurer"
               placeholder="Adven Von Turer"
               value={adventurer.name}
        />
      </div>

      <button onClick={onSelectAdventurer}>
        Done
      </button>
    </div>
  );
}

export default ExplorerDetail;