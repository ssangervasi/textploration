import './orm';
import {
  Door,
  Region,
  Room,
  World,
  Explorer,
  User,
  AdventureState,
} from 'txpn/core/models';

const nickie = new User({username: 'Nickie'}).save();
const samPal = new Explorer({
  name: 'Sam Pal',
  user: nickie,
}).save();

const nightVale = new World({
  name: 'Nightvale',
  description: 'Welcome to here.',
}).save();

const nightValePublicLibrary = new Region({
  name: 'Nightvale Public Library',
  isHub: true,
  world: nightVale,
}).save();

const entranceHall = new Room({
  name: 'Entrance Hall',
  description: 'The spooky spooks.',
  region: nightValePublicLibrary,
}).save();

const checkoutCounter = new Room({
  name: 'Checkout Counter',
  description: "Don't stay here too long...",
  region: nightValePublicLibrary,
}).save();

const doorToCheckoutCounter = new Door({
  name: 'Library Front Door',
  number: 1,
  origin: entranceHall,
  destination: checkoutCounter,
}).save();

const doorToEntranceHall = new Door({
  name: 'Library Front Door',
  number: 1,
  origin: checkoutCounter,
  destination: entranceHall,
}).save();

const desertBluffs = new World({
  name: 'Desert Bluffs',
  description: 'We are the worst.',
}).save();

const adventure = new AdventureState({
  explorer: samPal,
  room: entranceHall,
}).save();

const sampleData = {
  user: nickie,
  explorer: samPal,
  adventure: adventure,
  rooms: [entranceHall, checkoutCounter],
  doors: [doorToCheckoutCounter, doorToEntranceHall],
  regions: [nightValePublicLibrary],
  worlds: [nightVale, desertBluffs],
}

export {
  sampleData as default
}
