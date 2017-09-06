//
import { Model, Field } from 'txpn/core/ORM';

export default class World extends Model {
  static fields = {
    name: new Field(),
    description: new Field(),
  };
}
