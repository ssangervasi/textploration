import { Injectable } from '@angular/core';

import { resolveLater } from 'app/utils/async';

import { World } from './world';
import { Region } from './region';
import { Room } from './room';
import { Door } from './door';


const entranceHall: Room = {
  name: 'Entrance Hall',
  description: 'The spooky spooks.',
  doors: [],
};

// throw butts;

const checkoutCounter: Room = {
  name: 'Checkout Counter',
  description: "Don't stay here too long...",
  doors: [],
};

const d2CheckoutCounter: Door = {
  id: '1,1',
  name: 'Library Front Door',
  number: 1,
  destination: checkoutCounter,
};

const d2EntranceHall: Door = {
  id: '1,1',
  name: 'Library Front Door',
  number: 1,
  destination: entranceHall,
};

checkoutCounter.doors.push(d2EntranceHall);
entranceHall.doors.push(d2CheckoutCounter);

const nvpl: Region = {
  name: 'Nightvale Public Library',
  rooms: [
    entranceHall,
    checkoutCounter,
  ],
};

const WORLDS: World[] = [
  new World({
    id: 1,
    name: 'Nightvale',
    regions: [ nvpl ],
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