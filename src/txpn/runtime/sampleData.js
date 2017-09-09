import { dd } from 'txpn/utils';
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
  description: dd`
    Welcome to the Nightvale Public Library.
    Please stay forever.
  `,
  region: nightValePublicLibrary,
}).save();

const checkoutCounter = new Room({
  name: 'Checkout Counter',
  description: dd`
    The books on the counter are glossy and fresh
    in a way that makes you want to pick them up.

    "Edible Plants and Animals of the California Desert"
    is the title of one such volume.

    Surely, today is the day you finally learn about
    the flora and fauna of your local desert biome.
  `,
  region: nightValePublicLibrary,
}).save();

const death = new Room({
  name: 'You are dead',
  description: dd`
    The book was bait for a lurking librarian.

    Your death was foretold, but never told to you.

    At least you get to find out about it now...
  `,
  region: nightValePublicLibrary,
}).save();

const doorToCheckoutCounter = new Door({
  name: 'Library Front Door',
  number: 1,
  origin: entranceHall,
  destination: checkoutCounter,
}).save();

const doorToEntranceHall = new Door({
  name: 'Exit the library',
  number: 1,
  origin: checkoutCounter,
  destination: entranceHall,
}).save();

const doorPickUpBook = new Door({
  name: 'Pick up the book',
  number: 2,
  origin: checkoutCounter,
  destination: death,
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
