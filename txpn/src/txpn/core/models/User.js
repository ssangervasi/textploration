import { Model, Field } from 'txpn/core/ORM';

export default class User extends Model {
  static fields = {
    username: new Field(),
  };
}
