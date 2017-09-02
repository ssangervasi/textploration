function forEachOwn(obj, fn) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      fn.call(prop, obj[prop], obj);
    }
  }
}

class ORM {
  constructor({
    database,
  }) {
    this.database = database
  }

  register(model, relationships) {
    forEachOwn(relationships,
      (field, rel) => {
        if (rel instanceof ForeignKeyField) {
          let fk = new ForeignKeyRelationship({
            database: this.database,
            childModel: model,
            name: field,
            parentModel: rel.parent.
            reverseName: rel.reverseName,
          });
          fk.attach();
        }
      }
    );
  }
}

class ForeignKeyField {
  constructor(parent, reverseName) {
    this.parent = parent;
    this.reverseName = reverseName;
  }
}

class ForeignKeyRelationship {
  constructor({
    database,
    childModel,
    parentModel,
    name,
    reverseName,
  }) {
    this.database = database;
    this.childModel = childModel;
    this.parentModel = parentModel;
    this.name = name;
    this.reverseName = reverseName;
  }
  attach() {
    const childProperty = `${this.name}`
    Object.defineProperty(this.childModel, thi, attrs: any)
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

class Database() {
  modelSets = new Map();

  register(model: Model) {
    if (this.modelSets.has(model)) {
      return;
    }
    this.modelSets.set(model, new ModelSet());
  }
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