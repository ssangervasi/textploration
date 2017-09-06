//
import {
  Door,
  Region,
  Room,
  World,
  Explorer,
  User,
} from './models';

class SampleData {

  constructor() {
    this.user = new User({username: 'Nickie'});
    this.explorer = new Explorer({name: 'Sam Pal'});

    const entranceHall = new Room({
      name: 'Entrance Hall',
      description: 'The spooky spooks.',
      doorIds: [],
    });

    const checkoutCounter = new Room({
      name: 'Checkout Counter',
      description: "Don't stay here too long...",
      doorIds: [],
    });

    const d2CheckoutCounter = new Door({
      name: 'Library Front Door',
      number: 1,
      originRoomId: entranceHall.id,
      destinationRoomId: checkoutCounter.id,
    });

    const d2EntranceHall = new Door({
      name: 'Library Front Door',
      number: 1,
      originRoomId: checkoutCounter.id,
      destinationRoomId: entranceHall.id,
    });

    checkoutCounter.doorIds.push(d2EntranceHall.id);
    entranceHall.doorIds.push(d2CheckoutCounter.id);

    this.rooms = [entranceHall, checkoutCounter];
    this.doors = [d2CheckoutCounter, d2EntranceHall];

    const nvpl = new Region({
      name: 'Nightvale Public Library',
      roomIds: [
        entranceHall.id,
        checkoutCounter.id,
      ],
    });

    this.regions = [nvpl];

    const nv = new World({
      name: 'Nightvale',
      description: 'Welcome to here.',
    });
    const db = new World({
      name: 'Desert Bluffs',
      description: 'We are the worst.',
    });

    this.worlds = [nv, db];
  }
}

export default SampleData;
