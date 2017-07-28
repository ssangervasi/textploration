
// Todo: Seperate file
export class Door {
  id?: string;
  origin?: Room;
  name: string
  number: number;
  destination: Room;
}

// Todo: Seperate file
export class Room {
  id?: string;
  name: string;
  description: string;
  doors: Door[];

  addDoor(): void {

  }
}

export class Region {
  id?: string;
  name: string;
  rooms: Room[];
}
