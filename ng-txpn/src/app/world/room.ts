import { Door } from './door';

export class Room {
  id?: string;
  name: string;
  description: string;
  doors: Door[];
}