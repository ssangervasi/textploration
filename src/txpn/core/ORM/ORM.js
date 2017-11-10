import { forEachOwn } from 'txpn/utils';
import { Field } from './fields';

export default class ORM {
  constructor({ database }) {
    this.database = database;
  }

  register(...models) {
    models.forEach(Model => {
      // Attach database methods.
      Model.orm = this;
      this.database.register(Model);
      // Attach fields.
      if (!Model.fields.hasOwnProperty('id')) {
        Model.fields['id'] = new Field();
      }
      forEachOwn(Model.fields, (fieldName, field) => {
        field.attach({
          Model: Model,
          name: fieldName,
          database: this.database,
        });
      });
    });
  }

  get(Model, id) {
    return this.database.get(Model, id);
  }

  save(instance) {
    this.database.save(instance);
  }
}
