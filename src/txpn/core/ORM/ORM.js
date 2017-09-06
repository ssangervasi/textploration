import { forEachOwn } from 'txpn/utils'
import UId from './UId';

export default class ORM {
  constructor({ database }) {
    this.database = database;
  }

  register(...models) {
    models.forEach(Model => {
      // Attach database methods.
      const database = this.database;
      database.register(Model);
      Model.prototype.save = function save() {
        database.save(this);
      };
      Model.get = function get(id) {
        return database.get(Model, id);
      };
      // Attach fields.
      forEachOwn(Model.fields, (fieldName, field) => {
        field.attach({
          Model: Model,
          name: fieldName,
          database: database,
        });
      });
    });
  }
}
