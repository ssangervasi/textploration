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

const nightvale = new World({
  name: 'Nightvale',
  description: 'Welcome to here.',
}).save();

const nightvalePublicLibrary = new Region({
  name: 'Nightvale Public Library',
  isHub: true,
  world: nightvale,
}).save();

const entranceHall = new Room({
  name: 'Entrance Hall',
  description: dd`
    Welcome to the nightvale Public Library.
    Please stay forever.
  `,
  region: nightvalePublicLibrary,
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
  region: nightvalePublicLibrary,
}).save();

const death = new Room({
  name: 'You are dead',
  description: dd`
    The book was bait for a lurking librarian.

    Your death was foretold, but never told to you.

    At least you get to find out about it now...
  `,
  region: nightvalePublicLibrary,
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

const desertBluffsBluffs = new Region({
  name: 'The Bluffs',
  isHub: true,
  world: desertBluffs,
}).save();

const desertBluffsCliff = new Room({
  name: 'The cliff on the bluffs',
  description: dd`
    From up here you can see what a horrible place
    the town of Desert Bluffs really is.
  `,
  region: desertBluffsBluffs,
}).save();

const adventure = new AdventureState({
  explorer: samPal,
  room: entranceHall,
}).save();

const sampleData = {
  user: nickie,
  explorer: samPal,
  adventure: adventure,
  rooms: [entranceHall, checkoutCounter, desertBluffsCliff],
  doors: [doorToCheckoutCounter, doorToEntranceHall],
  regions: [nightvalePublicLibrary, desertBluffsBluffs],
  worlds: [nightvale, desertBluffs],
}

export {
  sampleData as default
}
