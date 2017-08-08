// @flow
import World from './World';

import { it, expect } from 'jest';

it('constructs a world', () => {
  let world = new World({name: 'Test World'});
  expect(world).not.toBeNull();
});
