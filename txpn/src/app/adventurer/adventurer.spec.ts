import { Adventurer } from './adventurer';

describe('adventurer constructor', () => {
  let a = new Adventurer('my name');
  
  it('should receive a name', () => {
    expect(a.name).toBe('my name');
  });

});
