// @flow
import { Room } from './Room';

export class Door {
  id: string;
  origin: Room;
  name: string
  number: number;
  destination: Room;
}