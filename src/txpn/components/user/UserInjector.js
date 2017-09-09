import React from 'react';

import state from 'txpn/runtime/gameState';
import { User } from 'txpn/core/models';

import DataInjector from 'txpn/components/common/DataInjector'


const UserInjector = (
  new DataInjector(state.user, 'user'));

export {
  UserInjector as default
}
