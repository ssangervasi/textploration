import * as dataModel from '.';

test('constructs a World', () => {
  const worldName = 'Test World';
  let world = new dataModel.World({ name: worldName });
  expect(world).not.toBeNull();
  expect(world.id).not.toBeNull();
  expect(world.name).toBe(worldName);
});

test('updates a World', () => {
  let world = new dataModel.World({ name: 'World Name' });
  let updatedWorld = world.update({ name: 'New Name' })
  expect(updatedWorld.id).toBe(world.id);
  expect(updatedWorld.name).toBe('New Name');
  console.log(updatedWorld instanceof dataModel.World);
});

test('constructs a Room', () => {
  const roomName = 'Test Room';
  let room = new dataModel.Room({ name: roomName });
  expect(room).not.toBeNull();
  expect(room.id).not.toBeNull();
  expect(room.name).toBe(roomName);
});
