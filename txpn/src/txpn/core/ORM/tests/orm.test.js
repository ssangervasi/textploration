import {
  ORM,
  Database,
  Model,
  Field,
  ForeignKey,
} from 'txpn/core/ORM';

const database = new Database();
const orm = new ORM({ database: database });

describe('flat model', () => {
  let Person;

  beforeAll(() => {
    Person = class Person extends Model {
      name = new Field();
    }
  });

  test('can save a Person', () => {
    let person = new Person({ name: 'Percy' });
    person.save();
    expect(person.id).not.toBeNull();
    let queryPerson = Person.get(person.id)
    expect(queryPerson.name).toBe('Percy');
  });
});

xdescribe('related models', () => {
  let Parent;
  let Child;

  beforeAll(() => {
    Parent = class Parent extends Model {
      name = new Field();

      killChildren() {
        this.children.all().delete();
      }
    }

    Child = class Child extends Model {
      name = new Field();
      parent = new ForeignKey(Parent, 'children');
    }
  })

  test('can save a Parent', () => {
    let parent = new Parent({ name: 'Perry' });
    parent.save();
    expect(parent.id).not.toBeNull();
    expect(parent.name).toBe('Perry');
  })

  test('can save a Child', () => {
    let parent = new Parent({ name: 'Perry' });
    parent.save();
    let child = new Child({
      name: 'Charlie',
      parent: parent,
    });
    child.save();
    expect(child.id).not.toBeNull();
    let queryChild = Child.get(child.id);
    expect(queryChild.id).toBe(child.id);
    expect(queryChild.name).toBe('Charlie');
  })
})
