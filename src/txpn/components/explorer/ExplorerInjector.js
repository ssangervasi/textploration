// @flow
import React, { Component } from 'react';

import gameState from 'txpn/core/state';
import { Explorer } from 'txpn/core/dataModel';

import DataInjector from 'txpn/components/common/DataInjector'

export type ExplorerProps = {
  explorer: Explorer,
};

const ExplorerInjector: DataInjector<Explorer> = (
  new DataInjector(gameState.stores.explorer, 'explorer'));

export {
  ExplorerInjector as default
}
