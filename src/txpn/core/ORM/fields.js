export class Field {
  attach({ Model, name, database }) {
    this.Model = Model;
    this.name = name;
    this.database = database;
    this.defineModelProperty();
  }

  defineModelProperty() {
    const fieldName = this.name;
    Object.defineProperty(this.Model.prototype, fieldName, {
      configurable: false,
      enumerable: true,
      get: function getField() {
        return this.data[fieldName];
      },
      set: function setField(value) {
        this.data[fieldName] = value;
      },
    });
  }
}

export class ForeignKey extends Field {
  constructor(ParentModel, reverseName) {
    super();
    this.ParentModel = ParentModel;
    this.reverseName = reverseName;
  }

  defineModelProperty() {
    this.defineChildProperty();
    this.defineParentProperty();
  }

  defineChildProperty() {
    const fieldName = this.name;
    // Need a refernce to `this` for the getter method.
    const field = this;
    Object.defineProperty(this.Model.prototype, fieldName, {
      configurable: false,
      enumerable: true,
      get: function getParent() {
        return field.getParent(this);
      },
      set: function setParent(parent) {
        this.data[fieldName] = parent.id;
      },
    });
  }

  defineParentProperty() {
    const fieldName = this.reverseName;
    this.ParentModel.fields[fieldName] = this;
    // Need a refernce to `this` for the getter method.
    const field = this;
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
}
