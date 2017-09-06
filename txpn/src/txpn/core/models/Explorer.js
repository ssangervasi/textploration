import { Model, Region, ForeignKey } from 'txpn/core/ORM';
import { User } from '.';

export default class Explorer extends Model {
  static fields = {
    name: new Field(),
    user: new ForeignKey(User, 'explorers'),
  };
}
