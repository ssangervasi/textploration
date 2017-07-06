
export class Adventurer {
  private id: number;
  constructor(public name: string) {
    this.id = Math.round(Math.random() * (Math.pow(10, 10)));
  }

  toString(): string {
    return `Adventurer(name='${this.name}', id=${this.id})`;
  }
}
