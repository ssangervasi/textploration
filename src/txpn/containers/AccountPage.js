import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from 'txpn/runtime/auth';
import UserInfo from 'txpn/components/account/UserInfo';

const AccountPage = () => {
  return (
    <section>
      <UserInfo user={auth.user} />
    </section>
  );
};

export default AccountPage;
