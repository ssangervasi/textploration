import UId from 'txpn/core/UId';

function forEachOwn(obj, fn) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      fn.call(prop, obj[prop], obj);
    }
  }
}

class Model {
  fields;
  data;
  constructor(data) {
    this.data = data || {};
  }
  get id() {
    return this.data.id;
  }
  set id(value) {
    this.data.id = value;
  }
}

class Field {}

class ORM {
  constructor({
    database,
  }) {
    this.database = database;
    // this.models = new Map();
  }

  register(model) {
    database.register(model);
    forEachOwn(model.fields,
      (fieldName, field) => {
        if (field instanceof ForeignKey) {
          field.attach({
            childModel: model,
            name: field,
            database: this.database,
          });
        }
      }
    );
  }
}

class ForeignKey extends Field {
  constructor(parent, reverseName) {
    this.parentModel = parent;
    this.reverseName = reverseName;
  }
  attach({
    childModel,
    name,
    database,
  }) {
    this.childModel = childModel;
    this.name = name;
    this.database = database;
    this.attachToChild();
    this.attachToParent();
  }
  attachToChild() {
    const propName = this.name;
    Object.defineProperty(this.childModel.prototype, propName, {
      configurable: false,
      enumerable: true,
      get: (function getParent() {
        return this.fields[propName].getParent(this);
      }),
      set: (function setParentId(value) {
        this.data[propName] = value;
      }),
    });
  }
  attachToParent() {
    const propName = this.reverseName;
    Object.defineProperty(this.parentModel.prototype, propName, {
      configurable: false,
      enumerable: true,
      get: (function getChildren() {
        return this.fields[propName].getChildren(this);
      }),
    });
  }
  getParent(childInstance) {
    const id = childInstance[name];
    const parentSet = this.database.getModelSet(this.parentModel)
    return parentSet.get(id);
  }
  getChildren(parentInstance) {
    const id = parentInstance.id;
    const childSet = this.database.getModelSet(this.childModel)
    return childSet.filter({ [this.name]: id });
  }
}

// class ForeignKeyRelationship {
//   constructor({
//     database,
//     childModel,
//     parentModel,
//     name,
//     reverseName,
//   }) {
//     this.database = database;
//     this.childModel = childModel;
//     this.parentModel = parentModel;
//     this.name = name;
//     this.reverseName = reverseName;
//   }
//   getParent(childInstance) {
//     const id = childInstance[name];
//     const parentSet = this.database.getModelSet(this.parentModel)
//     return parentSet.get(id);
//   }
//   getChildren(parentInstance) {
//     const id = parentInstance.id;
//     const childSet = this.database.getModelSet(this.childModel)
//     return childSet.filter({ [this.name]: id });
//   }
// }

class Database() {
  modelSets = new Map();

  register(model: Model) {
    if (this.modelSets.has(model)) {
      return;
    }
    this.modelSets.set(model, new ModelSet());
  }

  save(instance) {
    if (instance.id == null) {
      instance.id = (new UId()).toString();
    }
    const modelSet = this.modelSets.get(instance.constructor);
    modelSet.add(instance);
  }

  get(id)
}

class ModelSet<ModelType: Model> {
  byId: Map<string, ModelType> = new Map();

  add(model: ModelType) {
    this.byId.set(model.id, model);
  }

  addAll(models: Array<ModelType>): void {
    models.forEach(this.add, this);
  }

  get(id: string): ModelType | void {
    return this.byId.get(id);
  }

  getAll(): Array<ModelType> {
    return Array.from(this.byId.values());
  }

  filter(fields) {
    function isMatch(record) {
      for (let field in fields) {
        if (record[field] !== fields[field]) {
          return false;
        }
      }
      return true;
    }
    const results = [];
    this.byId.forEach((id, record) {
      if (isMatch(record)) {
        results.push(record);
      }
    });
    return results;
  }
}