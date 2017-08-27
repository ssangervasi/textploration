// @flow
import React, { Component } from 'react';

import AdventureState from 'txpn/state/adventureState';
import { Explorer } from 'txpn/core/models';

import DataInjector from 'txpn/components/common/DataInjector'

export type ExplorerProps = {
  explorer: Explorer,
};

const ExplorerInjector: DataInjector<Explorer> = (
  new DataInjector(AdventureState.stores.explorer, 'explorer'));

export {
  ExplorerInjector as default
}
