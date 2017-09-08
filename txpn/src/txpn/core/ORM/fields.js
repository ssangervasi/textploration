import { dd } from 'txpn/utils';
import BaseModel from './Model';
import { InvalidFieldModelError, InvalidForeignKeyModelErrror } from './errors';

export class Field {
  isAttached = false;

  attach({ Model, name, database }) {
    if (this.isAttached) {
      return;
    }
    if (!(Model.prototype instanceof BaseModel)) {
      throw new InvalidFieldModelError(dd`
        Cannot attach Field to object that is not an
        instance of Model: ${Model}.
      `);
    }
    this.Model = Model;
    this.name = name;
    this.database = database;
    this.defineModelProperty();
    this.isAttached = true;
  }

  defineModelProperty() {
    // Need a refernce to `this` for the getter method.
    const field = this;
    const fieldName = this.name;
    Object.defineProperty(this.Model.prototype, fieldName, {
      configurable: false,
      enumerable: true,
      get: function getField() {
        return this.data[fieldName];
      },
      set: function setField(value) {
        this.data[fieldName] = field.resolve(value);
      },
    });
  }

  resolve(value) {
    return value;
  }
}

export class ForeignKey extends Field {
  constructor(ParentModel, reverseName) {
    super();
    if (!(ParentModel.prototype instanceof BaseModel)) {
      throw new InvalidForeignKeyModelErrror(dd`
        Cannot create ForeignKey to object that is not an
        instance of Model: ${ParentModel}.
      `);
    }
    this.ParentModel = ParentModel;
    this.reverseName = reverseName;
  }

  defineModelProperty() {
    this.defineChildProperty();
    this.defineParentProperty();
  }

  defineChildProperty() {
    // Need a refernce to `this` for the getter method.
    const field = this;
    const fieldName = this.name;
    Object.defineProperty(this.Model.prototype, fieldName, {
      configurable: false,
      enumerable: true,
      get: function getParent() {
        return field.getParent(this);
      },
      set: function setParent(parent) {
        this.data[fieldName] = field.resolve(parent);
      },
    });
  }

  defineParentProperty() {
    // Need a refernce to `this` for the getter method.
    const field = this;
    const fieldName = this.reverseName;
    this.ParentModel.fields[fieldName] = this;
    Object.defineProperty(this.ParentModel.prototype, fieldName, {
      configurable: false,
      enumerable: true,
      get: function getChildren() {
        return field.getChildren(this);
      },
    });
  }

  getParent(childInstance) {
    const parentId = childInstance.data[this.name];
    if (parentId != null) {
      const parent = this.ParentModel.get(parentId);
      return parent;
    }
  }

  getChildren(parentInstance) {
    const parentId = parentInstance.id;
    const model = this.Model;
    const childSet = this.database.getModelSet(model);
    if (parentId != null) {
      return childSet.filter({ [this.name]: parentId });
    }
    return [];
  }

  resolve(value) {
    if (value instanceof this.ParentModel) {
      return value.id;
    }
    return value;
  }
}
