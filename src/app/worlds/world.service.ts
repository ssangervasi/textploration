import { Injectable } from '@angular/core';

import { resolveLater } from 'app/utils/async'

import { World } from './world'

const WORLDS: World[] = [
  new World({
    id: 1,
    name: 'Nightvale',
  }),
  new World({
    id: 2,
    name: 'Desert Bluffs',
  }),
];

@Injectable()
export class WorldService {

  getWorlds(): Promise<World[]> {
    return resolveLater(WORLDS, .5);
  }
}