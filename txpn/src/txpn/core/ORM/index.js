// @flow
import UId from 'txpn/core/UId';

function forEachOwn(
  obj: {},
  fn: (string, *, {}) => void
) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      fn(prop, obj[prop], obj);
    }
  }
}

type ModelIdType = string;

type ModelFieldsType = {
  [name: string]: Field,
};

type ModelDataMapType = {
  [name: string]: mixed,
};

type ModelDataIdType = {
  id: ?ModelIdType,
};

type ModelDataType = ModelDataIdType & ModelDataMapType;

// class Model<DataType: ModelDataType, FieldsType> {
class Model {
  data: ModelDataType;
  static fields: ModelFieldsType;

  // Defined by `ORM.register`
  save: () => void;
  static get: (id: ModelIdType) => this;

  constructor(data?: ModelDataMapType) {
    if (data == null) {
      this.data = { id: undefined };
    } else {
      this.data = { id: undefined, ...data };
    }
  }

  get id(): ?ModelIdType {
    return this.data.id;
  }

  set id(value: ModelIdType) {
    this.data.id = value;
  }

  toString(): string {
    return `${this.constructor.name} { ${JSON.stringify(this.data)} }`;
  }
}

class Field {
  model: Class<Model>;
  name: string;
  database: Database;

  attach({
    model,
    name,
    database,
  }: {
    model: Class<Model>,
    name: string,
    database: Database,
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
  parentModel: Class<Model>;
  reverseName: string;

  constructor(
    parent: Class<Model>,
    reverseName: string,
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
  getParent<ModelType: Model, ParentType: Model>(
    childInstance: ModelType
  ): ?ParentType {
    const parentId = ((childInstance.data[this.name]: any): ModelIdType);
    if (parentId != null) {
      const parent: ParentType = (this.parentModel.get(parentId): any);
      return parent;
    }
  }
  getChildren<ModelType: Model, ParentType: Model>(
    parentInstance: ParentType
  ): Array<ModelType> {
    const parentId = parentInstance.id;
    const model: ModelType = ((this.model: any): ModelType);
    const childSet = this.database.getModelSet(model);
    if (parentId != null) {
      return childSet.filter({ [this.name]: parentId });
    }
    return [];
  }
}

class ORM {
  database: Database;

  constructor({
    database,
  }: {
    database: Database,
  }) {
    this.database = database;
  }

  register(...models: Array<Class<Model>>) {
    models.forEach(model => {
      // Attach database methods.
      const database = this.database;
      database.register(model);
      model.prototype.save = function save() {
        database.save(this);
      };
      model.get = function get(id: ModelIdType): * {
        return database.get(model, id);
      };
      // Attach fields.
      forEachOwn(model.fields,
        (fieldName: string, field: Field) => {
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
  modelSets: Map<Class<Model>, ModelSet<Model>> = new Map();

  register<ModelType: Model>(model: Class<ModelType>): void {
    if (this.modelSets.has(model)) {
      return;
    }
    this.modelSets.set(model, new ModelSet(model));
  }

  save<ModelType: Model>(instance: ModelType): void {
    const modelSet = this.getModelSet(instance.constructor);
    if (instance.id == null) {
      instance.id = (new UId()).toString();
    }
    modelSet.add(instance);
  }

  get<ModelType: Model>(
    model: Class<ModelType>,
    id: ModelIdType
  ): ModelType {
    const modelSet: ?ModelSet<ModelType> = this.modelSets.get(model);
    if (modelSet == null) {
      throw `No such model: ${model.name}`;
    }
    const instance = modelSet.get(id);
    if (instance == null) {
      throw `No instance of "${model.name}" with id "${id}"`;
    }
    return instance;
  }

  getModelSet<ModelType: Model>(model: Class<ModelType>): ModelSet<ModelType> {
    const modelSet = this.modelSets.get(model);
    if (modelSet == null){
      throw `No such model: ${model.name}`;
    }
    return modelSet;
  }
}

class ModelSet<ModelType: Model> {
  model: Class<ModelType>;
  byId: Map<ModelIdType, ModelDataType>;

  constructor(model: Class<ModelType>) {
    this.model = model;
    this.byId = new Map();
  }

  add(instance: ModelType): void {
    if (instance.id == null) {
      throw `Error: No Id. Cannot add instance ${instance.toString()}`;
    }
    const dataCopy = {...instance.data};
    this.byId.set(instance.id, dataCopy);
  }

  addAll(instances: Array<ModelType>): void {
    instances.forEach(this.add, this);
  }

  get(id: ModelIdType): ModelType | void {
    const dataCopy = {...this.byId.get(id)};
    return new this.model(dataCopy);
  }

  getAll(): Array<ModelType> {
    return Array.from(this.byId.values());
  }

  filter(fields: {}): Array<ModelType> {
    function isMatch(data: ModelDataType): boolean {
      for (let field in fields) {
        if (data[field] !== fields[field]) {
          return false;
        }
      }
      return true;
    }
    const results: Array<ModelType> = [];
    this.byId.forEach((data: ModelDataType, id: ModelIdType) => {
      if (isMatch(data)) {
        const instance: ModelType = new this.model({...data});
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
export type {
  ModelIdType,
  ModelFieldsType,
  ModelDataType,
}
