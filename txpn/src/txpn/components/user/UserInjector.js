// @flow
import React, { Component } from 'react';

import gameState from 'txpn/core/state';
import { User } from 'txpn/core/dataModel';

import DataInjector from 'txpn/components/common/DataInjector'

export type UserProps = {
  user: User,
};

const UserInjector: DataInjector<User> = (
  new DataInjector(gameState.stores.user, 'user'));

export {
  UserInjector as default
}
