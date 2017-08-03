// @flow

export class Explorer {
  id: number;
  name: string;
  
  constructor(name: string) {
    this.id = Math.round(Math.random() * (Math.pow(10, 10)));
  }

  toString(): string {
    return `Adventurer(name='${this.name}', id=${this.id})`;
  }
}
