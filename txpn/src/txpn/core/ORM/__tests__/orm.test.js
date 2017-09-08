import { multiBefore } from 'txpn/testHelpers';
import ORM, { Database, Model, Field, ForeignKey } from 'txpn/core/ORM';

function createModels() {
  class Person extends Model {
    static fields = {
      name: new Field(),
    };
  }

  class Parent extends Model {
    static fields = {
      name: new Field(),
    };
  }

  class Child extends Model {
    static fields = {
      name: new Field(),
      parent: new ForeignKey(Parent, 'children'),
    };
  }

  return {
    Person: Person,
    Parent: Parent,
    Child: Child,
  };
}

describe('flat model', () => {
  let Person;
  let database;
  let orm;

  beforeEach(() => {
    Person = createModels().Person;
    database = new Database();
    orm = new ORM({ database: database });
    orm.register(Person);
  });

  test('ORM creation', () => {
    const personSet = database.modelSets.get(Person);
    expect(personSet).toBeDefined();
    expect(personSet.Model).toBe(Person);
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

  test('Model.save() returns the instance', () => {
    const person = new Person({ name: 'Percy' });
    const savedPerson = person.save();
    expect(savedPerson).toBe(person);
    expect(savedPerson.id).toBeDefined();
  })
});

describe('related models', () => {
  let database;
  let orm;
  let Parent, Child;

  function sharedBefore() {
    let models = createModels();
    Parent = models.Parent;
    Child = models.Child;
    database = new Database();
    orm = new ORM({ database: database });
  }

  /**
   * Ensure the tests pass even if the models are
   * registered in reverse order.
   */
  multiBefore(describe, beforeEach, beforeAll)
  .configure([
    { label: 'Register Parent before Child',
      beforeEach: () => {
        sharedBefore();
        orm.register(Parent, Child);
      },
    },
    { label: 'Register Child before Parent',
      beforeEach: () => {
        sharedBefore();
        orm.register(Child, Parent);
      },
    },
  ])
  .run(() => {
    test('can save a Parent', () => {
      const parent = new Parent({ name: 'Perry' });
      parent.save();
      expect(parent.id).toBeDefined();
      expect(parent.name).toBe('Perry');
    });

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
    });
  });
});
