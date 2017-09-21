import React from 'react';
import PropTypes from 'prop-types';

import Door from 'txpn/core/models/Door';
import gameEngine from 'txpn/runtime/gameEngine';

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
      <label
        className="label--right"
        htmlFor={`door-button-${door.id}`}>{door.name}</label>
    </div>
  );
}

Door.propTypes = {
  door: PropTypes.instanceOf(Door),
};
