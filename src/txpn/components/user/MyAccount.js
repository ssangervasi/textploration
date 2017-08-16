// @flow
import React from 'react';

import UserInjector from 'txpn/components/user/UserInjector';
import ExplorerInjector from 'txpn/components/explorer/ExplorerInjector';

const MyAccount = ({ user, explorer }) => {
  return (
    <div>
      <h3>User info.</h3>
      <dl>
        <dt>Username</dt>
        <dd>
          {user.username}
        </dd>
        <dt>Explorer</dt>
        <dd>{explorer.name} ({explorer.id})</dd>
      </dl>
    </div>
  );
};
const ConnectedMyAccount = (
  ExplorerInjector.connect(
    UserInjector.connect(MyAccount)
  )
);
export {
  ConnectedMyAccount as default
};