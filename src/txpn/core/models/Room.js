import { Model, Field, ForeignKey } from 'txpn/core/ORM';
import { Region } from '.';

export default class Room extends Model {
  static fields = {
    name: new Field(),
    description: new Field(),
    region: new ForeignKey(Region, 'rooms'),
  };
}
