// @flow

import { Door } from './Door';

export class Room {
  id: string;
  name: string;
  description: string;
  doors: Door[];
}