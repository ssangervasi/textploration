// @flow

export default class Explorer {
  id: number;
  name: string;
  
  constructor(name: string) {
    this.name = name;
    this.id = Math.round(Math.random() * (Math.pow(10, 10)));
  }

  toString(): string {
    return `Explorer(name='${this.name}', id=${this.id})`;
  }
}
