import React from 'react';

const UserInfo = ({ user }) => {
  const explorers = user.explorers;
  const explorerItems = explorers.map(explorer => (
    <li key={explorer.id}>{explorer.name}</li>
  ));
  return (
    <div>
      <h3>User Info</h3>
      <dl>
        <dt>Username</dt>
        <dd>{user.username}</dd>
        <dt>Explorers</dt>
        <dd>
          <ul>{explorerItems}</ul>
        </dd>
      </dl>
    </div>
  );
};

export default (UserInfo);
