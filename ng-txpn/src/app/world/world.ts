import { Region } from './region';

export class World {
  name: string;
  regions: Region[];

  private id: number;

  constructor(
    {name, id, regions}: {
      name: string,
      id?: number,
      regions?: Region[],
  }) {
    this.name = name;
    this.id = id || Math.random();
    this.regions = regions || [];
  };
  turn(): void {};
}