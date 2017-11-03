import React from 'react';
import PropTypes from 'prop-types';

import Door from 'txpn/core/models/Door';

export default function DoorButton({ door, goThroughDoor }) {
  return (
    <div className="door-button">
      <button
        className="button"
        id={`door-button-${door.id}`}
        onClick={() => goThroughDoor(door)}
      >
        {door.number}
      </button>
      <label
        className="label--right"
        htmlFor={`door-button-${door.id}`}>{door.name}</label>
    </div>
  );
}

DoorButton.propTypes = {
  door: PropTypes.instanceOf(Door),
  door: PropTypes.func.isRequired,
};
