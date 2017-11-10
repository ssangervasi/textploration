import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import gameEngine from 'txpn/runtime/gameEngine';
import gameState from 'txpn/runtime/gameState';

export default class DonePage extends React.Component {
  /* Events */
  state = {
    done: false,
  };

  handleConfirm = () => {
    gameEngine.startAdventure();
    this.setState({ done: true });
  };

  handleRestart = () => {
    gameEngine.resetAdventureStart();
  };

  render() {
    if (this.state.done) {
      return <Redirect to={'/adventure/continue'} />;
    }
    const adventureStart = gameState.adventureStart.get();
    const { explorer, world } = adventureStart;
    if (explorer == null || world == null) {
      return (
        <div>
          <h3>Something went wrong!</h3>
          <p>
            <button className="button" onClick={this.handleRestart}>
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
          <button className="button" onClick={this.handleConfirm}>
            Confirm and adventure!
          </button>
        </p>
        <p>
          <button className="button" onClick={this.handleRestart}>
            Restart
          </button>
        </p>
      </div>
    );
  }
}

DonePage.PropTypes = {
  explorer: PropTypes.shape({ name: PropTypes.string.isRequired }),
  world: PropTypes.shape({ name: PropTypes.string.isRequired }),
  handleConfirm: PropTypes.func.isRequired,
  handleRestart: PropTypes.func.isRequired,
};
