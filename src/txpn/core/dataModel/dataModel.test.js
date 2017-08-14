import * as dataModel from '.';

test('constructs a World', () => {
  const worldName = 'Test World';
  let world = new dataModel.World({ name: worldName });
  expect(world).not.toBeNull();
  expect(world.id).not.toBeNull();
  expect(world.name).toBe(worldName);
});

test('constructs a Room', () => {
  const roomName = 'Test Room';
  let room = new dataModel.Room({ name: roomName });
  expect(room).not.toBeNull();
  expect(room.id).not.toBeNull();
  expect(room.name).toBe(roomName);
});
