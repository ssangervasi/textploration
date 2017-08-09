// @flow
import Room from './Room';

export default class Region {
  id: string;
  name: string;
  rooms: Room[];

  constructor(values: {...Region}) {
    Object.assign(this, values);
  }
}
