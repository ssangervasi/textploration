import { Model, Field, ForeignKey } from 'txpn/core/ORM';
import User from './User';

export default class Explorer extends Model {
  static fields = {
    name: new Field(),
    user: new ForeignKey(User, 'explorers'),
  };
}
