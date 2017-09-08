import { Model, Field, ForeignKey } from 'txpn/core/ORM';
import Region from './Region';

export default class Room extends Model {
  static fields = {
    name: new Field(),
    description: new Field(),
    region: new ForeignKey(Region, 'rooms'),
  };
}
