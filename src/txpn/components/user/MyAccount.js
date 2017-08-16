// @flow
import React, { Component } from 'react';
import {
  Route,
  Link,
} from 'react-router-dom'

import { UserDataViewer } from 'txpn/components/common/UserData';

const MyAccount = ({ match }) => {
  return (
    <div>
      <h3>User info.</h3>
      <UserDataViewer />
    </div>
  );
};
export default MyAccount;