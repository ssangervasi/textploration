import { Model, Field, ForeignKey } from 'txpn/core/ORM';
import { World } from '.';

export default class Region extends Model {
  static fields = {
    name: new Field(),
    world: new ForeignKey(World, 'regions'),
  };
}
