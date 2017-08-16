// @flow
import React, { Component } from 'react';

import gameState from 'txpn/core/state';
import { World } from 'txpn/core/dataModel';
import DataInjector from 'txpn/components/common/DataInjector'

export type WorldsProps = {
  worlds: Array<World>,
};

const WorldsInjector: DataInjector<Array<World>> = (
  new DataInjector(gameState.stores.worlds, 'worlds'));

export {
  WorldsInjector as default,
  World,
}
