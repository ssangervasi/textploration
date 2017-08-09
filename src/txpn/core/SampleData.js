// @flow
import {
  Door,
  Region,
  Room,
  World,
  Explorer,
} from './dataModel';

class SampleData {
  worlds: World[];
  explorer: Explorer;

  constructor() {
    this.explorer = new Explorer('Sam Pal');

    const entranceHall: Room = new Room({
      name: 'Entrance Hall',
      description: 'The spooky spooks.',
      doors: [],
    });
  
    const checkoutCounter: Room = new Room({
      name: 'Checkout Counter',
      description: "Don't stay here too long...",
      doors: [],
    });
  
    const d2CheckoutCounter: Door = new Door({
      id: '1,1',
      name: 'Library Front Door',
      number: 1,
      destination: checkoutCounter,
    });
  
    const d2EntranceHall: Door = new Door({
      id: '1,1',
      name: 'Library Front Door',
      number: 1,
      destination: entranceHall,
    });
  
    checkoutCounter.doors.push(d2EntranceHall);
    entranceHall.doors.push(d2CheckoutCounter);
  
    const nvpl: Region = new Region({
      name: 'Nightvale Public Library',
      rooms: [
        entranceHall,
        checkoutCounter,
      ],
    });
  
    this.worlds = [
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
  }
}

export default SampleData;