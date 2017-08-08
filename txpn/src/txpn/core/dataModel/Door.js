// @flow
import Room from './Room';

export default class Door {
  id: string;
  origin: Room;
  name: string;
  number: number;
  destination: Room;

  constructor(values: {id?: string, ...Door}) {
    Object.assign(this, values);
  }
}