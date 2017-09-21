import React from 'react';
import PropTypes from 'prop-types';

export default function DonePage({ explorer, world, handleConfirm, handleRestart }) {
  if (explorer == null || world == null) {
    return (
      <div>
        <h3>Something went wrong!</h3>
        <p>
          <button className="button" onClick={handleRestart}>
            Click here to retry
          </button>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h3>All ready!</h3>
      <p>
        Looks like <strong>{explorer.name}</strong> is going to{' '}
        <strong>{world.name}</strong>.
      </p>
      <p>
        <button className="button" onClick={handleConfirm}>
          Confirm and adventure!
        </button>
      </p>
      <p>
        <button className="button" onClick={handleRestart}>
          Retry
        </button>
      </p>
    </div>
  );
}

DonePage.PropTypes = {
  explorer: PropTypes.shape({ name: PropTypes.string.isRequired }),
  world: PropTypes.shape({ name: PropTypes.string.isRequired }),
  handleConfirm: PropTypes.func.isRequired,
  handleRestart: PropTypes.func.isRequired,
};
