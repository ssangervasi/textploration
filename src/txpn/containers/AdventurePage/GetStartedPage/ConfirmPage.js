import React from 'react';

import subscribeToProp from 'txpn/components/HOCs/subscribeToProp';
import gameEngine from 'txpn/runtime/gameEngine';
import gameState from 'txpn/runtime/gameState';

export class ConfirmPage extends React.Component {
  /* Events */
  handleConfirm = () => {
    const adventureStart = this.props.adventureStart;
    adventureStart.is_confirmed = true;
    gameState.adventureStart.update(adventureStart.save());
  };

  handleRestart = () => {
    gameEngine.resetAdventureStart();
  };

  render() {
    const { explorer, world } = this.props.adventureStart;
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

const SubscribedConfirmPage = subscribeToProp({
  prop: 'adventureStart',
  subject: gameState.adventureStart.subject,
})(ConfirmPage);
export { SubscribedConfirmPage as default };
