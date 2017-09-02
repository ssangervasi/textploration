// @flow

type ModelDataTypes = string | number | boolean | void;

type ModelData = {
  [fieldName: string]: ModelDataTypes;
};

type ModelFieldTypes = Field;

type ModelFields = {
  [fieldName: string]: ModelFieldTypes;
};

class MetaModel {
  fields: ModelFields;
}

class ORM {
  constructor() {
  }

  Model(metaModel: MetaModel) {
    for (let fieldName in metaModel.fields) {
      metaModel.fields[fieldName].install(this, fieldName);
    }
  }
}

class Field {
  install(model: Model, name: string) {

  }
}

class IdField extends Field {

}

class RelationshipField extends Field {

}

class ForeignKey extends RelationshipField {

}
