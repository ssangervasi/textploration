// 
import UId from 'txpn/core/UId';

function forEachOwn(
  obj,
  fn
) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      fn(prop, obj[prop], obj);
    }
  }
}






// class Model<DataType: ModelDataType, FieldsType> {
class Model {

  // Defined by `ORM.register`

  constructor(data) {
    if (data == null) {
      this.data = { id: undefined };
    } else {
      this.data = { id: undefined, ...data };
    }
  }

  get id() {
    return this.data.id;
  }

  set id(value) {
    this.data.id = value;
  }

  toString() {
    return `${this.constructor.name} { ${JSON.stringify(this.data)} }`;
  }
}

class Field {

  attach({
    model,
    name,
    database,
  }) {
    this.model = model;
    this.name = name;
    this.database = database;
    this.defineModelProperty();
  }
  defineModelProperty() {
    const fieldName = this.name;
    Object.defineProperty(
      this.model.prototype,
      fieldName,
      { configurable: false,
        enumerable: true,
        get: (function getField() {
          return this.data[fieldName];
        }),
        set: (function setField(value) {
          this.data[fieldName] = value;
        }),
      }
    );
  };
}

class ForeignKey extends Field {

  constructor(
    parent,
    reverseName,
  ) {
    super();
    this.parentModel = parent;
    this.reverseName = reverseName;
  }

  defineModelProperty() {
    this.defineChildProperty();
    this.defineParentProperty();
  }

  defineChildProperty () {
    const model = this.model;
    const fieldName = this.name;
    // Need a refernce to `this` for the getter method.
    const field = this;
    Object.defineProperty(
      this.model.prototype,
      fieldName,
      { configurable: false,
        enumerable: true,
        get: (function getParent() {
          return field.getParent(this);
        }),
        set: (function setParent(parent) {
          this.data[fieldName] = parent.id;
        }),
      }
    );
  }

  defineParentProperty() {
    const parentModel = this.parentModel;
    const fieldName = this.reverseName;
    this.parentModel.fields[fieldName] = this;
    // Need a refernce to `this` for the getter method.
    const field = this;
    Object.defineProperty(
      this.parentModel.prototype,
      fieldName,
      { configurable: false,
        enumerable: true,
        get: (function getChildren() {
          return field.getChildren(this);
        }),
      }
    );
  }
  getParent(
    childInstance
  ) {
    const parentId = ((childInstance.data[this.name]));
    if (parentId != null) {
      const parent = (this.parentModel.get(parentId));
      return parent;
    }
  }
  getChildren(
    parentInstance
  ) {
    const parentId = parentInstance.id;
    const model = ((this.model));
    const childSet = this.database.getModelSet(model);
    if (parentId != null) {
      return childSet.filter({ [this.name]: parentId });
    }
    return [];
  }
}

class ORM {

  constructor({
    database,
  }) {
    this.database = database;
  }

  register(...models) {
    models.forEach(model => {
      // Attach database methods.
      const database = this.database;
      database.register(model);
      model.prototype.save = function save() {
        database.save(this);
      };
      model.get = function get(id) {
        return database.get(model, id);
      };
      // Attach fields.
      forEachOwn(model.fields,
        (fieldName, field) => {
          field.attach({
            model: model,
            name: fieldName,
            database: this.database,
          });
        }
      );
    });
  }
}

class Database {
  modelSets = new Map();

  register(model) {
    if (this.modelSets.has(model)) {
      return;
    }
    this.modelSets.set(model, new ModelSet(model));
  }

  save(instance) {
    const modelSet = this.getModelSet(instance.constructor);
    if (instance.id == null) {
      instance.id = (new UId()).toString();
    }
    modelSet.add(instance);
  }

  get(
    model,
    id
  ) {
    const modelSet = this.modelSets.get(model);
    if (modelSet == null) {
      throw `No such model: ${model.name}`;
    }
    const instance = modelSet.get(id);
    if (instance == null) {
      throw `No instance of "${model.name}" with id "${id}"`;
    }
    return instance;
  }

  getModelSet(model) {
    const modelSet = this.modelSets.get(model);
    if (modelSet == null){
      throw `No such model: ${model.name}`;
    }
    return modelSet;
  }
}

class ModelSet {

  constructor(model) {
    this.model = model;
    this.byId = new Map();
  }

  add(instance) {
    if (instance.id == null) {
      throw `Error: No Id. Cannot add instance ${instance.toString()}`;
    }
    const dataCopy = {...instance.data};
    this.byId.set(instance.id, dataCopy);
  }

  addAll(instances) {
    instances.forEach(this.add, this);
  }

  get(id) {
    const dataCopy = {...this.byId.get(id)};
    return new this.model(dataCopy);
  }

  getAll() {
    return Array.from(this.byId.values());
  }

  filter(fields) {
    function isMatch(data) {
      for (let field in fields) {
        if (data[field] !== fields[field]) {
          return false;
        }
      }
      return true;
    }
    const results = [];
    this.byId.forEach((data, id) => {
      if (isMatch(data)) {
        const instance = new this.model({...data});
        results.push(instance);
      }
    });
    return results;
  }
}

export {
  forEachOwn,
  Model,
  Field,
  ORM,
  ForeignKey,
  Database,
  ModelSet,
}
