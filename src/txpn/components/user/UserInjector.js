// @flow
import React, { Component } from 'react';

import state from 'txpn/store/appState';
import { User } from 'txpn/core/models';

import DataInjector from 'txpn/components/common/DataInjector'

export type UserProps = {
  user: User,
};

const UserInjector: DataInjector<User> = (
  new DataInjector(state.user, 'user'));

export {
  UserInjector as default
}
