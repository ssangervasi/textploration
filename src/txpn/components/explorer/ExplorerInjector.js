// @flow
import React, { Component } from 'react';

import state from 'txpn/store/gameState';
import { Explorer } from 'txpn/core/models';

import DataInjector from 'txpn/components/common/DataInjector'

export type ExplorerProps = {
  explorer: Explorer,
};

const ExplorerInjector: DataInjector<Explorer> = (
  new DataInjector(state.adventure.explorer, 'explorer'));

export {
  ExplorerInjector as default
}
