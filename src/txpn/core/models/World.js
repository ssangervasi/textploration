import { Model, Field } from 'txpn/core/ORM';

export default class World extends Model {
  static fields = {
    name: new Field(),
    description: new Field(),
  };

  getStartingRegion() {
    return this.regions.reduce(
      (current, region) => (region.isHub ? region : current)
    );
  }
}
