import React from 'react';
import PropTypes from 'prop-types';

import gameEngine from 'txpn/runtime/gameEngine';
import Door from 'txpn/core/models/Door';

export default function DoorButton({ door }) {
  return (
    <div className="door-button">
      <button
        className="button"
        id={`door-button-${door.id}`}
        onClick={() => gameEngine.goThroughDoor(door)}
      >
        {door.number}
      </button>
      <label className="label--right" htmlFor={`door-button-${door.id}`}>
        {door.name}
      </label>
    </div>
  );
}

DoorButton.propTypes = {
  door: PropTypes.instanceOf(Door),
};
