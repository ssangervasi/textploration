// @flow
import React, { Component } from 'react';

import AdventureState from 'txpn/state/adventureState';
import { User } from 'txpn/core/models';

import DataInjector from 'txpn/components/common/DataInjector'

export type UserProps = {
  user: User,
};

const UserInjector: DataInjector<User> = (
  new DataInjector(AdventureState.stores.user, 'user'));

export {
  UserInjector as default
}
