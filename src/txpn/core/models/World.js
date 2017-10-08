import { Model, Field, ForeignKey } from 'txpn/core/ORM';
import User from './User';

export default class World extends Model {
  static fields = {
    name: new Field(),
    description: new Field(),
    creator: new ForeignKey(User, 'createdWorlds'),
  };

  getStartingRegion() {
    return this.regions.reduce(
      (current, region) => (region.isHub ? region : current)
    );
  }
}
