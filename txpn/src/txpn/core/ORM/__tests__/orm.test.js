
import {
  forEachOwn,
  ORM,
  Database,
  Model,
  Field,
  ForeignKey,
} from 'txpn/core/ORM';
import type {
  ModelIdType,
  ModelFieldsType,
  ModelDataType,
} from 'txpn/core/ORM';

const database = new Database();
const orm = new ORM({ database: database });

class Person extends Model {
  static fields: ModelFieldsType<Person, *> = {
    name: new Field(),
  };
}

class Parent extends Model {
  static fields: ModelFieldsType<Parent, *> = {
    name: new Field(),
  };
  getFields() {
    console.log('Parent fields', Parent.fields);
  }
}

class Child extends Model {
  static fields: ModelFieldsType<Child, Parent> = {
    name: new Field(),
    parent: new ForeignKey(Parent, 'children'),
  };
}

orm.register(Person, Parent, Child);

describe('flat model', () => {
  test('ORM creation', () => {
    const personSet = database.modelSets.get(Person);
    expect(personSet).toBeDefined();
    personSet && expect(personSet.model).toBe(Person);
  });

  test('can save a Person', () => {
    const person = new Person({ name: 'Percy' });
    person.save();
    expect(person.id).toBeDefined();
    expect(person.id).toBe(person.data.id);
    const personFromDB = database.get(Person, person.id);
    expect(personFromDB).toBeDefined();
    const personFromGet = Person.get(person.id);
    expect(personFromGet).toBeDefined();
    expect(personFromGet.id).toBe(personFromDB.id);
    expect(personFromGet.data.name).toBe('Percy');
  });
});

describe('related models', () => {
  test('can save a Parent', () => {
    const parent = new Parent({ name: 'Perry' });
    parent.save();
    expect(parent.id).toBeDefined();
    expect(parent.data.name).toBe('Perry');
  })

  test('can save a Child', () => {
    const parent = new Parent({ name: 'Perry' });
    parent.save();
    const child = new Child({
      name: 'Charlie',
      parent: parent.id,
    });
    child.save();
    expect(child.id).toBeDefined();
    expect(child.data.parent).toBe(parent.id);
    const childFromGet = Child.get(child.id);
    expect(childFromGet.data.parent).toBe(parent.id);
    const parentFromLookup = child.parent;
    expect(parentFromLookup).toBeDefined();
    expect(parentFromLookup.id).toBe(parent.id);
  })
})
