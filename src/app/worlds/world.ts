export class World {
  private id: number;
  public name: string;
  constructor({id, name}: {id: number, name: string}) {
    this.id = id;
    this.name = name;
  };
  turn(): void {};
}