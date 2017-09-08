import React from 'react';

import state from 'txpn/store/gameState';

const MyAccount = () => {
  return (
    <div>
      <h3>User info.</h3>
      <dl>
        <dt>Username</dt>
        <dd>
          {state.user.username}
        </dd>
        <dt>Explorer</dt>
        <dd>
          {state.adventure ?
            state.adventure.explorer.name
            : 'None'
          }
        </dd>
      </dl>
    </div>
  );
};

export { MyAccount as default }
